# se pueden agregar de dos formas

Comando astro add
Sección titulada Comando astro add
Astro incluye una herramienta CLI para agregar integraciones de primera parte: astro add. Este comando hará:

(Opcionalmente) Instalar todas las dependencias necesarias y dependencias entre pares
(También opcionalmente) Actualizar tu archivo astro.config.\* para aplicar esta integración
Para instalar @astrojs/react, ejecuta lo siguiente desde el directorio de tu proyecto y siga las instrucciones:

Ventana de terminal

# Usando NPM

npx astro add react



Si tienes algún problema, no dudes en informárnoslo en GitHub y prueba los pasos de instalación manual a continuación.


Primero, instala la integración @astrojs/react de la siguiente manera:
npm install @astrojs/react
si ve un aviso “No se puede encontrar el paquete ‘react’” (o similar) al iniciar Astro, deberá instalar react y react-dom:

npm install react react-dom

# configuracion 
Ahora, aplica esta integración a tu archivo astro.config.* usando la propiedad integrations:

astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  // ...
  integrations: [react()],
  //             ^^^^^^^
});

## configuracion para poder trabajar con lo componnete hijos en reac js
 integrations: [react(
      experimentalReactChildren: true,)]


# configuraciones para todos los demas librerias
 colocar los componentes comunes de los frameworks en la misma carpeta (p. ej. /components/react/ y /components/solid/) para facilitar la especificación de tus inclusiones, pero esto no es obligatorio:

import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import solid from '@astrojs/solid-js';

export default defineConfig({
  // Habilita varios frameworks para admitir todo tipo de componentes diferentes.
  // ¡No se necesita `include` si solo estás utilizando un solo framework JSX!
  integrations: [
    preact({
      include: ['**/preact/*'],
    }),
    react({
      include: ['**/react/*'],
    }),
    solid({
      include: ['**/solid/*'],
    }),
  ],
});