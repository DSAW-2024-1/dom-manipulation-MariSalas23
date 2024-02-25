const taskContainer = document.getElementById('list-container');

// Creación de elementos de la lista
const addList = event => {
    event.preventDefault();
    const { value } = event.target.lists;
    if (!value) return;

    const task = document.createElement('div');
    task.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            task.classList.add('done');
        } else {
            task.classList.remove('done');
        }
    });

    const textSpan = document.createElement('span');
    textSpan.textContent = value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑️';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', () => {
        task.remove();
    });

    task.appendChild(checkbox);
    task.appendChild(textSpan);
    task.appendChild(deleteButton);

    taskContainer.appendChild(task);

    event.target.reset();
};

// Fecha actual
window.onload = function() {
    const dateElement = document.querySelector('p');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('es-ES');
    dateElement.textContent = formattedDate;
};

// Botón de eliminar todo
const deleteAllTasks = () => {
    console.log('Borrando todas las tareas');
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        task.remove();
    });
};