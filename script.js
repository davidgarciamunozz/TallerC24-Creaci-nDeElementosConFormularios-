import { tareas } from './utils.js';

const formulario = document.getElementById('formulario');
const lista = document.getElementById('lista');

function agregarTarea(event) {
    event.preventDefault(); 


    const nombreTarea = document.getElementById('nombreTarea').value;

    
    const nuevaTarea = {
        id: tareas.length + 1,
        nombre: nombreTarea,
        terminada: false
    };

    
    tareas.push(nuevaTarea);

    
    document.getElementById('nombreTarea').value = '';

    
    mostrarTareaEnLista(nuevaTarea);
   }
   function mostrarTareaEnLista(tarea) {
   
    const nuevaTareaElemento = document.createElement('li');

    
    nuevaTareaElemento.textContent = tarea.nombre;

    
    if (tarea.terminada) {
        nuevaTareaElemento.classList.add('terminada');
    }

    
    nuevaTareaElemento.addEventListener('click', function() {
        tarea.terminada = !tarea.terminada; 
        nuevaTareaElemento.classList.toggle('terminada');

    });

    
    lista.appendChild(nuevaTareaElemento);
}


tareas.forEach(mostrarTareaEnLista);


formulario.addEventListener('submit', agregarTarea);