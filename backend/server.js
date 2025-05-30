const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/simple-todo')
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.log('❌ Error:', err));

// Rutas
app.use('/api/tasks', require('./routes/tasks'));

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});