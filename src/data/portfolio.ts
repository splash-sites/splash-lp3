// PLACEHOLDER — nenhum case abaixo é real.
// TODO: substituir por dado real de cliente. Cada case precisa de:
//   nome do projeto, cliente, link, problema resolvido, resultado combinado com o cliente,
//   e uma imagem real em src/assets/portfolio/.
// Enquanto não houver cliente com autorização, estas entradas ficam marcadas
// visualmente como "[ESPAÇO PARA CASE REAL]" na interface.

import case1 from '../assets/portfolio/case-1.jpg';
import case2 from '../assets/portfolio/case-2.jpg';
import case3 from '../assets/portfolio/case-3.jpg';

export type PortfolioCase = {
  slug: string;
  /** true enquanto for placeholder — a UI mostra o rótulo de pendência */
  placeholder: boolean;
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
  link?: string;
};

export const portfolio: PortfolioCase[] = [
  {
    slug: 'case-exemplo-site-institucional',
    placeholder: true,
    title: 'Título do projeto',
    client: '[CLIENTE REAL]',
    sector: 'Setor a definir',
    service: 'Criação de Sites',
    serviceHref: '/criacao-de-sites',
    year: '2026',
    cover: case1,
    coverAlt:
      'Imagem de exemplo, será substituída por captura real do projeto entregue.',
    summary:
      'Espaço reservado para um case real de site institucional. O conteúdo abaixo é estrutura, não dado verdadeiro.',
    problem:
      '[PROBLEMA RESOLVIDO]: o que estava travando o cliente antes do projeto.',
    solution:
      '[O QUE FOI FEITO]: escopo entregue, decisões de estrutura, stack escolhida.',
    result:
      '[RESULTADO]: número ou mudança concreta, combinada e autorizada pelo cliente.',
  },
  {
    slug: 'case-exemplo-landing-page',
    placeholder: true,
    title: 'Título do projeto',
    client: '[CLIENTE REAL]',
    sector: 'Setor a definir',
    service: 'Landing Pages',
    serviceHref: '/landing-pages',
    year: '2026',
    cover: case2,
    coverAlt:
      'Imagem de exemplo, será substituída por captura real do projeto entregue.',
    summary:
      'Espaço reservado para um case real de landing page de campanha. O conteúdo abaixo é estrutura, não dado verdadeiro.',
    problem:
      '[PROBLEMA RESOLVIDO]: objetivo da campanha e o que impedia a conversão.',
    solution:
      '[O QUE FOI FEITO]: oferta, estrutura da página, medição configurada.',
    result: '[RESULTADO]: taxa de conversão ou volume, autorizado pelo cliente.',
  },
  {
    slug: 'case-exemplo-sistema-sob-medida',
    placeholder: true,
    title: 'Título do projeto',
    client: '[CLIENTE REAL]',
    sector: 'Setor a definir',
    service: 'Sistemas sob Medida',
    serviceHref: '/sistemas-sob-medida',
    year: '2026',
    cover: case3,
    coverAlt:
      'Imagem de exemplo, será substituída por captura real do projeto entregue.',
    summary:
      'Espaço reservado para um case real de sistema sob medida. O conteúdo abaixo é estrutura, não dado verdadeiro.',
    problem:
      '[PROBLEMA RESOLVIDO]: o trabalho manual ou o controle solto que existia antes.',
    solution:
      '[O QUE FOI FEITO]: módulos entregues, processo automatizado, integrações.',
    result:
      '[RESULTADO]: horas economizadas ou erro reduzido, autorizado pelo cliente.',
  },
];

export const caseBySlug = Object.fromEntries(
  portfolio.map((c) => [c.slug, c]),
) as Record<string, PortfolioCase>;
