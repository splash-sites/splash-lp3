/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      // Cores do sistema de tokens do canvas. Todas resolvem para custom properties
      // definidas em src/styles/global.css (tema claro + escuro), nunca presas a @media.
      colors: {
        tinta: 'var(--tinta)',
        mare: 'var(--mare)',
        'mare-forte': 'var(--mare-forte)',
        respingo: 'var(--respingo)',
        concreto: 'var(--concreto)',
        bruma: 'var(--bruma)',
        areia: 'var(--areia)',
        papel: 'var(--papel)',
        linha: 'var(--linha)',
        'linha-forte': 'var(--linha-forte)',
      },
      borderColor: {
        DEFAULT: 'var(--linha)',
      },
      fontFamily: {
        sans: ['Archivo', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Bricolage Grotesque', 'Archivo', 'Helvetica Neue', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        wrap: '1200px',
        prose65: '65ch',
      },
      letterSpacing: {
        ref: '0.08em',
      },
    },
  },
  plugins: [],
};
