import { defineConfig } from 'astro/config';
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    redirects: {// Redirecciones de rutas  programados
        '/old-page': '/new-page'
      }

});

