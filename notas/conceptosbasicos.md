# Apuntes de astro js

# estructura de proyecto recomendad

---

src/_ - El código fuente de tu proyecto (componentes, páginas, estilos, etc.)
public/_ - Archivos sin código que no serán procesados (fuentes, íconos, etc.)
package.json - El manifiesto de tu proyecto
astro.config.mjs - El archivo de configuración de Astro (recomendado)
tsconfig.json - El archivo de configuración de TypeScript (recomendado)

---

# islas en Astro

se refiere a un componente de UI interactivo en una página HTML predominantemente estática. Pueden existir varias islas en una página, y una isla siempre se renderiza en forma aislada.

---

// Ejemplo: Usa un componente estático React en la página, sin JavaScript.
import MyReactComponent from '../components/MyReactComponent.jsx';

---

<!-- 100% HTML, ¡Cero JavaScript cargado en la página! -->
<MyReactComponent />

como dar interactividad a componetes de reac js o otros soalmente ha estos mediate la propiedad client:load

---

// Ejemplo: Usa un componente dinámico de React en la página.
import MyReactComponent from '../components/MyReactComponent.jsx';

---

<!-- ¡Este componente ahora es interactivo en la página!
     El resto de tu sitio web se mantendrá estático con cero JS. -->
<MyReactComponent client:load />

# los componentes

## son parte esencial de astro y se comportan como partes reutilizables de codigo

---

## Estructura de un componente

Un componente de Astro se compone de dos partes principales: el script del componente y el maquetado del componente. Cada parte cumple una función diferente, pero juntas proveen un marco de trabajo más

---

// Script del componente (JavaScript)
## puede tener codigo js o ts para hacer

Importar otros componentes Astro
Importar componentes de otros frameworks, como React
Importar datos, como un archivo JSON
Consultar contenido de una API o base de datos
Crear variables que luego puedes referenciar en tu maquetado

---

<!-- Maquetado del componente (HTML + Expresiones JS) -->

## soporta los siguientes contenidos

-- expresiones de JavaScript
-- etiquetas <style> y <script> de Astro,
-- componentes importados
-- directivas especiales de Astro. Los datos y valores definidos en el script del componente pueden ser usados en el maquetado del componente para producir HTML creado dinámicamente.

# Los Props

son propiedades que se le pasan a un componente para que este pueda renderizar su contenido de forma dinamica

## ejemplo de uso

## 1- componete padre

import GreetingHeadline from './GreetingHeadline.astro';
const name = "Astro"

---

<h1>Tarjeta de saludos</h1>
<GreetingHeadline greeting="Hola" name={name} />
<p>¡Espero que tenga un día maravilloso!</p>

## 2- componete hijo
---------------------------------------------------
este componete recibe los valores del padre y aplica los proms que se le envian cuando es llamado en el componete anterior
---
import GreetingHeadline from './GreetingHeadline.astro';
const name = "Astro"
---
<h1>Tarjeta de saludos</h1>
<GreetingHeadline greeting="Hola" name={name} />
<p>¡Espero que tenga un día maravilloso!</p>
---
// Utilización: <GreetingHeadline saludo="Qué tal" nombre="Amiga" />
const { saludo, nombre } = Astro.props
---
<h2>{saludo}, {nombre}!</h2>

## tambien puedes aplicar typescript a los props mediante el uso de interfaze para dar tipos y controlar el valor recibido

---
interface Props {
  nombre: string;
  saludo?: string;
}

const { saludo = "Hola", nombre } = Astro.props;
---
<h2>{saludo}, {nombre}!</h2> 

# Los Slots 
consultar el ejemplo en el proyexto de notas de astro del componete Wrapper.astro

## son una forma de pasar contenido a un componente hijo desde un componente padre. Los slots son útiles cuando quieres que un componente hijo pueda recibir contenido HTML arbitrario, en lugar de solo texto o valores de propiedades. 

Diferente a props, que son atributos enviados a un componente Astro y disponibles para utilizar con Astro.props, los slots renderizan elementos HTML hijos donde se lo indique.
## ejemplo de uso
---
import Header from './Header.astro';
import Logo from './Logo.astro';
import Footer from './Footer.astro';

const { titulo } = Astro.props
---
<div id="content-wrapper">
  <Header />
  <Logo />
  <h1>{titulo}</h1>
  <slot />  <!-- aquí  se posionara todo el contenido que se le añada cuando se llame el co mpene -->
  <Footer />
</div>

## Slots con nombre

### Los slots con nombre son útiles cuando quieres pasar contenido a un componente hijo en un lugar específico. Por ejemplo, si tienes un componente que renderiza un botón, puedes usar un slot con nombre para pasar el contenido del botón al componente hijo.

## ejemplo de uso
---
import Header from './Header.astro';
import Logo from './Logo.astro';
import Footer from './Footer.astro';

const { titulo } = Astro.props
---
<div id="content-wrapper">
  <Header />
  <slot name="after-header"/>  <!--  hijos con el atributo `slot="after-header"` van aquí -->
  <Logo />
  <h1>{titulo}</h1>
  <slot />  <!--  hijos sin `slot`, o con el atributo `slot="default"` van aquí -->
  <Footer />
  <slot name="after-footer"/>  <!--  hijos con el atributo `slot="after-footer"` van aquí -->
</div> 

## ejemplo de como asiganr un slot con nombre 

---
import Wrapper from '../components/Wrapper.astro';
---
<Wrapper titulo="Página de Fred">
  <img src="https://my.photo/fred.jpg" slot="after-header">
  <h2>Todo sobre Fred</h2>
  <p>Aquí veremos cosas sobre Fred.</p>
  <p slot="after-footer">Copyright 2022</p>
</Wrapper>

# Paginas 

## Las páginas son componentes de Astro que se encuentran en la subcarpeta src/pages/. Ellas son las responsables de manejar el enrutamiento, la carga de datos y el diseño general de cada página HTML de tu proyecto.


## Link entre páginas
Sección titulada Link entre páginas
Escribe HTML estándar elementos <a> en tus páginas Astro para enlazar a otras páginas en tu sitio. Usa una ruta URL relativa a tu dominio raíz como enlace, no una ruta de archivo relativa.

### ejemplo para enlazar a https://example.com/authors/sonali/ desde cualquier otra página en example.com:

src/pages/index.astro
Lee más <a href="/authors/sonali/">sobre Sonali</a>.


