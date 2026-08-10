const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const asset = (path: string) => `${base}${path.startsWith('/') ? path : `/${path}`}`;

export const site = {
	name: 'JL.Dev',
	fullName: 'Jennifer López',
	role: 'FullStack Developer',
	location: 'Murcia',
	tagline: 'Experiencias digitales que conectan visión y tecnología.',
	description:
		'Desarrolladora FullStack especializada en construir productos web que unen la visión del cliente con la realidad tecnológica.',
	email: 'jendevelopez@gmail.com',
	cv: asset('/Jennifer_Lopez_CV.pdf'),
	ctaPrimary: 'Contáctame',
	ctaSecondary: 'Ver proyectos',
	socials: [
		{ name: 'GitHub', href: 'https://github.com/jenDevelopez', icon: 'github' },
		{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/jendevelopez', icon: 'linkedin' },
	],
} as const;

export const navLinks = [
	{ label: 'Sobre mí', href: '#about' },
	{ label: 'Trayectoria', href: '#resume' },
	{ label: 'Proyectos', href: '#projects' },
	{ label: 'Contacto', href: '#contact' },
] as const;

export const trustSignals = [
	{ value: 'FullStack', label: 'web & apps' },
	{ value: 'WordPress', label: 'y e-commerce' },
	{ value: 'Murcia', label: 'disponible remota' },
] as const;

export const about = {
	title: 'Sobre mí',
	image: asset('/images/about.png'),
	paragraphs: [
		'Soy Jennifer López, desarrolladora FullStack. No solo escribo código: construyo el puente entre la visión del cliente y una experiencia digital real.',
		'He trabajado con WordPress/WooCommerce, React, Vue, Astro, PHP y Python. Me involucro en cada fase del proyecto y entrego con orientación a resultados.',
	],
} as const;

export const skills: string[] = [
	'HTML5',
	'CSS3',
	'JavaScript (ES6+)',
	'TypeScript',
	'React',
	'Astro',
	'PHP',
	'MySQL',
	'Python',
	'Django',
	'Docker',
	'WordPress',
	'WooCommerce',
	'Git/GitHub',
];

export const experience = [
	{
		role: 'Software developer',
		company: 'Etifoods',
		period: '2026',
		description: 'Desarrollo y mantenimiento con Astro, Vue y Laravel',
	},
	{
		role: 'Desarrolladora Web',
		company: 'Factoría Creativa',
		period: '2024 – 2025',
		description: 'Desarrollo y mantenimiento de sitios WordPress.',
	},
	{
		role: 'Desarrollo Ecommerce',
		company: 'Xlab com',
		period: '2024',
		description: 'Mantenimiento de e-commerce con WooCommerce, usando Agile.',
	},
	{
		role: 'Desarrolladora Web',
		company: 'Anima animalis',
		period: '2022',
		description: 'Desarrollo web y mantenimiento de sitio.',
	},
] as const;

export const education = [
	{ title: 'Laravel', place: 'Laracast', period: 'Actualmente' },
	{ title: 'IA y Productividad', place: 'Google', period: '2025' },
	{ title: 'CP3 Creación apps web', place: 'Nascor', period: '2024' },
	{ title: 'React Bootcamp', place: 'IT Academy', period: '2023' },
	{ title: 'CP2 Creación páginas web', place: 'Aspasia', period: '2022' },
] as const;

export type ProjectCategory = 'app' | 'web' | 'ecommerce';

export const projectFilters = [
	{ id: 'all', label: 'Todos' },
	{ id: 'app', label: 'Apps' },
	{ id: 'web', label: 'Webs' },
	{ id: 'ecommerce', label: 'E-commerce' },
] as const;

export const projects = [
	{
		id: 'pokedex',
		title: 'Pokedex',
		description: 'App de pokedex con la información de cada Pokémon.',
		category: 'app' as ProjectCategory,
		image: asset('/projects-screenshots/mockup-pokedex.png'),
		tags: ['React', 'CSS3', 'TypeScript', 'Zustand'],
		liveUrl: 'https://pokedex-develop.netlify.app/',
		githubUrl: 'https://github.com/jenDevelopez/pokedex.git',
		result: 'App interactiva',
	},
	{
		id: 'js-quizz',
		title: 'Javascript quizz',
		description: 'Aplicación de preguntas de JavaScript para principiantes.',
		category: 'app' as ProjectCategory,
		image: asset('/projects-screenshots/js-quizz.webp'),
		tags: ['React', 'Zustand', 'TailwindCSS'],
		liveUrl: 'https://quizz-javascript-app.netlify.app/',
		githubUrl: 'https://github.com/jenDevelopez/javascript-quizz.git',
		result: 'Aprendizaje práctico',
	},
	{
		id: 'poseidrone',
		title: 'Poseidrone',
		description: 'Web de empresa dedicada a la grabación con drones.',
		category: 'web' as ProjectCategory,
		image: asset('/projects-screenshots/poseidrone.webp'),
		tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'PHP', 'WordPress'],
		liveUrl: 'https://poseidrone.com/',
		result: 'Presencia digital',
	},
	{
		id: 'notes-app',
		title: 'Notes App',
		description: 'Web app de notas con operaciones CRUD.',
		category: 'app' as ProjectCategory,
		image: asset('/projects-screenshots/notes-app.webp'),
		tags: ['Vue', 'Pinia', 'CSS3', 'JavaScript'],
		liveUrl: 'https://jennotesapp.netlify.app/',
		githubUrl: 'https://github.com/jenDevelopez/vue-notes-app.git',
		result: 'CRUD completo',
	},
] as const;

export const offer = {
	title: '¿Buscas una desarrolladora para tu próximo proyecto?',
	subtitle:
		'Cuéntame qué necesitas y te respondo con una propuesta clara. Disponible para proyectos freelance y colaboraciones.',
	cta: 'Escribirme ahora',
	note: 'Respuesta rápida · Sin compromiso',
} as const;
