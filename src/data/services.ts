// Configuração das quatro páginas de serviço. Cada página é uma rota estática
// que renderiza <ServicePage service={...} />. A copy segue os artboards do canvas.

export type ServiceStep = {
  n: string;
  title: string;
  desc: string;
  youBring: string;
};

export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  /** breadcrumb / rótulo curto */
  shortLabel: string;
  /** <title> — ≤ 60 caracteres, termo-alvo à esquerda */
  title: string;
  /** meta description — ≤ 155 caracteres, escrita para clique */
  metaDescription: string;
  /** termo-alvo principal */
  targetKeyword: string;
  /** schema.org Service.serviceType */
  serviceType: string;
  kicker: string;
  /** <h1> — contém o termo-alvo de forma natural */
  h1: string;
  intro: string;
  includedTitle: string;
  included: { label: string; desc: string }[];
  includedNote?: string;
  process: ServiceStep[];
  faq: ServiceFaq[];
  /** slugs de artigos do blog relacionados */
  relatedPosts: string[];
};

const criacaoDeSites: Service = {
  slug: 'criacao-de-sites',
  shortLabel: 'Criação de Sites',
  title: 'Criação de sites profissionais sob medida | Splash',
  metaDescription:
    'Criação de sites com código próprio, rápidos e prontos para o Google. Escopo e preço fechados antes de começar. Fale no WhatsApp.',
  targetKeyword: 'criação de sites',
  serviceType: 'Criação de sites',
  kicker: 'Criação de sites & páginas de conversão',
  h1: 'Criação de sites feitos à mão, rápidos e achados no Google',
  intro:
    'Site institucional ou página de campanha com código próprio, estrutura pronta para busca e um painel simples para você editar sozinho. Sem construtor, sem tema comprado.',
  includedTitle: 'O que está incluso',
  included: [
    {
      label: 'Arquitetura de conteúdo',
      desc: 'Mapa de páginas, títulos e URLs definidos para fazer sentido para quem lê e para o buscador.',
    },
    {
      label: 'Redação junto com você',
      desc: 'A gente escreve o rascunho de cada página a partir de uma conversa; você revisa e ajusta.',
    },
    {
      label: 'SEO na estrutura',
      desc: 'Marcação semântica, dados estruturados, sitemap e metatags, não um plugin no fim.',
    },
    {
      label: 'Painel de edição',
      desc: 'Você troca textos, imagens e horários sozinho, sem chamar ninguém.',
    },
    {
      label: 'Formulário e integrações',
      desc: 'Contato caindo no seu WhatsApp ou e-mail, com aviso de recebimento.',
    },
    {
      label: 'Publicação e treino',
      desc: 'Configuração de domínio e hospedagem, mais uma chamada de vídeo mostrando como mexer.',
    },
  ],
  includedNote:
    'Fora do padrão (loja, agendamento, área de cliente) entra como módulo, orçado à parte.',
  process: [
    {
      n: '01',
      title: 'Conversa e escopo',
      desc: '30 a 45 minutos entendendo o negócio, quem é o cliente e o que o site precisa resolver. Sai daqui com escopo e prazo por escrito.',
      youBring: 'Exemplos de sites que gosta, textos e fotos que já tiver.',
    },
    {
      n: '02',
      title: 'Estrutura e conteúdo',
      desc: 'Montamos o mapa de páginas e o rascunho de texto de cada uma. Você revisa antes de virar tela.',
      youBring: 'Revisão do texto e aprovação da estrutura.',
    },
    {
      n: '03',
      title: 'Desenho das telas',
      desc: 'Layout de cada página em versão desktop e celular, para aprovar antes de programar.',
      youBring: 'Um "ok" ou uma rodada de ajustes.',
    },
    {
      n: '04',
      title: 'Código e revisão',
      desc: 'Programação do site, testes em celular e desktop, checagem de velocidade e de SEO.',
      youBring: 'Acesso ao domínio; conferência num link de teste.',
    },
    {
      n: '05',
      title: 'No ar e ajuste fino',
      desc: 'Publicação, treino de uso e 15 dias de ajustes pequenos sem custo.',
      youBring: 'Nada. A partir daqui é com você.',
    },
  ],
  faq: [
    {
      q: 'Quanto tempo leva para criar o site?',
      a: 'Uma página de campanha fica pronta em cerca de 2 semanas; um site institucional de 5 a 7 páginas, de 4 a 6 semanas. O prazo exato sai no escopo e depende de quão rápido o conteúdo volta revisado.',
    },
    {
      q: 'Quanto custa?',
      a: 'O valor é por projeto, fechado antes de começar, sem cobrança por hora. Você recebe o número junto com o escopo, sem "a partir de".',
    },
    {
      q: 'Quem escreve os textos?',
      a: 'A gente escreve o rascunho a partir de uma conversa e você ajusta. Se preferir escrever tudo, o valor cai um pouco.',
    },
    {
      q: 'Consigo mexer no site depois, sozinho?',
      a: 'Sim. Textos, imagens, horários e preços ficam num painel simples. Mudança de estrutura ou de layout a gente faz para você, orçada à parte.',
    },
    {
      q: 'E se eu já tenho um site?',
      a: 'A gente migra o conteúdo que ainda serve, mantém as URLs que têm tráfego e redireciona o resto para não perder posição no Google.',
    },
    {
      q: 'O site é meu de verdade?',
      a: 'É. Você fica com o código, o domínio e o acesso à hospedagem. Se um dia quiser levar para outra pessoa, leva.',
    },
  ],
  relatedPosts: [
    'quanto-custa-criar-um-site-para-empresa-em-2026',
    'template-pronto-vs-site-sob-medida',
    'por-que-meu-site-nao-aparece-no-google',
  ],
};

const landingPages: Service = {
  slug: 'landing-pages',
  shortLabel: 'Landing Pages',
  title: 'Landing page que converte, feita sob medida | Splash',
  metaDescription:
    'Landing page feita para uma única ação: uma oferta, um botão, texto que responde a dúvida real de quem chega. Peça um orçamento no WhatsApp.',
  targetKeyword: 'landing page',
  serviceType: 'Criação de landing pages',
  kicker: 'Página de campanha & conversão',
  h1: 'Landing page feita para uma ação e para converter',
  intro:
    'Uma página só, com foco em uma oferta e um caminho claro até o contato. Carga rápida, texto que responde objeção e medição de resultado desde o primeiro dia.',
  includedTitle: 'O que está incluso',
  included: [
    {
      label: 'Uma oferta, um objetivo',
      desc: 'A página inteira é construída em torno de uma ação: pedir orçamento, agendar, baixar material.',
    },
    {
      label: 'Copy de conversão',
      desc: 'Título que diz a oferta em uma frase, blocos que respondem às dúvidas reais de quem chega.',
    },
    {
      label: 'Prova quando existir',
      desc: 'Espaço preparado para depoimento, caso ou número real, sem inventar nada enquanto não houver.',
    },
    {
      label: 'Formulário curto',
      desc: 'Só os campos necessários, caindo no seu WhatsApp ou e-mail, com confirmação para quem enviou.',
    },
    {
      label: 'Velocidade real',
      desc: 'Imagens no tamanho certo e quase nenhum JavaScript, para a página abrir antes de o visitante desistir.',
    },
    {
      label: 'Medição pronta',
      desc: 'Eventos de clique e de envio configurados para você saber o que converte, não só quantas visitas teve.',
    },
  ],
  includedNote:
    'Teste A/B, integração com CRM e automação de e-mail entram como módulo, orçados à parte.',
  process: [
    {
      n: '01',
      title: 'Conversa e oferta',
      desc: 'Definimos qual é a ação da página, para quem ela fala e qual objeção precisa derrubar.',
      youBring: 'A oferta, o público e o destino do contato (WhatsApp, e-mail, CRM).',
    },
    {
      n: '02',
      title: 'Estrutura e copy',
      desc: 'Rascunho do texto na ordem da página: promessa, prova, objeções, chamada para ação.',
      youBring: 'Revisão do texto e dados de prova, se já existirem.',
    },
    {
      n: '03',
      title: 'Desenho da página',
      desc: 'Layout desktop e celular, com o botão principal sempre à vista.',
      youBring: 'Aprovação ou uma rodada de ajustes.',
    },
    {
      n: '04',
      title: 'Código, medição e revisão',
      desc: 'Programação, eventos de conversão, teste de velocidade e de formulário.',
      youBring: 'Acesso ao domínio e à ferramenta de anúncios, se houver campanha.',
    },
    {
      n: '05',
      title: 'No ar e ajuste',
      desc: 'Publicação e 15 dias de ajustes pequenos com base nos primeiros dados.',
      youBring: 'Nada. A partir daqui é acompanhar o resultado.',
    },
  ],
  faq: [
    {
      q: 'Qual a diferença entre landing page e site?',
      a: 'A landing page tem uma página e um objetivo. O site institucional tem várias páginas e precisa dar conta de tudo o ano inteiro. Campanha paga costuma pedir landing page; presença permanente pede site.',
    },
    {
      q: 'Quanto tempo leva?',
      a: 'Cerca de 2 semanas, contando a rodada de revisão de texto e o desenho da página.',
    },
    {
      q: 'A página serve para anúncio no Google e no Instagram?',
      a: 'Serve. A gente entrega com os eventos de clique e de envio configurados para a sua conta de anúncios medir conversão.',
    },
    {
      q: 'Preciso ter depoimento e número para funcionar?',
      a: 'Ajuda, mas não trava. A página é construída com um espaço reservado para prova social, que fica visível como pendência até você ter o dado real.',
    },
    {
      q: 'Consigo trocar o texto depois?',
      a: 'Sim, pelo mesmo painel simples das outras páginas. Ajuste de estrutura a gente faz para você.',
    },
  ],
  relatedPosts: [
    'site-institucional-ou-landing-page',
    'quanto-custa-criar-um-site-para-empresa-em-2026',
  ],
};

const sitesInstitucionais: Service = {
  slug: 'sites-institucionais',
  shortLabel: 'Sites Institucionais',
  title: 'Site institucional profissional sob medida | Splash',
  metaDescription:
    'Site institucional que passa confiança, explica o que a empresa faz e aparece no Google. Código próprio e painel para editar sozinho.',
  targetKeyword: 'site institucional',
  serviceType: 'Criação de sites institucionais',
  kicker: 'Presença permanente da empresa',
  h1: 'Site institucional que passa confiança e aparece no Google',
  intro:
    'O site que responde quando alguém procura a sua empresa pelo nome ou pelo serviço. Estrutura clara, texto honesto e velocidade que não faz o visitante desistir.',
  includedTitle: 'O que está incluso',
  included: [
    {
      label: 'Páginas que fazem sentido',
      desc: 'Início, sobre, serviços, contato e o que mais o seu negócio precisar, com URL limpa em cada uma.',
    },
    {
      label: 'Texto que explica o negócio',
      desc: 'Escrito a partir de uma conversa, do lado de quem lê, sem clichê de agência.',
    },
    {
      label: 'SEO na base',
      desc: 'Títulos, hierarquia, dados estruturados de empresa local e sitemap desde a primeira linha.',
    },
    {
      label: 'Painel de edição',
      desc: 'Você atualiza textos, equipe, fotos e horários sem depender da gente.',
    },
    {
      label: 'Contato e mapa',
      desc: 'Formulário no seu canal, botão de WhatsApp e dados da empresa consistentes com o Google.',
    },
    {
      label: 'Publicação e treino',
      desc: 'Domínio, hospedagem e uma chamada mostrando como manter o site vivo.',
    },
  ],
  includedNote:
    'Blog, catálogo, múltiplos idiomas e área de cliente entram como módulo, orçados à parte.',
  process: [
    {
      n: '01',
      title: 'Conversa e escopo',
      desc: 'Entendemos o negócio, o público e quantas páginas o site realmente precisa. Escopo e prazo por escrito.',
      youBring: 'Exemplos de sites que gosta, materiais e fotos que já tiver.',
    },
    {
      n: '02',
      title: 'Estrutura e conteúdo',
      desc: 'Mapa de páginas e rascunho de texto de cada uma, para você revisar antes de virar tela.',
      youBring: 'Revisão do texto e aprovação da estrutura.',
    },
    {
      n: '03',
      title: 'Desenho das telas',
      desc: 'Layout desktop e celular de todas as páginas.',
      youBring: 'Aprovação ou uma rodada de ajustes.',
    },
    {
      n: '04',
      title: 'Código e revisão',
      desc: 'Programação, testes em vários aparelhos, checagem de velocidade e de SEO técnico.',
      youBring: 'Acesso ao domínio; conferência num link de teste.',
    },
    {
      n: '05',
      title: 'No ar e ajuste fino',
      desc: 'Publicação, treino de uso e 15 dias de ajustes pequenos sem custo.',
      youBring: 'Nada. A partir daqui é com você.',
    },
  ],
  faq: [
    {
      q: 'Quantas páginas um site institucional precisa ter?',
      a: 'Na maioria dos casos, entre 4 e 7: início, sobre, uma página por serviço principal e contato. A gente define o número no escopo, a partir do que o seu cliente procura.',
    },
    {
      q: 'Quanto tempo leva?',
      a: 'De 4 a 6 semanas para um site de 5 a 7 páginas, contando as rodadas de revisão de conteúdo.',
    },
    {
      q: 'O site vai aparecer no Google?',
      a: 'A estrutura é feita para isso: marcação correta, dados de empresa local e velocidade. Aparecer para o nome da empresa é rápido; para termos concorridos depende de conteúdo e tempo.',
    },
    {
      q: 'Consigo atualizar a equipe e os serviços sozinho?',
      a: 'Sim, pelo painel de edição. Mudança de layout ou de estrutura a gente faz para você.',
    },
    {
      q: 'Vocês fazem a hospedagem?',
      a: 'A gente configura domínio e hospedagem no seu nome e explica o custo antes. O site é seu e pode sair quando você quiser.',
    },
  ],
  relatedPosts: [
    'site-institucional-ou-landing-page',
    'por-que-meu-site-nao-aparece-no-google',
    'template-pronto-vs-site-sob-medida',
  ],
};

const sistemasSobMedida: Service = {
  slug: 'sistemas-sob-medida',
  shortLabel: 'Sistemas sob Medida',
  title: 'Sistema sob medida e automação de processos | Splash',
  metaDescription:
    'Software sob medida para o seu processo: ordens de serviço, agenda, estoque, relatórios. Entregas em partes usáveis. Fale no WhatsApp.',
  targetKeyword: 'sistema sob medida',
  serviceType: 'Desenvolvimento de software sob medida',
  kicker: 'Software interno para a sua operação',
  h1: 'Sistema sob medida para o processo real da sua empresa',
  intro:
    'Software feito a partir de como você já trabalha (ordens de serviço, agenda, estoque, orçamento, relatórios) e nada além disso. Entregue em partes, cada uma já usável no dia a dia.',
  includedTitle: 'O que está incluso',
  included: [
    {
      label: 'Mapa do processo',
      desc: 'Antes de qualquer linha de código, a gente desenha com você o fluxo que o sistema vai cobrir.',
    },
    {
      label: 'Só o que você usa',
      desc: 'Cada tela existe porque tem um passo do seu processo atrás dela. Sem 200 funções que ninguém abre.',
    },
    {
      label: 'Entregas em partes',
      desc: 'Você começa a usar o primeiro módulo enquanto o próximo está sendo feito.',
    },
    {
      label: 'Relatórios que se atualizam sozinhos',
      desc: 'O número que você refaz na mão toda semana passa a estar pronto quando você abre.',
    },
    {
      label: 'Acesso ao código e aos dados',
      desc: 'Repositório e banco no seu nome. O sistema é seu, com ou sem a gente.',
    },
    {
      label: 'Treino e acompanhamento',
      desc: 'Treinamento da equipe e suporte combinado depois que sobe.',
    },
  ],
  includedNote:
    'Integração com sistemas de terceiros (nota fiscal, ERP, meios de pagamento) entra como módulo, orçada à parte.',
  process: [
    {
      n: '01',
      title: 'Conversa e mapa do processo',
      desc: 'Entendemos como o trabalho acontece hoje, onde trava e o que dá para resolver primeiro.',
      youBring: 'Acesso a quem executa o processo e às planilhas ou sistemas usados hoje.',
    },
    {
      n: '02',
      title: 'Escopo do primeiro módulo',
      desc: 'Escolhemos a parte que dá mais alívio com menos esforço e fechamos escopo e prazo dela.',
      youBring: 'Prioridade: qual dor resolver antes.',
    },
    {
      n: '03',
      title: 'Desenho das telas',
      desc: 'Fluxo e telas do módulo, para validar com quem vai usar antes de programar.',
      youBring: 'Feedback de quem opera no dia a dia.',
    },
    {
      n: '04',
      title: 'Código, testes e entrega',
      desc: 'Programação, testes com dados reais e colocação do módulo em uso.',
      youBring: 'Um período de teste com a equipe usando de verdade.',
    },
    {
      n: '05',
      title: 'Próximos módulos e ajuste',
      desc: 'Com o primeiro módulo rodando, repetimos o ciclo para as próximas partes do processo.',
      youBring: 'A próxima prioridade.',
    },
  ],
  faq: [
    {
      q: 'Qual a diferença entre sistema sob medida e sistema pronto?',
      a: 'O sistema pronto é mais barato no começo e serve se o seu processo é padrão. O sob medida encaixa no seu jeito de trabalhar e não cobra por usuário nem por função extra. Costuma compensar quando o processo é o seu diferencial.',
    },
    {
      q: 'Quanto tempo até eu começar a usar?',
      a: 'O primeiro módulo costuma ficar utilizável em 4 a 8 semanas. A ideia é você não esperar meses para ver algo funcionando.',
    },
    {
      q: 'Como é cobrado?',
      a: 'Por módulo, com escopo e preço fechados antes de cada etapa. Sem cobrança por hora e sem mensalidade por usuário.',
    },
    {
      q: 'Os dados são meus?',
      a: 'São. Você tem acesso ao banco de dados e ao código-fonte desde a primeira entrega.',
    },
    {
      q: 'Dá para integrar com o que já uso?',
      a: 'Na maioria dos casos sim: nota fiscal, meios de pagamento, ERP, planilhas. A integração é orçada como módulo à parte, depois de conferir a documentação de quem vai integrar.',
    },
    {
      q: 'E se eu precisar de mudança depois de pronto?',
      a: 'Mudança pequena entra no acompanhamento combinado; mudança grande vira um novo módulo, com escopo próprio.',
    },
  ],
  relatedPosts: [
    'o-que-e-sistema-sob-medida',
    'quanto-custa-criar-um-site-para-empresa-em-2026',
  ],
};

export const services: Service[] = [
  criacaoDeSites,
  landingPages,
  sitesInstitucionais,
  sistemasSobMedida,
];

export const serviceBySlug = Object.fromEntries(
  services.map((s) => [s.slug, s]),
) as Record<string, Service>;
