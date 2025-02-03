const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => editTask(listItem, taskText)); 

  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'Mark as Done';
  doneBtn.addEventListener('click', () => toggleDone(listItem)); 

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(listItem);  
  });

  listItem.appendChild(editBtn);
  listItem.appendChild(doneBtn);
  listItem.appendChild(deleteBtn);

  taskList.appendChild(listItem);

  taskInput.value = '';
}

function editTask(listItem, oldText) {
  const input = document.createElement('input');
  input.type = 'text';
  input.value = oldText;

  listItem.innerHTML = '';
  listItem.appendChild(input);

  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.addEventListener('click', () => {
    const newText = input.value.trim();
    if (newText !== '') {
      listItem.innerHTML = '';

      listItem.textContent = newText;

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => editTask(listItem, newText)); 

      const doneBtn = document.createElement('button');
      doneBtn.textContent = 'Mark as Done';
      doneBtn.addEventListener('click', () => toggleDone(listItem)); 

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        taskList.removeChild(listItem); 
      });

      listItem.appendChild(editBtn);
      listItem.appendChild(doneBtn);
      listItem.appendChild(deleteBtn);
    }
  });

  // Append the save button to the list item
  listItem.appendChild(saveBtn);
}

function toggleDone(listItem) {
  listItem.classList.toggle('completed'); // Toggle the 'completed' class for strikethrough effect
}
