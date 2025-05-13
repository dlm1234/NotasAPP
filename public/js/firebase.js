// firebase.js - Configuración de Firebase

// Importamos Firebase desde CDN (esto ya estará incluido en el HTML)
// Este archivo maneja la conexión con Firebase

// Configuración de Firebase 
// Estos datos los obtendrás al crear tu proyecto en Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referencias a servicios de Firebase
const auth = firebase.auth();
const db = firebase.firestore();

// Exportamos los servicios para usarlos en otros archivos
