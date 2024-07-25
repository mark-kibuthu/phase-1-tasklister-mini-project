
  // your code here//
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskDescription = document.getElementById('new-task-description').value;
    
    if (taskDescription.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = taskDescription;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
      });

      li.appendChild(deleteButton);
      taskList.appendChild(li);

      // Clear the input field
      form.reset();
    } else {
      alert('Please enter a task description');
    }
  });
});
