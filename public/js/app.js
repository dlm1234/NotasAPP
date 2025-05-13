// app.js - Archivo principal de la aplicación

// Comprobar si la aplicación está online
window.addEventListener('load', () => {
    if (navigator.onLine) {
        console.log('Aplicación en línea - Conectando a Firebase');
    } else {
        console.log('Aplicación fuera de línea - Usando almacenamiento local');
        alert('No hay conexión a Internet. Algunas funciones pueden no estar disponibles.');
        // Aquí podrías implementar un fallback local con localStorage
    }
});

// Escuchar cambios en la conexión
window.addEventListener('online', () => {
    console.log('La aplicación está ahora en línea');
    // Sincronizar datos si es necesario
});

window.addEventListener('offline', () => {
    console.log('La aplicación está ahora fuera de línea');
    alert('Se ha perdido la conexión a Internet. Algunas funciones pueden no estar disponibles.');
});

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    console.log('NotasApp inicializada');
    // La inicialización específica ya se maneja en auth.js y notes.js
});
