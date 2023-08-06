const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox">
      <label>${taskText}</label>
      <button class="delete-button">Delete</button>
    `;
    taskList.appendChild(listItem);

    const deleteButton = listItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });

    const checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        listItem.style.textDecoration = 'line-through';
        listItem.style.backgroundColor = '#b7e1cd';
        playDingSound();
        setTimeout(() => {
          taskList.appendChild(listItem);
          listItem.style.backgroundColor = '';
        }, 1000);
      } else {
        listItem.style.textDecoration = '';
      }
    });

    taskInput.value = '';
  }
}

function playDingSound() {
  const audio = new Audio('ding.mp3'); 
  audio.play();
}
