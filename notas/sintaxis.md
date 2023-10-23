# sintaxis de astro
la sintaix de astro es muy parecida a la de react js en los archivos jsx
## DINÁMICO VS REACTIVO
Con este enfoque, puedes incluir valores dinámicos que se calculan en el frontmatter. Pero una vez incluidos, estos valores no son reactivos y nunca cambiarán. Los componentes Astro son plantillas que sólo se ejecutan una vez, durante el paso de renderizado. 

## Recordar 


### Los atributos HTML se convertirán en strings, por lo que no es posible pasar funciones y objetos a elementos HTML. Por ejemplo, no se puede asignar un gestor de eventos a un elemento HTML en un componente de Astro:

no-hagas-esto.astro
---
function handleClick () {
    console.log("¡botón pulsado!");
}
---
<!-- ❌ ¡Esto no funciona! ❌ -->
<button onClick={handleClick}>¡No pasará nada cuando me hagas clic!</button>

### En su lugar, utiliza un script del lado del cliente para añadir el gestor de eventos, como lo harías en JavaScript convencional:

hacer-esto-en-lugar.astro
---
---
<button id="button">Haz clic</button>
<script>
  function handleClick () {
    console.log("¡botón pulsado!");
  }
  document.getElementById("button").addEventListener("click", handleClick);
</script> 


### Etiquetas dinámicas son nombres que se les peuden dar ha estiquetas pra personalizar el maquetado en html como en este ejemplo
src/components/DynamicTags.astro
---
import MyComponent from "./MyComponent.astro";
const Element = 'div'
const Component = MyComponent;
---
<Element>Hola!</Element> <!-- se representa como <div>Hola!</div> -->
<Component /> <!-- se representa como <MyComponent /> -->

### reglas de escrituras
1- Los nombres de las variables deben ir en mayúsculas.
2-No se admiten directivas de hidratación. Cuando se usan las directivas client


# reglas generales que se deben recordar
1- No se admiten directivas de hidratación. Cuando se usan las directivas client o server, se debe especificar el valor true o false. Por ejemplo, client={true} o server={false}.
