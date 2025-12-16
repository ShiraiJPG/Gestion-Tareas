# 📋 Sistema de Gestión de Tareas Académicas

Este proyecto es una aplicación web sencilla para la gestión de tareas académicas.  
Permite **crear, visualizar, editar y eliminar tareas**, aplicando un CRUD completo utilizando **HTML, CSS y JavaScript**, con persistencia de datos mediante **localStorage**.

El sistema está pensado para ayudar a estudiantes a organizar sus tareas por fecha, materia y prioridad.


## 🚀 Funcionalidades

- Registrar nuevas tareas académicas
- Persistencia de datos usando localStorage
- Diseño responsivo (adaptado a PC, tablet y móvil)


## 🛠️ Tecnologías Utilizadas

- HTML5  
- CSS
- JavaScript
- localStorage

No se utilizaron frameworks ni librerías externas.


## 📂 Estructura del Proyecto
/project
│── index.html
│── css/
│ └── styles.css
│── js/
│ └── app.js
│── README.md

## 🧠 Estructura del JSON de Tareas

Las tareas se almacenan internamente como un arreglo de objetos en formato JSON:

```json
{
  "id": 1720000000000,
  "fecha": "2025-12-20",
  "materia": "Matemática",
  "prioridad": "Alta",
  "titulo": "Examen final",
  "descripcion": "Estudiar todos los capítulos vistos en clase",
  "estado": "Pendiente"
}

https://github.com/ShiraiJPG/Gestion-Tareas.git
