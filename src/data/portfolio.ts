// Os 3 exemplos de trabalho, um por faixa de plano. Nomes e descrições são reais;
// o estudo de caso detalhado (problema / o que foi feito / resultado) ainda não
// foi escrito — está marcado com detailPending e texto entre colchetes.
// TODO: escrever o detalhe de cada case e adicionar a URL real (campo `link`).
// TODO: trocar as imagens de capa por captura real de cada projeto.

import case1 from '../assets/portfolio/case-1.jpg';
import case2 from '../assets/portfolio/case-2.jpg';
import case3 from '../assets/portfolio/case-3.jpg';

export type PortfolioCase = {
  slug: string;
  /** faixa de plano que este trabalho representa */
  plan: 'Standard' | 'Pro' | 'Premium';
  /** true enquanto o estudo de caso detalhado não estiver escrito */
  detailPending: boolean;
  title: string;
  client: string;
  sector: string;
  service: string;
  serviceHref: string;
  year: string;
  cover: ImageMetadata;
  coverAlt: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  /** URL do projeto no ar — vazio até termos o link real */
  link?: string;
};

export const portfolio: PortfolioCase[] = [
  {
    slug: 'bastos-e-ferreira',
    plan: 'Standard',
    detailPending: true,
    title: 'Bastos & Ferreira',
    client: 'Bastos & Ferreira',
    sector: 'Advocacia · São Paulo',
    service: 'Landing Pages',
    serviceHref: '/landing-pages',
    year: '2026',
    cover: case1,
    coverAlt: 'Prévia da landing page do escritório de advocacia Bastos & Ferreira.',
    summary:
      'Escritório de advocacia em São Paulo. Landing page direta ao ponto, feita para transformar visita em conversa no WhatsApp.',
    problem: '[PROBLEMA RESOLVIDO]: o que estava travando o escritório antes do projeto.',
    solution: '[O QUE FOI FEITO]: estrutura da página, copy e medição de conversão.',
    result: '[RESULTADO]: número ou mudança concreta, autorizado pelo cliente.',
    link: '',
  },
  {
    slug: 'vila-horizonte',
    plan: 'Pro',
    detailPending: true,
    title: 'Vila Horizonte',
    client: 'Vila Horizonte',
    sector: 'Moradia sênior · alto padrão',
    service: 'Sites Institucionais',
    serviceHref: '/sites-institucionais',
    year: '2026',
    cover: case2,
    coverAlt: 'Prévia do site institucional do residencial sênior Vila Horizonte.',
    summary:
      'Residencial sênior de alto padrão. Site institucional completo, com estrutura de páginas, depoimentos e agendamento de visita.',
    problem: '[PROBLEMA RESOLVIDO]: o que o site precisava resolver para as famílias.',
    solution: '[O QUE FOI FEITO]: arquitetura de páginas, conteúdo e agendamento.',
    result: '[RESULTADO]: número ou mudança concreta, autorizado pelo cliente.',
    link: '',
  },
  {
    slug: 'eclat-estetica',
    plan: 'Premium',
    detailPending: true,
    title: 'Éclat Estética Avançada',
    client: 'Éclat Estética Avançada',
    sector: 'Estética · Torres, RS',
    service: 'Criação de Sites',
    serviceHref: '/criacao-de-sites',
    year: '2026',
    cover: case3,
    coverAlt: 'Prévia do site da clínica Éclat Estética Avançada, com seção de antes e depois.',
    summary:
      'Clínica de estética em Torres, RS. Site com antes e depois, tratamentos e agendamento, mais uma landing page de campanha, pronto para escalar com automação.',
    problem: '[PROBLEMA RESOLVIDO]: o que a clínica precisava mostrar e automatizar.',
    solution: '[O QUE FOI FEITO]: site, landing page de campanha e integrações.',
    result: '[RESULTADO]: número ou mudança concreta, autorizado pelo cliente.',
    link: '',
  },
];

export const caseBySlug = Object.fromEntries(
  portfolio.map((c) => [c.slug, c]),
) as Record<string, PortfolioCase>;
