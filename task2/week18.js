const taskInput = document.getElementById('taskInput').value;
const buttonAddTask = document.querySelector('.button__add');
const buttonDelete = document.querySelector('.button__delete');
const listOfTasks = document.getElementById('listOfTasks');

let tasks = [];

buttonAddTask.addEventListener('click', (event) => {
	event.preventDefault();
	addTask(taskInput);
});

function addTask(item) {
	if (item !== '') {
		const task = {
			name: item,
			completed: false
		};
		tasks.push(task);
		addToLocalStorage(tasks);
		item = '';
	} 
}

function display(tasks) {
	listOfTasks.innerHTML = '';
	tasks.forEach(function(task){
		const checked = task.completed ? 'checked' : null;
		const li = document.createElement('li');

		li.setAttribute('class', 'task');
		if (task.completed === true) {
			li.classList.add('checked');
		}
		li.innerHTML = 
		`<input type="checkbox" class="checkbox" ${checked}>${task.name}<button class="delete-button">X</button>`;
		listOfTasks.append(li);
	});
}

// function to add todos to local storage
function addToLocalStorage(tasks) {
	// conver the array to string then store it.
	localStorage.setItem('tasks', JSON.stringify(tasks));
	// render them to screen
	display(tasks);
}

// function helps to get everything from local storage
function getFromLocalStorage() {
	const reference = localStorage.getItem('tasks');
	// if reference exists
	if (reference) {
	  // converts back to array and store it in todos array
	  tasks = JSON.parse(reference);
	  display(tasks);
	}
}
  // initially get everything from localStorage
getFromLocalStorage();



/*buttonAddTask.addEventListener('click', (event) => {
	event.preventDefault();
	
	tasks.push(taskInput.value);
	taskInput.value = '';
	localStorage.setItem('task', JSON.stringify(tasks));
	
	const task = localStorage.getItem('task');
	if (task === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(tasks);
	}

	displayTasks();
});*/


	/*const task = taskInput.value;
	tasks.forEach(task => {

	});*/