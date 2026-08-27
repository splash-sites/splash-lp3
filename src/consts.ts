// Constantes de site. Um único lugar para dados de marca, contato e navegação.

export const SITE = {
  url: 'https://splashsistemas.com.br',
  name: 'Splash Sistemas',
  shortName: 'Splash',
  // Descrição padrão usada quando a página não define a sua.
  description:
    'Estúdio de criação de sites e sistemas sob medida. Cada projeto desenhado do zero para o processo real da sua empresa.',
  locale: 'pt_BR',
  lang: 'pt-BR',
  ogImage: '/og-image.png',
  themeColor: '#0E1420',
} as const;

export const CONTACT = {
  whatsappDisplay: '(51) 98213-5882',
  whatsappE164: '+5551982135882',
  whatsappLink: 'https://wa.me/5551982135882',
  whatsappMessage:
    'Oi! Vim pelo site e quero conversar sobre um projeto.',
  email: 'contato@splashsistemas.com.br',
  instagramHandle: '@splash.sistemas',
  instagramUrl: 'https://instagram.com/splash.sistemas',
  hours: 'Segunda a sexta, 9h às 18h',
  // Dado local mantido para SEO (JSON-LD) e consistência de NAP. Rua fica em aberto
  // até confirmarem endereço presencial — ver README, seção Placeholders.
  addressLocality: 'Torres',
  addressRegion: 'RS',
  addressCountry: 'BR',
  geo: { latitude: -29.3336, longitude: -49.7264 },
  // Áreas atendidas (usado em areaServed do schema).
  areaServed: [
    'Torres',
    'Arroio do Sal',
    'Capão da Canoa',
    'Três Cachoeiras',
    'Terra de Areia',
    'Litoral Norte do Rio Grande do Sul',
    'Rio Grande do Sul',
  ],
} as const;

/** Link do WhatsApp com mensagem pré-preenchida. */
export const whatsappHref = `${CONTACT.whatsappLink}?text=${encodeURIComponent(
  CONTACT.whatsappMessage,
)}`;

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const NAV: NavItem[] = [
  {
    href: '/criacao-de-sites',
    label: 'Serviços',
    children: [
      { href: '/criacao-de-sites', label: 'Criação de Sites' },
      { href: '/landing-pages', label: 'Landing Pages' },
      { href: '/sites-institucionais', label: 'Sites Institucionais' },
      { href: '/sistemas-sob-medida', label: 'Sistemas sob Medida' },
    ],
  },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/blog', label: 'Blog' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
];

/** Links planos para o mapa de site no rodapé. */
export const FOOTER_LINKS = {
  servicos: [
    { href: '/criacao-de-sites', label: 'Criação de Sites' },
    { href: '/landing-pages', label: 'Landing Pages' },
    { href: '/sites-institucionais', label: 'Sites Institucionais' },
    { href: '/sistemas-sob-medida', label: 'Sistemas sob Medida' },
  ],
  conteudo: [
    { href: '/blog', label: 'Blog' },
    { href: '/portfolio', label: 'Portfólio' },
    { href: '/sobre', label: 'Sobre a Splash' },
    { href: '/contato', label: 'Contato' },
  ],
};
