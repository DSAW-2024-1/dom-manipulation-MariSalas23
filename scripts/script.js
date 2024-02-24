const taskContainer = document.getElementById('list-container');

const addList = event => {
    event.preventDefault();
    const { value } = event.target.lists;
    if (!value) return;
    const task = document.createElement('div');
    task.classList.add('task');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    taskContainer.appendChild(task);
    event.target.reset();


    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✖️';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', () => {
        task.remove();
    });

    task.appendChild(deleteButton);
    taskContainer.appendChild(task);
    event.target.reset();
};


const changeTaskState = event => {
    const targetElement = event.target;
    if (!targetElement.classList.contains('deleteButton')) {
        const task = targetElement.closest('.task');
        if (task) {
            task.classList.toggle('done');
        }
    }
};

window.onload = function() {
    const dateElement = document.querySelector('p');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('es-ES');
    dateElement.textContent = formattedDate;
};

const deleteAllTasks = () => {
    console.log('Borrando todas las tareas');
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        task.remove();
    });
};