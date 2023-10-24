# integracion de astro con reac js 
se instala el paquete de npm install @astrojs/reactnpm install @astrojs/react

se configura el astro.config
múltiples rutas de archivos.

Recomendamos colocar los componentes comunes del marco en la misma carpeta (por ejemplo, /components/react/y /components/solid/) para facilitar la especificación de sus inclusiones, pero esto no es obligatorio:

astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';


export default defineConfig({
 !
  integrations: [
 
    react({
      include: ['**/react/*'],
    }),
  ]
});

para hacer reactivo el componete creado se coloca 
	<Search client:load/>

