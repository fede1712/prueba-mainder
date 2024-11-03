# PRUEBA MAINDER

Esta aplicación consiste en un sencillo portal de empleo para usuarios, donde podemos postular rápidamente a diversas candidaturas de diferentes agencias de empleo.

URL de producción: [Prueba Mainder](https://prueba-mainder.vercel.app/)

## Comenzando

1. Clona el repositorio ⚡️:

```bash
git clone https://github.com/fede1712/prueba-mainder.git
```

2. Instala las dependencias 💻:

```bash
npm install
```

3. Si tienes problemas usando npm install, puedes usar el comando npm install --force. (Esto se debe a que hemos utilizado una librería de componentes, Shadcn/ui para montar el sistema de temas y notificaciones de la aplicación. En la misma documentación de la librería recomienda usar este comando porque no todos los componentes están optimizados para React 19).

```bash
npm install --force
```

## Levantando la aplicación

Para correr el servidor de desarrollo 🚀:

```bash
npm run dev
```

Para correr el servidor de producción primero debemos construir el proyecto 🧱🔨:

```bash
npm run build
```

Ahora, podemos levantar el servidor de producción 🚀:

```bash
npm run start
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

## Tech Stack elegido

- Next.js
- Tailwind CSS
- TypeScript
- ESLint
- Tailwind animate

## Estrcutura del proyecto

```
.
├── README.md
├── src
│   ├── app
│   ├── components
│   ├── hooks
│   ├── lib
│   ├── types
│   ├── utils

```

- **`app`**: Contiene la estructura principal de la aplicación, incluyendo la página principal `page.tsx`, los estilos globales `globals.css` y la página 404 (`not-found.tsx`). También incluye subdirectorios para páginas específicas.
- **`components`**: Esta carpeta contiene los componentes utilizados en la aplicación.
- **`hooks`**: Esta carpeta contiene los ganchos personalizados utilizados en la aplicación.
- **`lib`**: Esta carpeta contiene los archivos para poder realizar las llamadas a la API.
- **`types`**: Esta carpeta contiene los tipos utilizados en la aplicación.
- **`utils`**: Esta carpeta contiene distintas funciones útiles utilizadas en la aplicación.

## Suposiciones tomadas y razones detrás de cada una.

### Stack

- **`Next.js`**: Es una plataforma de desarrollo web de código abierto que permite crear aplicaciones web de alto rendimiento y escalabilidad. Es una de las opciones más populares para construir aplicaciones web en React.

- **`Tailwind CSS`**: Es una biblioteca de CSS de código abierto que proporciona una estructura de diseño limpia y moderna para aplicaciones web. Es una opción popular para construir aplicaciones web con estilos y componentes de código abierto.

- **`TypeScript`**: Es un lenguaje de programación de código abierto que agrega tipos y soporte para la programación orientada a objetos.

- **`ESLint`**: Es una herramienta de análisis estático y automático para la identificación y corregir errores en código JavaScript y TypeScript.

### Decisiones tomadas

- **`Diseño`**:

  - Se decidió utilizar un Hero para las páginas de la aplicación que fuera atractivo y sencillo de entender. La idea es que cada vez que entremos en una página, sepamos donde estamos. Por otro lado, usar un Hero en cada una de las páginas nos permite una unificación de criterios en el diseño.

  - Ya que es una aplicación de empleo, creemos que era importante mostrar todos las ofertas de trabajo disponibles en la página principal, sin hacer diferencias entre agencias. No obstante, al final de la página principal podemos acceder a las a las agencias y ver los empleos disponibles de cada una.

  - Cuando hacemos click en el botón de 'Ver ofertas', o la flecha hacia abajo en el hero de cada empleo, nos hace un scroll de forma automática hasta la parte inferior de la página, donde podemos ver todas las ofertas disponibles o los detalles de la oferta seleccionada.

  - Al hacer click en el botón de 'Aplicar', en el listado de ofertas, nos lleva hasta la página del detalles de la oferta.

  - En la página de detalles de la oferta se muestra un scroll de forma automática hasta la parte inferior de la página, donde podemos ver todos los detalles de la oferta seleccionada.

  - Si vamos a la sección de 'Nuestras Agencias', podemos ver todas las agencias disponibles en la aplicación en un scroll horizontal infinito automático.

  - Cuando hacemos click en una agencia, nos lleva a la página de la misma donde podemos ver los empleos disponibles de dicha agencia.

  - Al igual que en el listado general de las ofertas, podemos hacer click en el botón de aplicar para ver los detalles de la oferta seleccionada.

  - Una vez en la página de detalles de la oferta, podemos hacer click en el botón de '¡Aplica!' para ver el formulario de aplicación. Rellenamos el formulario con los datos requeridos y nos lleva a la página de confirmación de la aplicación.

  - Por otro lado, cuando intentamos ir a una ruta que no existe, nos lleva a la página de error 404 customizada.

  - Por último, cabe destacar que toda la aplicación está preparada para ser adaptada a diferentes tamaños de pantalla, ya sea en dispositivos móviles o de escritorio haciendo que el diseño sea responsive.
