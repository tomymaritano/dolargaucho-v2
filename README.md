
# Descripción del Proyecto

Este proyecto es una aplicación web que muestra las cotizaciones del dólar en Argentina. Utiliza una API para obtener la información de las cotizaciones, que incluye el valor de compra y venta, y la presenta en una interfaz moderna y amigable para el usuario. La aplicación está desarrollada con tecnologías modernas como React y Tailwind CSS, y utiliza un servidor proxy para resolver problemas de CORS al consumir la API.

## Tecnologías Utilizadas

- **React**: Para la creación de la interfaz de usuario.
- **Tailwind CSS**: Para los estilos y mejorar la experiencia visual de la aplicación.
- **Express (Node.js)**: Servidor proxy utilizado para solucionar problemas de CORS.
- **React Icons**: Para agregar iconos y mejorar la presentación visual.

## Comandos para Levantar el Proyecto

### Instalar Dependencias

```bash
npm install
```

### Levantar el Servidor Proxy

Antes de levantar la aplicación, debes iniciar el servidor proxy para resolver los problemas de CORS.

Si ya tienes creado el archivo `proxyServer.mjs`, ejecuta el siguiente comando para iniciar el servidor proxy:

```bash
node proxyServer.mjs
```

El servidor se ejecutará en `http://localhost:5001` por defecto.

### Levantar la Aplicación React

Una vez que el servidor proxy esté funcionando, levanta la aplicación React ejecutando:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Estructura del Proyecto

- **components/CotizacionGrid.tsx**: Componente principal que muestra la información de las cotizaciones en un formato de cuadrícula.
- **hooks/useFetchArgentina.ts**: Hook personalizado que realiza la solicitud a la API para obtener los datos de las cotizaciones.
- **proxyServer.mjs**: Servidor proxy que actúa como intermediario para las solicitudes a la API.

## Notas Adicionales

- **Servidor Proxy**: Es necesario levantar el servidor proxy local para evitar errores de CORS al consumir la API de cotizaciones.
- **Variables de Entorno**: Puedes configurar las variables de entorno (si es necesario) creando un archivo `.env` en la raíz del proyecto.

## Requerimientos

- **Node.js**: Versión 14 o superior.
- **Navegador Moderno**: Se recomienda usar Google Chrome, Firefox o cualquier navegador compatible con las últimas tecnologías web.

## Comandos Principales

- **Iniciar el Proyecto**:

    ```bash
    npm run dev
    ```

- **Iniciar el Servidor Proxy**:

    ```bash
    node proxyServer.mjs
    ```

- **Instalar Dependencias**:

    ```bash
    npm install
    ```

Este proyecto tiene como objetivo proporcionar una forma fácil y rápida de acceder a las cotizaciones del dólar en Argentina con una interfaz visualmente atractiva y moderna.

