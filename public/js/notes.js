// notes.js - Gestión de notas con Firestore

// Elementos DOM para notas
const notesList = document.getElementById('notes-list');
const addNoteBtn = document.getElementById('add-note-btn');
const noteFormContainer = document.getElementById('note-form-container');
const noteForm = document.getElementById('note-form');
const noteIdInput = document.getElementById('note-id');
const noteTitleInput = document.getElementById('note-title');
const noteContentInput = document.getElementById('note-content');
const cancelBtn = document.getElementById('cancel-btn');

// Estado de edición
let isEditing = false;

// Cargar notas del usuario actual
function loadNotes() {
    if (!currentUser) return;
    
    // Mostrar mensaje de carga
    notesList.innerHTML = '<div class="notes-placeholder">Cargando notas...</div>';
    
    // Consultar Firestore
    db.collection('notes')
        .where('userId', '==', currentUser.uid)
        .orderBy('createdAt', 'desc')
        .get()
        .then(querySnapshot => {
            if (querySnapshot.empty) {
                notesList.innerHTML = '<div class="notes-placeholder">No hay notas que mostrar</div>';
                return;
            }
            
            // Limpiar lista de notas
            notesList.innerHTML = '';
            
            // Mostrar cada nota
            querySnapshot.forEach(doc => {
                const note = doc.data();
                const noteCard = createNoteCard(doc.id, note);
                notesList.appendChild(noteCard);
            });
        })
        .catch(error => {
            console.error('Error al cargar notas:', error);
            notesList.innerHTML = `<div class="notes-placeholder">Error al cargar notas: ${error.message}</div>`;
        });
}

// Crear elemento de tarjeta para cada nota
function createNoteCard(id, note) {
    const noteCard = document.createElement('div');
    noteCard.className = 'note-card';
    noteCard.innerHTML = `
        <h3 class="note-title">${escapeHtml(note.title)}</h3>
        <p class="note-content">${escapeHtml(note.content)}</p>
        <div class="note-actions">
            <button class="edit-btn">Editar</button>
            <button class="delete-btn">Eliminar</button>
        </div>
    `;
    
    // Botón de editar
    const editBtn = noteCard.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => {
        openEditForm(id, note);
    });
    
    // Botón de eliminar
    const deleteBtn = noteCard.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres eliminar esta nota?')) {
            deleteNote(id);
        }
    });
    
    return noteCard;
}

// Escapar HTML para prevenir XSS
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Abrir formulario en modo edición
function openEditForm(id, note) {
    isEditing = true;
    noteIdInput.value = id;
    noteTitleInput.value = note.title;
    noteContentInput.value = note.content;
    noteFormContainer.classList.remove('hidden');
}

// Abrir formulario en modo creación
addNoteBtn.addEventListener('click', () => {
    isEditing = false;
    noteForm.reset();
    noteIdInput.value = '';
    noteFormContainer.classList.remove('hidden');
});

// Cancelar edición/creación
cancelBtn.addEventListener('click', () => {
    noteFormContainer.classList.add('hidden');
    noteForm.reset();
});

// Guardar nota (crear o actualizar)
noteForm.addEventListener('submit', e => {
    e.preventDefault();
    
    if (!currentUser) {
        alert('Debes iniciar sesión para guardar notas');
        return;
    }
    
    const title = noteTitleInput.value.trim();
    const content = noteContentInput.value.trim();
    
    if (!title || !content) {
        alert('Por favor, completa todos los campos');
        return;
    }
    
    const noteData = {
        title,
        content,
        userId: currentUser.uid,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    if (isEditing) {
        // Actualizar nota existente
        const noteId = noteIdInput.value;
        db.collection('notes').doc(noteId).update(noteData)
            .then(() => {
                noteFormContainer.classList.add('hidden');
                noteForm.reset();
                loadNotes(); // Recargar notas
            })
            .catch(error => {
                console.error('Error al actualizar nota:', error);
                alert(`Error al actualizar nota: ${error.message}`);
            });
    } else {
        // Crear nueva nota
        noteData.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        
        db.collection('notes').add(noteData)
            .then(() => {
                noteFormContainer.classList.add('hidden');
                noteForm.reset();
                loadNotes(); // Recargar notas
            })
            .catch(error => {
                console.error('Error al crear nota:', error);
                alert(`Error al crear nota: ${error.message}`);
            });
    }
});

// Eliminar nota
function deleteNote(id) {
    db.collection('notes').doc(id).delete()
        .then(() => {
            loadNotes(); // Recargar notas
        })
        .catch(error => {
            console.error('Error al eliminar nota:', error);
            alert(`Error al eliminar nota: ${error.message}`);
        });
}
