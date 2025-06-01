<h1 align="center">📝 Lista de Tareas Simple</h1>

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-COMPLETADO-brightgreen">
  <img src="https://img.shields.io/badge/STACK-MERN-blue">
  <img src="https://img.shields.io/badge/LICENSE-MIT-yellow">
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/placeholder/demo-app.gif" alt="Demo de la aplicación de tareas" width="600">
</p>

## 📋 Índice

* [Descripción del proyecto](#descripción-del-proyecto)
* [Estado del proyecto](#estado-del-proyecto)
* [Características y demostración](#características-y-demostración)
* [Acceso al proyecto](#acceso-al-proyecto)
* [Abre y ejecuta el proyecto](#abre-y-ejecuta-el-proyecto)
* [Tecnologías utilizadas](#tecnologías-utilizadas)
* [Despliegue en la nube](#despliegue-en-la-nube)
* [Personas desarrolladoras](#personas-desarrolladoras)
* [Licencia](#licencia)

## 📖 Descripción del proyecto

**Lista de Tareas Simple** es una aplicación web minimalista construida con el stack MERN (MongoDB, Express, React, Node.js) que permite gestionar tareas de manera eficiente y elegante. 

Este proyecto fue desarrollado como parte de la tarea práctica **"Tu App en la Nube: De local a global"**, con el objetivo de aprender el ciclo completo de desarrollo y despliegue de una aplicación web moderna.

La aplicación ofrece una interfaz intuitiva y responsive para crear, visualizar, completar y eliminar tareas, con un diseño moderno que incluye gradientes y animaciones suaves.

## 🚧 Estado del proyecto

<h4 align="center">
✅ Proyecto completado ✅
</h4>

El proyecto está **completamente funcional** tanto en entorno local como desplegado en la nube. Todas las funcionalidades principales han sido implementadas y probadas.

## ⚡ Características y demostración

### 🛠️ Funcionalidades del proyecto

- `✅ Crear tareas`: Agrega nuevas tareas con un título descriptivo
- `📋 Visualizar tareas`: Ve todas tus tareas organizadas cronológicamente
- `✔️ Marcar como completadas`: Cambia el estado de las tareas con un simple clic
- `🗑️ Eliminar tareas`: Borra tareas que ya no necesitas
- `📱 Diseño responsive`: Funciona perfectamente en móvil, tablet y desktop
- `🎨 Interfaz moderna`: Gradientes, animaciones y efectos hover
- `⚡ Tiempo real`: Cambios instantáneos sin recargar la página

### 🎥 Demo visual

La aplicación cuenta con:
- **Formulario intuitivo** en la parte superior para agregar tareas
- **Lista organizada** que muestra todas las tareas
- **Efectos visuales** como hover y animaciones suaves
- **Estado visual** diferenciado para tareas completadas
- **Feedback inmediato** para todas las acciones del usuario

## 📁 Acceso al proyecto

**Puedes acceder al código fuente del proyecto de las siguientes maneras:**

- 🌐 **Demo en vivo**: [https://tu-app-tareas.render.com](https://tu-app-tareas.render.com)
- 📂 **Repositorio GitHub**: [https://github.com/tu-usuario/simple-todo-app](https://github.com/tu-usuario/simple-todo-app)
- 📥 **Descargar ZIP**: Haz clic en "Code" → "Download ZIP" en GitHub

## 🛠️ Abre y ejecuta el proyecto

### 📋 Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v14 o superior) - [Descargar aquí](https://nodejs.org/)
- **MongoDB** (local o cuenta en MongoDB Atlas) - [Instrucciones aquí](https://www.mongodb.com/)  
- **Git** para clonar el repositorio - [Descargar aquí](https://git-scm.com/)

## 🗄️ Base de datos

### Estructura de la colección `tasks`

La aplicación utiliza **MongoDB** con una estructura de datos simple y eficiente:

```javascript
{
  _id: ObjectId("..."),           // ID único generado por MongoDB
  title: "Completar el proyecto", // Título de la tarea (String, requerido)
  completed: false,               // Estado de completado (Boolean, default: false)
  createdAt: "2024-01-15T10:30:00.000Z" // Fecha de creación (Date, automático)
}
```

### 🚀 Instalación paso a paso

1. **Clona el repositorio:**
```bash
git clone https://github.com/tu-usuario/simple-todo-app.git
cd simple-todo-app
```

2. **Instala todas las dependencias:**
```bash
npm run install-all
```

3. **Configura las variables de entorno:**

   **Backend** (`/backend/.env`):
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/simple-todo
   ```

   **Frontend** (`/frontend/.env`):
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. **Inicia MongoDB** (si usas instalación local):
```bash
# Linux/macOS
sudo service mongod start

# Windows (PowerShell como administrador)
net start MongoDB
```

5. **Ejecuta la aplicación:**
```bash
npm run dev
```

6. **¡Listo!** Abre tu navegador en:
   - 🎨 **Frontend**: http://localhost:3000
   - 🔧 **Backend API**: http://localhost:5000/api/tasks

### 🔧 Scripts disponibles

- `npm run dev` - Ejecuta frontend y backend simultáneamente
- `npm run dev:frontend` - Solo el frontend de React
- `npm run dev:backend` - Solo el backend de Node.js
- `npm run install-all` - Instala dependencias de todo el proyecto

## 💻 Tecnologías utilizadas

### Frontend
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) **React.js 18** - Biblioteca de JavaScript para interfaces de usuario
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) **CSS Puro** - Estilos modernos con gradientes y animaciones
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) **Fetch API** - Para comunicación con el backend

### Backend
- ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) **Node.js** - Entorno de ejecución de JavaScript
- ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) **Express.js** - Framework web minimalista
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) **MongoDB + Mongoose** - Base de datos NoSQL

### Herramientas de desarrollo
- ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) **NPM** - Gestión de paquetes
- **Nodemon** - Recarga automática del servidor
- **Concurrently** - Ejecutar múltiples procesos simultáneamente

## ☁️ Despliegue en la nube

Este proyecto utiliza servicios cloud gratuitos para el despliegue:

### 🌐 Servicios utilizados
- **Frontend**: Vercel - Alojamiento de la aplicación React
- **Backend**: Render - Servidor Node.js/Express con API REST  
- **Base de datos**: MongoDB Atlas - Base de datos en la nube

### 📤 Proceso de despliegue
El despliegue se realizó conectando el repositorio de GitHub con Render, configurando las variables de entorno en la nube y conectando con MongoDB Atlas. La aplicación se actualiza automáticamente con cada push al repositorio principal.

### 🔗 URLs de producción
- **App en vivo**: https://tu-app-tareas.render.com
- **API Backend**: https://tu-api-tareas.render.com/api/tasks

## 👩‍💻 Personas desarrolladoras

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/dlm1234">
        <img src="https://github.com/tu-usuario.png" width="115px;" alt="Tu foto"/>
        <br />
        <sub><b>Tu Nombre</b></sub>
      </a>
      <br />
      <span title="Desarrollador Full Stack">💻</span>
    </td>
  </tr>
</table>

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

```
MIT License - Copyright (c) 2024 Tu Nombre
```

---

<div align="center">
  <h3>🌟 ¡Gracias por visitar el proyecto! 🌟</h3>
  <p>Si te gustó, no olvides darle una ⭐ al repositorio</p>
</div>

---

> 💡 **Proyecto desarrollado como parte del curso "Tu App en la Nube: De local a global"**  
> 🎯 Objetivo cumplido: ✅ App funcionando en local ✅ Desplegada en la nube ✅ Documentada completamente
