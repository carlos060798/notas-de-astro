# en rutamiento

## astro usa enrutamientos dinamicon con <a> como lo hace next

<p>¡Leer más <a href="/about/">sobre</a> Astro!</p>

## Ejemplo: Rutas estáticas

cada rua toma el nombre del archivo que contine la carpeta page
src/pages/index.astro -> mysite.com/
src/pages/about.astro -> mysite.com/about

## Ejemplo: Rutas dinámicas

src/pages/authors/[slug].astro -> mysite.com/authors/sonali
src/pages/authors/[slug].astro -> mysite.com/authors/rafael

---

// funcion para generar rutas dinamicas
export function getStaticPaths() {
return [
{params: {dog: 'clifford'}},
{params: {dog: 'rover'}},
{params: {dog: 'spot'}},
];
}

## const { dog } = Astro.params;

<div>¡Buen chico, {dog}!</div>

# redirecciones

## Redirecciones configuradas

## Puedes especificar un mapeo de redirecciones permanentes en la configuración de Astro con el valor redirects. Para la mayoría de las redirecciones, esto es un mapeo de una ruta antigua a la nueva ruta:

astro.config.mjs
import { defineConfig } from 'astro/config';
export default defineConfig({
redirects: {
'/old-page': '/new-page'
}
});

## Redirecciones estáticas
