# NotasApp

Una aplicación web simple para gestionar notas personales. Permite crear, ver, editar y eliminar notas.

## Características

- Autenticación de usuarios (registro e inicio de sesión)
- Crear, leer, actualizar y eliminar notas
- Interfaz responsiva
- Funcionamiento en modo local y en la nube

## Tecnologías utilizadas

- **Frontend**: HTML, CSS y JavaScript vanilla
- **Backend y Base de datos**: Firebase (Authentication y Firestore)
- **Hosting**: Firebase Hosting

## Configuración y ejecución local

### Prerrequisitos

- Cuenta de Google (para acceder a Firebase)
- Node.js y npm instalados (para Firebase CLI)

### Pasos de configuración

1. **Clonar el repositorio**
   ```
   git clone https://github.com/tu-usuario/notasapp.git
   cd notasapp
   ```

2. **Crear un proyecto en Firebase**
   - Ve a [Firebase Console](https://console.firebase.google.com/)
   - Haz clic en "Añadir proyecto"
   - Sigue los pasos para crear el proyecto
   - En la configuración del proyecto, añade una aplicación web

3. **Configurar Firebase en la aplicación**
   - Abre el archivo `public/js/firebase.js`
   - Reemplaza el objeto `firebaseConfig` con la configuración de tu proyecto
   - Habilita la autenticación con correo electrónico y contraseña en Firebase Console
   - Crea una base de datos Firestore en Firebase Console (en modo de prueba)

4. **Instalar Firebase CLI** (para desarrollo local y despliegue)
   ```
   npm install -g firebase-tools
   ```

5. **Iniciar sesión en Firebase**
   ```
   firebase login
   ```

6. **Inicializar el proyecto de Firebase**
   ```
   firebase init
   ```
   - Selecciona Hosting y Firestore
   - Elige tu proyecto de Firebase
   - Establece "public" como directorio público
   - Configura como aplicación de una sola página: No

7. **Servir localmente**
   ```
   firebase serve
   ```
   - La aplicación estará disponible en `http://localhost:5000`

## Despliegue en la nube

1. **Verificar la configuración**
   - Asegúrate de que el archivo `firebase.json` esté correctamente configurado
   - Comprueba que los archivos estén en la carpeta "public"

2. **Desplegar a Firebase Hosting**
   ```
   firebase deploy
   ```

3. **Acceder a la aplicación**
   - La aplicación estará disponible en la URL proporcionada por Firebase Hosting (generalmente `https://tu-proyecto.web.app`)

## Reglas de seguridad de Firestore

Para proteger tus datos, configura las siguientes reglas en Firebase Console (Database > Rules):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /notes/{noteId} {
      allow read, update, delete: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }
  }
}
```

## Estructura del proyecto

```
notasapp/
├── public/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── app.js
│   │   ├── auth.js
│   │   ├── firebase.js
│   │   └── notes.js
│   └── assets/
│       └── icons/
├── firebase.json
└── README.md
```

## Uso de la aplicación

1. **Registro/Inicio de sesión**
   - Usa tu correo electrónico y contraseña para registrarte o iniciar sesión

2. **Gestión de notas**
   - Haz clic en "+ Nueva Nota" para crear una nota
   - Rellena el título y contenido, luego haz clic en "Guardar"
   - Para editar, haz clic en el botón "Editar" de una nota
   - Para eliminar, haz clic en el botón "Eliminar" de una nota

## Mejoras futuras

- Añadir modo fuera de línea con IndexedDB
- Implementar categorías para las notas
- Añadir búsqueda de notas
- Implementar funcionalidad para compartir notas
- Mejorar la UI/UX

## Licencia

MIT
