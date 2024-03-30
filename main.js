 // Get elements
 const taskForm = document.getElementById('taskForm');
 const taskInput = document.getElementById('taskInput');
 const taskList = document.getElementById('taskList');

 // Function to create a new task item
 function createTaskItem(taskText) {
   const li = document.createElement('li');
   const span = document.createElement('span');
   span.textContent = taskText;
   span.classList.add('task-text');
   li.appendChild(span);
   
   const deleteBtn = document.createElement('button');
   deleteBtn.textContent = 'Delete';
   deleteBtn.classList.add('delete-btn');
   deleteBtn.onclick = function() {
     li.remove();
   };
   li.appendChild(deleteBtn);
   
   return li;
 }

 // Event listener for adding new tasks
 taskForm.addEventListener('submit', function(event) {
   event.preventDefault();
   const taskText = taskInput.value.trim();
   if (taskText !== '') {
     const taskItem = createTaskItem(taskText);
     taskList.appendChild(taskItem);
     taskInput.value = ''; // Clear input field
   }
 });

 // Event listener for marking tasks as completed
 taskList.addEventListener('click', function(event) {
   if (event.target.tagName === 'SPAN') {
     const taskItem = event.target.parentElement;
     taskItem.classList.toggle('completed');
   }
 });