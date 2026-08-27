import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(160),
    // Termo-alvo principal do artigo (cauda longa).
    targetKeyword: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('Bernardo Dornelles'),
    category: z.string(),
    readingMinutes: z.number().int().positive(),
    // Rota da página de serviço relacionada, para link interno + CTA.
    relatedService: z.enum([
      '/criacao-de-sites',
      '/landing-pages',
      '/sites-institucionais',
      '/sistemas-sob-medida',
    ]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
