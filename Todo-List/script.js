// script.js
document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');

        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `<span>${taskText}</span>
                        <div class="task-actions">
                            <button class="edit">Edit</button>
                            <button class="update" style="display:none;">Update</button>
                            <button class="delete">Delete</button>
                        </div>`;

        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';

        // Add event listeners for Edit, Update, and Delete buttons
        const editButton = li.querySelector('.edit');
        const updateButton = li.querySelector('.update');
        const deleteButton = li.querySelector('.delete');

        editButton.addEventListener('click', () => {
            const taskSpan = li.querySelector('span');
            taskInput.value = taskSpan.textContent;
            editButton.style.display = 'none';
            updateButton.style.display = 'inline-block';
        });

        updateButton.addEventListener('click', () => {
            const taskSpan = li.querySelector('span');
            taskSpan.textContent = taskInput.value;
            updateButton.style.display = 'none';
            editButton.style.display = 'inline-block';
            taskInput.value = '';
        });

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }
}


