# Nimble Gravity - Frontend Challenge

¡Hola! Antes que nada, quería agradecerles por la oportunidad y pedir disculpas por la demora en la entrega. Debido a una carga de trabajo actual bastante intensa, no pude dedicarle el tiempo antes, pero no quería ni querìa dejar pasar la oportunidad de completar el desafío.

##  Enfoque del Desafío

Para este challenge, prioricé los siguientes pilares:

* **Legibilidad y Mantenimiento:** Estructuré el código de forma modular, separando la lógica de la API en un servicio independiente (`useApi.js`) para mantener los componentes limpios y fáciles de leer.
* **Manejo de Estados y Carga:** Implementé estados de `loading` (usados en proyectos anteriores) para mejorar la experciencia de usuario y evitar que el usuario interactúe con elementos vacíos mientras se obtienen los datos.
* **Robustez en Errores:** Creé un controlador(Manejador) de respuestas centralizado (`handleResponse`) que captura tanto errores de servidor como fallos de red, asegurando que la aplicación no falle sin notificar al usuario sobre dicho error.
* **Consistencia de Datos:** Me aseguré de que el envío de la postulación (Step 5) cumpla estrictamente con la nomenclatura y estructura requerida por la documentación.
* **Buenas prácticas:** Agregué breve documentación, como suelo enfatizar en mis proyectos, para dar a entender al colega que interactuará con el codigo desarrollado , de manera más simple, el funcionar de cada modulo. Támbien, me parecio importante el uso de variables de entorno en el archivo .env.




---
*Alexis Lagarde*