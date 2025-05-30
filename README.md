# Lista de Tareas Compartida

Una aplicación web sencilla pero completa para gestionar tareas, construida con el stack MERN (MongoDB, Express, React, Node.js). Este proyecto forma parte de la tarea práctica "Tu App en la Nube: De local a global".


## Características

- ✅ Crear, leer, actualizar y eliminar tareas
- ✅ Marcar tareas como completadas
- ✅ Interfaz de usuario intuitiva y responsive
- ✅ Backend API RESTful
- ✅ Base de datos MongoDB
- ✅ Fácil de desplegar tanto localmente como en la nube

## Tecnologías utilizadas

### Frontend
- React.js
- CSS puro (sin frameworks)
- Fetch API para llamadas HTTP

### Backend
- Node.js
- Express.js
- MongoDB con Mongoose
- Dotenv para variables de entorno
- CORS para comunicación segura entre dominios

## Estructura del proyecto

```
task-list-app/
├── backend/              # Servidor Node.js y API
│   ├── config/           # Configuración de conexión a la base de datos
│   ├── models/           # Definición de modelos de datos
│   ├── routes/           # Rutas de la API
│   ├── .env              # Variables de entorno (no incluido en el repositorio)
│   ├── package.json      # Dependencias del backend
│   └── server.js         # Punto de entrada del servidor
├── frontend/             # Aplicación React
│   ├── public/           # Archivos estáticos
│   ├── src/              # Código fuente React
│   │   ├── components/   # Componentes de la interfaz
│   │   ├── App.js        # Componente principal
│   │   ├── api.js        # Funciones para comunicación con la API
│   │   └── ...           # Otros archivos
│   ├── .env              # Variables de entorno para el frontend
│   └── package.json      # Dependencias del frontend
├── package.json          # Scripts para ejecutar el proyecto completo
└── README.md             # Este archivo
```

## Instalación y ejecución local

### Requisitos previos
- Node.js (v14 o superior)
- MongoDB instalado localmente o cuenta en MongoDB Atlas
- Git

### Pasos para ejecutar localmente

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/task-list-app.git
cd task-list-app
```

2. Instalar dependencias de todos los componentes:
```bash
npm run install-all
```

3. Configurar variables de entorno:
   - En la carpeta `/backend`, crea un archivo `.env` con el siguiente contenido:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/task-list
   ```
   
   - En la carpeta `/frontend`, crea un archivo `.env` con:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Iniciar MongoDB (si estás usando una instalación local):
```bash
# En Linux/macOS
sudo service mongod start
# o
sudo systemctl start mongod

# En Windows (desde PowerShell con privilegios de administrador)
net start MongoDB
```

5. Iniciar la aplicación en modo desarrollo:
```bash
# Para iniciar backend y frontend simultáneamente
npm run dev

# O si prefieres iniciarlos por separado:
# Terminal 1: Backend
npm run dev:backend

# Terminal 2: Frontend
npm run dev:frontend
```

La aplicación estará disponible en:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api/tasks

## Despliegue en la nube

La aplicación está diseñada para ser fácilmente desplegable en servicios como:

- **Render**: Una plataforma gratuita y fácil para desplegar aplicaciones web
- **Railway**: Una plataforma todo-en-uno para desplegar aplicaciones full-stack
- **MongoDB Atlas**: Servicio de base de datos MongoDB en la nube (tiene capa gratuita)

Para instrucciones detalladas sobre cómo desplegar la aplicación en cada una de estas plataformas, consulta el documento [DEPLOYMENT.md](DEPLOYMENT.md) incluido en este repositorio.

## Servicios cloud utilizados

Este proyecto utiliza los siguientes servicios en la nube:

- **Frontend**: [Render](https://render.com) para alojar la aplicación React
- **Backend**: [Render](https://render.com) para alojar el servidor Node.js/Express
- **Base de datos**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para la base de datos en la nube

## Uso de la aplicación

1. **Ver tareas**: La página principal muestra todas las tareas disponibles
2. **Crear tarea**: Completa el formulario en la parte superior y haz clic en "Agregar Tarea"
3. **Editar tarea**: Haz clic en el botón "Editar" en una tarea para modificar su título o descripción
4. **Completar tarea**: Marca la casilla de verificación para marcar una tarea como completada
5. **Eliminar tarea**: Haz clic en el botón "Eliminar" para eliminar una tarea

## ¿Qué sigue?

Algunas mejoras que podrían implementarse en el futuro:

- Sistema de autenticación de usuarios
- Categorías para las tareas
- Filtros y búsqueda
- Fechas límite para las tareas
- Notificaciones
- Temas visuales personalizables

## Licencia

[MIT License](LICENSE)

## Autor

Diego

---

Proyecto creado para la tarea práctica "Tu App en la Nube: De local a global".
