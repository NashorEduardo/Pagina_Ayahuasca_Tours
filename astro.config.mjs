import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    // Usamos el dominio de Cloudflare para que el sitemap no falle al compilar
    site: 'https://ayahuasca-web.pages.dev',

    // Configuración i18n para el requisito de 3 idiomas (Español, Inglés, Portugués)
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en', 'pt'],
        routing: {
            prefixDefaultLocale: false, // El español será la raíz (/)
        },
    },

    integrations: [
        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date(),
        }),
    ],
    output: 'static',
});