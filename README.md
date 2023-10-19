# componentes en astro
son  partes de codigo reutilizables como los componentes de react pero que son partes de html y no modulos de funcion 

ejemplo de componente en astro
```
---
const titulo= "Hola mundo about"
---
<h1>{titulo}</h1>

```

Se importa de la siguiente manera
---
import Layout from '../layouts/Layout.astro';
import Titulo from '../components/titulo.astro';
---

<Layout title="bienvenido ####">
	<Titulo/>
</Layout>
``` 

# etiquetas dinamicas
ayudan a mejorar la visualizacion de elementos
---
const Container= "div"
---
<Container class="card">

    <img src="img/image.png" alt="image" class="card__image">

    <h2>imagen 1</h2>
  <p> imagen sorpresa</p>

</Container>

# slot 
sirven para crear contenido dentro de la etiquetas o componentes

# rutas dinamicas y estaticas

-- rutas estaticas : son por defectos e crean normalmente con el / nombre del archivo que se quire acceder

-- rutas dinamicas : se debe configurar el  output para que se generen las rutas dinamicamente por defecto es static
export default defineConfig({
    output:"server"
});
