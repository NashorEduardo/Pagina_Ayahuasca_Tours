import { z, defineCollection } from 'astro:content';

const tours = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),           // El título debe ser texto
    description: z.string(),     // La descripción debe ser texto
    price: z.string(),           // Ejemplo: "150 USD"
    duration: z.string(),        // Ejemplo: "3 días / 2 noches"
    image: z.string(),           // Ruta de la foto
    isFeatured: z.boolean().optional(), // ¿Es un tour destacado? (Opcional)
  }),
});

// Exportamos la colección para que Astro la reconozca
export const collections = {
  'tours': tours,
};