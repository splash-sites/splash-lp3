// Avaliações reais de clientes no Google, transcritas do perfil da Splash Sistemas.
// Fonte: CONTACT.googleReviewsUrl (src/consts.ts).
// TODO: ao entrar avaliação nova, acrescentar aqui e conferir `total`.
// Textos truncados no Google ("... Mais") foram cortados na última frase completa.

export type Review = {
  author: string;
  rating: 5;
  text: string;
};

/** Média e total exibidos no cabeçalho da seção. */
export const reviewStats = {
  average: '5,0',
  // TODO: confirmar o total exato no painel do Google (contagem feita pelos prints).
  total: 14,
};

export const reviews: Review[] = [
  {
    author: 'Vinicius Lopez',
    rating: 5,
    text: 'Excelente empresa! Profissionais competentes e entrega dentro da expectativa. Também estão sempre disponíveis para esclarecer dúvidas e dar o suporte devido. Contratarei mais vezes.',
  },
  {
    author: 'Karoline',
    rating: 5,
    text: 'Excelente experiência! Empresa séria, profissional e comprometida com a qualidade. Desde o primeiro contato, demonstraram atenção aos detalhes, transparência e muita competência na execução do projeto.',
  },
  {
    author: 'David Maciel',
    rating: 5,
    text: 'Excelente experiência! O atendimento foi muito bom, muito atenciosos e o site ficou como eu precisava. Recomendo muito!',
  },
  {
    author: 'Laura Costa',
    rating: 5,
    text: 'Super indico! São profissionais muito competentes, atenciosos e realmente entendem do que fazem. Pra quem precisa de desenvolvimento de sites, sistemas ou soluções personalizadas, vale muito a pena.',
  },
  {
    author: 'Henrique Barros',
    rating: 5,
    text: 'O time respeitou o prazo de entrega e se manteve em contato ao longo do processo. Recomendo.',
  },
  {
    author: 'Giulia da Luz',
    rating: 5,
    text: 'Atenderam a minha necessidade e superaram as expectativas. Muito satisfeita!',
  },
  {
    author: 'Renato Longo Makariewicz',
    rating: 5,
    text: 'Profissionais muito éticos.',
  },
  {
    author: 'Guilherme Pinheiro',
    rating: 5,
    text: 'Que excelência em serviço!',
  },
  {
    author: 'João Víctor',
    rating: 5,
    text: 'Atendimento e profissionalismo nota 10!',
  },
  {
    author: 'Arthur Bronzatti',
    rating: 5,
    text: 'Excelente serviço.',
  },
];
