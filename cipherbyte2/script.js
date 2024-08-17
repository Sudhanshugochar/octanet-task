document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTodo();
    });
  
    function addTodo() {
      const todoText = todoInput.value.trim();
      if (todoText === '') return;
  
      const li = document.createElement('li');
      li.textContent = todoText;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'delete-btn';
      deleteBtn.addEventListener('click', () => li.remove());
  
      li.addEventListener('click', () => li.classList.toggle('complete'));
      li.appendChild(deleteBtn);
  
      todoList.appendChild(li);
      todoInput.value = '';
    }
  });
  