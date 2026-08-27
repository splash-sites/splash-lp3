# Splash Sistemas — site institucional

Site estático multi-página em **Astro 4 + @astrojs/tailwind + Tailwind 3**,
otimizado para busca orgânica. Zero JavaScript de framework: a navegação mobile e
o FAQ usam `<details>` nativo; a única animação (assinatura *splash*) respeita
`prefers-reduced-motion`.

## Rodar local

```bash
npm install
npm run dev          # http://localhost:4321
```

```bash
npm run build        # gera dist/ (inclui sitemap-index.xml + sitemap-0.xml)
npm run preview      # serve o dist/ para conferência
```

> **Nota de dependência:** `@astrojs/sitemap` está fixado em `3.2.1`. A partir de
> `3.3` a integração depende do hook `astro:routes:resolved`, que não existe no
> Astro 4.16 — versões acima quebram o build com
> `Cannot read properties of undefined (reading 'reduce')`. Ao subir para Astro 5,
> pode voltar para `@astrojs/sitemap` mais recente.
>
> A chave `allowScripts` no `package.json` foi adicionada pelo wrapper de npm
> desta máquina (libera os scripts de instalação do `sharp` e do `esbuild`).
> É inofensiva; pode remover se o seu ambiente não usar esse wrapper.

## Mapa de rotas → título / meta / termo-alvo

| Rota | `<title>` (nº car.) | Meta description (nº car.) | Termo-alvo |
|---|---|---|---|
| `/` | Criação de sites e sistemas sob medida — Splash Sistemas (60) | Estúdio que desenha cada site e cada sistema do zero para o processo real da sua empresa. Sem template, sem gambiarra. Fale no WhatsApp. (138) | criação de sites · sistema sob medida |
| `/criacao-de-sites` | Criação de sites profissionais sob medida — Splash (54) | Criação de sites com código próprio, rápidos e prontos para o Google. Escopo e preço fechados antes de começar. Fale no WhatsApp. (137) | criação de sites · desenvolvimento de sites |
| `/landing-pages` | Landing page que converte, feita sob medida — Splash (52) | Landing page feita para uma única ação: uma oferta, um botão, texto que responde a dúvida real de quem chega. Peça um orçamento no WhatsApp. (140) | landing page · página de vendas que converte |
| `/sites-institucionais` | Site institucional profissional sob medida — Splash (52) | Site institucional que passa confiança, explica o que a empresa faz e aparece no Google. Código próprio e painel para editar sozinho. (133) | site institucional |
| `/sistemas-sob-medida` | Sistema sob medida e automação de processos — Splash (53) | Software sob medida para o seu processo: ordens de serviço, agenda, estoque, relatórios. Entregas em partes usáveis. Fale no WhatsApp. (136) | sistema sob medida · software sob medida · automação de processos |
| `/portfolio` | Portfólio de sites e sistemas — Splash Sistemas (48) | Projetos de criação de sites, landing pages e sistemas sob medida feitos pela Splash. Cases reais em breve. (108) | — |
| `/portfolio/[slug]` | {título do case} — Portfólio Splash Sistemas | resumo do case (≤150) | — |
| `/sobre` | Sobre a Splash Sistemas — estúdio de software sob medida (59) | A Splash são dois desenvolvedores que atendem cada projeto de ponta a ponta. Conheça como a gente trabalha e o que entrega. (126) | — |
| `/contato` | Contato — Splash Sistemas (26) | Fale com a Splash pelo WhatsApp (51) 98213-5882, por e-mail ou pelo formulário. Resposta no mesmo dia útil. (105) | — |
| `/blog` | Blog da Splash Sistemas — sites, SEO e sistemas (49) | Textos diretos sobre criação de sites, SEO, performance e sistemas sob medida. Sem jargão de agência. (100) | — |
| `/blog/[slug]` | {título do artigo} (≤60) | {description do frontmatter} (≤160) | ver frontmatter `targetKeyword` |
| `/404` | Página não encontrada — Splash Sistemas | — | `noindex` |

### Artigos-semente (`src/content/blog/`)

| Slug | Termo-alvo | Serviço linkado |
|---|---|---|
| `quanto-custa-criar-um-site-para-empresa-em-2026` | quanto custa criar um site | `/criacao-de-sites` |
| `site-institucional-ou-landing-page` | site institucional ou landing page | `/landing-pages` |
| `o-que-e-sistema-sob-medida` | sistema sob medida | `/sistemas-sob-medida` |
| `por-que-meu-site-nao-aparece-no-google` | meu site não aparece no google | `/criacao-de-sites` |
| `template-pronto-vs-site-sob-medida` | template pronto ou site sob medida | `/criacao-de-sites` |

## SEO técnico por página

Centralizado em `src/layouts/BaseLayout.astro` (props `title`, `description`,
`path`, `ogType`, `ogImage`, `publishedTime`, `modifiedTime`, `noindex`):

- `<title>` e meta description únicos por página (todos dentro dos limites acima)
- `<link rel="canonical">` absoluto, sem barra final (`trailingSlash: 'never'`)
- Open Graph + Twitter Card (título, descrição, imagem, `article:*` nos artigos)
- `<html lang="pt-BR">`, `theme-color`, viewport
- Fontes: `preconnect` + `preload` + `display=swap` + `<noscript>` de fallback;
  stack real em `tailwind.config.mjs` (Bricolage Grotesque / Archivo / IBM Plex Mono)
- Um único `<h1>` por página, com o termo-alvo de forma natural; hierarquia
  `h2`/`h3` sem pular nível
- Imagens via `astro:assets` (`<Image>`), com `alt`, `width`/`height` e
  `loading="lazy"` abaixo da dobra
- `robots.txt` liberando tudo e apontando `sitemap-index.xml`
- `sitemap-index.xml` + `sitemap-0.xml` gerados no build (`/404` excluído)

## Dados estruturados (JSON-LD)

| Onde | Schema |
|---|---|
| Todas as páginas (`BaseLayout`) | `@graph` com `Organization` (`#org`), `ProfessionalService`/`LocalBusiness` (`#localbusiness`, com `address`, `geo -29.3336,-49.7264`, `areaServed`, `openingHoursSpecification`) e `WebSite` |
| Páginas de serviço | `Service` com `provider → #org` e `areaServed` |
| Artigos | `BlogPosting` (headline, datePublished, dateModified, author, image) |
| Onde há breadcrumb | `BreadcrumbList` |
| FAQ das páginas de serviço | `FAQPage` |

Dados de marca e contato ficam em **`src/consts.ts`** — inclusive a área atendida
(`Torres` + litoral norte + RS), usada só nos dados estruturados e no rodapé, não
nos títulos/headings visíveis.

## Placeholders a substituir (nenhum dado fictício no código)

Procure por `TODO:` e pelos marcadores entre colchetes.

- **`[CASES REAIS]`** — `src/data/portfolio.ts`. As 3 entradas têm `placeholder: true`;
  a UI mostra "[ ESPAÇO PARA CASE REAL ]". Preencher nome, cliente, link, problema,
  solução e resultado, trocar as imagens em `src/assets/portfolio/` e remover a flag.
- **`[DEPOIMENTOS REAIS]`** — bloco na Home (`src/pages/index.astro`) e espaço na
  página de Landing Pages. Marcado como pendência até haver fala autorizada.
- **`[NÚMEROS]`** — `src/pages/sobre.astro` (ano de início, quantidade de projetos).
  Só incluir se forem verdadeiros.
- **`[BIO DOS FUNDADORES]`** — `src/components/FoundersSection.astro`. Hoje há só a
  divisão de papéis (verdadeira); a bio estendida é um `TODO`.
  Fotos reais já em `src/assets/team/` e `public/team/`.
- **`[CNPJ / RAZÃO SOCIAL]`** — não incluído no `LocalBusiness`. Adicionar em
  `BaseLayout.astro` (`legalName`, `vatID`/`taxID`) se houver.
- **`[ENDEREÇO]`** — o `LocalBusiness` usa só `addressLocality`/`addressRegion`.
  Se passarem a atender em endereço fixo, completar `streetAddress` +
  `postalCode` em `src/consts.ts` e o `TODO` em `src/pages/contato.astro`.
- **Formulário de contato** — `src/pages/contato.astro` faz `POST /contato` sem
  back-end. Ligar a um endpoint real (Formspree, Netlify Forms, função
  serverless) ou trocar por link direto de WhatsApp.

## Estrutura

```
astro.config.mjs          site + integrações (tailwind, sitemap)
tailwind.config.mjs       tokens de cor (via CSS vars) + fontes
src/
  consts.ts               marca, contato, navegação, área atendida
  styles/global.css       sistema de tokens (tema claro + escuro) + utilitários da prancha
  layouts/BaseLayout.astro <head>, SEO, OG, JSON-LD base, header/footer, skip-link
  components/
    Header.astro          navegação real (desktop + mobile via <details>)
    Footer.astro          mapa de links para todas as páginas + NAP
    Breadcrumbs.astro     trilha visível + BreadcrumbList
    Section.astro         seção com a coluna de medida
    Icon.astro            ícones SVG de traço (sem emoji)
    SplashMark.astro      assinatura de tinta na água (hero + CTA)
    Button.astro / CtaBand.astro / Faq.astro / FoundersSection.astro
    ServicePage.astro     corpo comum das 4 páginas de serviço + Service JSON-LD
  data/
    services.ts           conteúdo das 4 páginas de serviço (incluso, processo, FAQ)
    portfolio.ts          cases (PLACEHOLDER)
  content/
    config.ts             schema da coleção de blog
    blog/*.md             5 artigos-semente
  pages/                   uma rota estática por página (ver mapa acima)
design-canvas/            arquivos .dc.html do canvas de design aprovado (referência)
```

## Acessibilidade / performance

- Landmarks `header` / `nav` / `main#conteudo` / `footer`; skip-link para o conteúdo
- Foco de teclado visível global (`:focus-visible`)
- Tokens de cor com contraste AA em tema claro e escuro; nenhuma cor definida
  apenas dentro de `@media` — `:root` tem a paleta clara completa e os blocos
  `@media (prefers-color-scheme: dark)` / `[data-theme="dark"]` só redefinem tokens
- Imagens otimizadas em build (`sharp`), servidas como `.webp` com dimensões fixas
