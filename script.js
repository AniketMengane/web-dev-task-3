document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const prioritySelect = document.getElementById('priority-select');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value, prioritySelect.value);
        taskInput.value = '';
    });

    function addTask(task, priority) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item', `priority-${priority}`);

        const taskText = document.createElement('span');
        taskText.textContent = task;
        taskItem.appendChild(taskText);

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });
        taskItem.appendChild(completeButton);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => {
            const newTask = prompt('Edit your task', taskText.textContent);
            if (newTask) {
                taskText.textContent = newTask;
            }
        });
        taskItem.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            taskItem.remove();
        });
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
    }
});
