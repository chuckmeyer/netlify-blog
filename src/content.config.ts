import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Chuck Meyer'),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Cocktail-specific fields
    ingredients: z.array(z.string()),
    instructions: z.array(z.string()),
    glass: z.string(),
    garnish: z.string().optional(),
    spirit: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
