let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
let idEditando = null;

const form = document.getElementById("taskForm");
const contenedor = document.getElementById("tasksContainer");
const filtro = document.getElementById("filtroPrioridad");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const tarea = {
        id: idEditando ? idEditando : Date.now(),
        fecha: document.getElementById("fecha").value,
        materia: document.getElementById("materia").value,
        prioridad: document.getElementById("prioridad").value,
        titulo: document.getElementById("titulo").value,
        descripcion: document.getElementById("descripcion").value,
        estado: "Pendiente"
    };

    if (idEditando) {
        tareas = tareas.map(t =>
            t.id === idEditando ? tarea : t
        );
        idEditando = null;
    } else {
        tareas.push(tarea);
    }

    localStorage.setItem("tareas", JSON.stringify(tareas));
    mostrarTareas();
    form.reset();
});

function mostrarTareas() {
    contenedor.innerHTML = "";

    let tareasFiltradas = tareas;

    if (filtro && filtro.value !== "Todas") {
        tareasFiltradas = tareas.filter(
            t => t.prioridad === filtro.value
        );
    }

    tareasFiltradas.forEach(t => {
        const div = document.createElement("div");
        div.className = "card " + t.prioridad.toLowerCase();

        div.innerHTML = `
            <h3>${t.titulo}</h3>
            <p><b>Materia:</b> ${t.materia}</p>
            <p><b>Fecha:</b> ${t.fecha}</p>
            <p><b>Prioridad:</b> ${t.prioridad}</p>
            <p><b>Estado:</b> ${t.estado}</p>

            <p id="desc-${t.id}">
                ${t.descripcion.substring(0, 60)}...
            </p>

            <button onclick="verMas(${t.id})">Ver más</button>
            <button onclick="cambiarEstado(${t.id})">Marcar como entregada</button>

            <br><br>

            <button onclick="editarTarea(${t.id})">Editar</button>
            <button onclick="eliminarTarea(${t.id})">Eliminar</button>
        `;

        contenedor.appendChild(div);
    });
}

if (filtro) {
    filtro.addEventListener("change", mostrarTareas);
}

function verMas(id) {
    const tarea = tareas.find(t => t.id === id);
    const desc = document.getElementById(`desc-${id}`);

    if (desc.innerText.includes("...")) {
        desc.innerText = tarea.descripcion;
    } else {
        desc.innerText = tarea.descripcion.substring(0, 60) + "...";
    }
}

function cambiarEstado(id) {
    tareas = tareas.map(t => {
        if (t.id === id) {
            t.estado = t.estado === "Pendiente" ? "Entregada" : "Pendiente";
        }
        return t;
    });

    localStorage.setItem("tareas", JSON.stringify(tareas));
    mostrarTareas();
}

function editarTarea(id) {
    const tarea = tareas.find(t => t.id === id);

    document.getElementById("fecha").value = tarea.fecha;
    document.getElementById("materia").value = tarea.materia;
    document.getElementById("prioridad").value = tarea.prioridad;
    document.getElementById("titulo").value = tarea.titulo;
    document.getElementById("descripcion").value = tarea.descripcion;

    idEditando = id;
}

function eliminarTarea(id) {
    if (!confirm("¿Seguro que quieres eliminar esta tarea?")) return;

    tareas = tareas.filter(t => t.id !== id);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    mostrarTareas();
}

mostrarTareas();
