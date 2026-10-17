
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    cover: z
      .object({
        image: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
