import { tareas } from './utils.js';

const formulario = document.getElementById('formulario');
const lista = document.getElementById('lista');

function agregarTarea(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener el nombre de la tarea del campo de texto
    const nombreTarea = document.getElementById('nombreTarea').value;

    // Crear un nuevo objeto de tarea
    const nuevaTarea = {
        id: tareas.length + 1,
        nombre: nombreTarea,
        terminada: false
    };

    // Agregar la nueva tarea al arreglo de tareas
    tareas.push(nuevaTarea);

    // Limpiar el campo de texto
    document.getElementById('nombreTarea').value = '';

    // Mostrar la nueva tarea en la lista
    mostrarTareaEnLista(nuevaTarea);
   }
   function mostrarTareaEnLista(tarea) {
    // Crear un elemento de lista
    const nuevaTareaElemento = document.createElement('li');

    // Asignar el nombre de la tarea como texto del elemento
    nuevaTareaElemento.textContent = tarea.nombre;

    // Agregar una clase según el estado de la tarea
    if (tarea.terminada) {
        nuevaTareaElemento.classList.add('terminada');
    }

    // Agregar un controlador de eventos para cambiar el estado de la tarea al hacer clic
    nuevaTareaElemento.addEventListener('click', function() {
        tarea.terminada = !tarea.terminada; // Cambiar el estado de la tarea
        nuevaTareaElemento.classList.toggle('terminada'); // Alternar la clase 'terminada'
    });

    // Agregar el elemento de lista a la lista
    lista.appendChild(nuevaTareaElemento);
}

// Mostrar las tareas existentes al cargar la página
tareas.forEach(mostrarTareaEnLista);

// Agregar un controlador de eventos para el envío del formulario
formulario.addEventListener('submit', agregarTarea);