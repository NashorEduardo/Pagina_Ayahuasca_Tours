import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // ¡Requerido en la nueva versión!

const toursCollection = defineCollection({
  // En Astro moderno, usamos 'glob' para indicarle la carpeta de tus archivos Markdown
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/tours" }), 
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    price: z.number().optional(),
    duration: z.string().optional(),
    availability: z.string().optional(),
    frequency: z.string().optional(),
    difficulty: z.string().optional(),
    whatsapp: z.string().optional(),
    // Definimos el itinerario de forma estricta para resolver las líneas rojas del HTML
    itinerary: z.array(
      z.object({
        day: z.number(),
        title: z.string(),
        description: z.string().optional(),
        activities: z.array(z.string()).optional(),
        images: z.array(z.string()).optional(),
      })
    ).optional(),
    gallery: z.array(z.string()).optional(),
    videoUrl: z.string().optional(),
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ).optional(),
  }),
});

export const collections = {
  'tours': toursCollection, // Vincula tu carpeta src/content/tours
};