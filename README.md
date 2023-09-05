# MovieApp con React, Material UI, Node.js, Express, Sequelize y MariaDB

Repositorio de la aplicación MovieApp, un sistema de gestión de películas desarrollado con tecnologías modernas. La aplicación incluye un frontend construido con React y Material UI, y un backend API construido con Node.js, Express y Sequelize. Además, utiliza un contenedor Docker para la base de datos MariaDB.

## Estructura de archivos

El proyecto tiene la siguiente estructura de archivos:

- `/api/`: Contiene el código del backend Node.js y los archivos relacionados.
- `/api/env-example`: Ejemplo de archivo `.env` para configurar las variables de entorno del backend.
- `/api/config/config.js`: Archivo de configuración de la base de datos.- 
- `/api/seeders/`: Contiene los seeders de usuario y movies
- `/react-js/`: Contiene el código del frontend React.
- `/docker-compose.yml`: Archivo de Docker Compose para la configuración del contenedor MariaDB.

## Características

- ~~Búsqueda y visualización de películas.~~
- Enlista las peliculas de la base de datos.
- Agregar, modificar y eliminar peliculas de la base de datos.
- ~~Reseñas y calificaciones de usuarios.~~
- Autenticación de usuarios.
- Backend API construido con Node.js, Express y Sequelize.
- Base de datos MariaDB encapsulada en un contenedor Docker.

## Requisitos

Asegúrate de tener instalados los siguientes requisitos en tu sistema antes de comenzar:

- Node.js: [Descargar Node.js](https://nodejs.org/).
- npm (Administrador de paquetes de Node.js): Se instala automáticamente con Node.js.
- Docker: [Descargar Docker](https://www.docker.com/get-started).

## Configuración

### 1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tuusuario/movie-app.git
```
```bash
cd movie-app
```

### 2. Instalación de dependencias
Instala las dependencias del frontend
```bash
cd react-js
```
```bash
npm install
```

Regresa al directorio raíz del proyecto
```bash
cd ..
```

Instala las dependencias del backend
```bash
cd api
```
```bash
npm install
```

### 3. Configura la base de datos MariaDB en un contenedor Docker
Copia el archivo de ejemplo de variables de entorno para el backend:
```bash
cp api/env-example api/.env
```
Edita api/.env y configura las variables de entorno relacionadas con la base de datos MariaDB. Asegúrate de reemplazar tu contraseña con una contraseña segura.

## Uso

### 4. Inicializar la base de datos con Docker
Para ejecutar la base de datos MariaDB en un contenedor Docker, sigue estos pasos:
```bash
cd ..
```
Luego, inicia el contenedor Docker utilizando Docker Compose:
```bash
docker-compose up -d
```
Esto iniciará un contenedor MariaDB con la configuración especificada en el archivo docker-compose.yml. Asegúrate de que Docker esté instalado y en funcionamiento en tu sistema antes de ejecutar este comando.

### 5. Inicializar la base de datos con seeders
Una vez que el contenedor Docker MariaDB esté en funcionamiento, puedes inicializar la base de datos y poblarla con datos de ejemplo utilizando los seeders. Sigue estos pasos:
```bash
cd api
```

Ejecuta los comandos de sequelize-cli para crear la base de datos y ejecutar los seeders:
```bash
npx sequelize db:create
```
```bash
npx sequelize db:migrate
```
```bash
npx sequelize db:seed:all
```
# 6. Iniciar el servidor del backend
 
Inicia el servidor del backend:
``` bash
cd api
```
```bash
npm start
```
El servidor estará disponible en http://localhost:3001.