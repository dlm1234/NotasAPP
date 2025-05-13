// auth.js - Manejo de autenticación con Firebase

// Elementos DOM para autenticación
const authSection = document.getElementById('auth-section');
const notesSection = document.getElementById('notes-section');
const authForm = document.getElementById('auth-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const logoutBtn = document.getElementById('logout-btn');
const userEmailSpan = document.getElementById('user-email');

// Estado de autenticación
let currentUser = null;

// Observador del estado de autenticación
auth.onAuthStateChanged(user => {
    if (user) {
        // Usuario autenticado
        currentUser = user;
        userEmailSpan.textContent = user.email;
        authSection.classList.add('hidden');
        notesSection.classList.remove('hidden');
        logoutBtn.classList.remove('hidden');
        
        // Cargar las notas del usuario
        loadNotes();
    } else {
        // Usuario no autenticado
        currentUser = null;
        userEmailSpan.textContent = 'No conectado';
        authSection.classList.remove('hidden');
        notesSection.classList.add('hidden');
        logoutBtn.classList.add('hidden');
        
        // Limpiar formularios
        authForm.reset();
    }
});

// Iniciar sesión
loginBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (!email || !password) {
        alert('Por favor, completa todos los campos');
        return;
    }
    
    // Iniciar sesión con Firebase
    auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
            console.error('Error al iniciar sesión:', error);
            alert(`Error al iniciar sesión: ${error.message}`);
        });
});

// Registrar nuevo usuario
signupBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (!email || !password) {
        alert('Por favor, completa todos los campos');
        return;
    }
    
    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }
    
    // Crear usuario con Firebase
    auth.createUserWithEmailAndPassword(email, password)
        .catch(error => {
            console.error('Error al registrar usuario:', error);
            alert(`Error al registrar: ${error.message}`);
        });
});

// Cerrar sesión
logoutBtn.addEventListener('click', () => {
    auth.signOut()
        .catch(error => {
            console.error('Error al cerrar sesión:', error);
            alert(`Error al cerrar sesión: ${error.message}`);
        });
});
