# REST Products Frontend

Este proyecto es el frontend para la gestión de productos, desarrollado con React y TypeScript. Está diseñado para interactuar con el backend correspondiente y proporcionar una interfaz de usuario intuitiva y eficiente.

## Características

- **Framework**: Construido con React y TypeScript.
- **Estilos**: Utiliza Tailwind CSS para estilos rápidos y responsivos.
- **Enrutamiento**: Implementado con React Router para una navegación fluida.
- **Consultas** : Utiliza loaders con useLoaderData y actions const useActionData , API DATA .
- **Validación de Formularios**: Validacion Simple por medio de FormData

## Requisitos Previos

- Node.js (versión 14 o superior)
- pnpm (gestor de paquetes)

## Instalación

1. **Clonar el repositorio**:

   ```js
   git clone https://github.com/brizusan/rest-products-frontend.git
   cd rest-products-frontend
   ```

2. **Instalar dependencias**:

   ```js
   pnpm install
   ```

3. **Configurar variables de entorno**:

   - Crea un archivo `.env` en la raíz del proyecto.
   - Agrega la URL del backend:

     ```
     VITE_API_URL=http://localhost:3000/api
     ```

     Asegúrate de que esta URL coincida con la dirección donde se está ejecutando tu backend.

## Uso

Para iniciar la aplicación en modo de desarrollo:

```js
pnpm dev
```

La aplicación estará disponible en `http://localhost:5173`.

## Despliegue

Para construir la aplicación para producción:

```js
pnpm build
```

Se encuentra desplegado en Vercel o Netlify.

## Estructura del Proyecto

- **src/**: Contiene el código fuente del proyecto.
  - **components/**: Componentes reutilizables de la aplicación.
  - **api/**: Contiene las consultas de manera centralizada
  - **views/**: Páginas principales de la aplicación.
  - **router/**: Sistema de Rutas con React Router Dom
  - **services/**: Módulos para interactuar con APIs externas.
  - **utils/**: Funciones y utilidades auxiliares.
  - **lib/**: Instancia de axios

