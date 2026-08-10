import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body: Record<string, unknown>, status = 200) {
	return new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}

export const POST: APIRoute = async ({ request }) => {
	const apiKey = process.env.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;
	const to = process.env.CONTACT_TO_EMAIL || import.meta.env.CONTACT_TO_EMAIL || 'jendevelopez@gmail.com';
	const from =
		process.env.RESEND_FROM_EMAIL ||
		import.meta.env.RESEND_FROM_EMAIL ||
		'Portfolio <onboarding@resend.dev>';

	if (!apiKey) {
		return json({ error: 'Falta RESEND_API_KEY en el servidor.' }, 500);
	}

	let payload: { name?: string; email?: string; message?: string };

	try {
		payload = await request.json();
	} catch {
		return json({ error: 'JSON inválido.' }, 400);
	}

	const name = String(payload.name ?? '').trim();
	const email = String(payload.email ?? '').trim();
	const message = String(payload.message ?? '').trim();

	if (!name || !email || !message) {
		return json({ error: 'Nombre, email y mensaje son obligatorios.' }, 400);
	}

	if (!emailRegex.test(email)) {
		return json({ error: 'Email no válido.' }, 400);
	}

	if (name.length > 120 || email.length > 200 || message.length > 5000) {
		return json({ error: 'Alguno de los campos es demasiado largo.' }, 400);
	}

	const resend = new Resend(apiKey);

	const { error } = await resend.emails.send({
		from,
		to: [to],
		replyTo: email,
		subject: `Portfolio — mensaje de ${name}`,
		text: [`Nombre: ${name}`, `Email: ${email}`, '', message].join('\n'),
		html: `
			<p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
			<p><strong>Email:</strong> ${escapeHtml(email)}</p>
			<p><strong>Mensaje:</strong></p>
			<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
		`,
	});

	if (error) {
		console.error('Resend error:', error);
		return json({ error: error.message || 'No se pudo enviar el email.' }, 502);
	}

	return json({ ok: true });
};

function escapeHtml(value: string) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}
