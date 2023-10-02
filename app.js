//Variables//
const bar = document.querySelector('#bars2');
const nav = document.querySelector('nav');
const buttons = document.getElementById('links');
const task = document.querySelector('.task')
const projectPreview = document.querySelector('main');
const addTaskBtn = document.querySelector('.button2');
const addBtn = document.querySelector('.add');

//Shows element after pressing add task//
const showElements = () => {

    const input = document.querySelector('.hidden-input');
    const button = document.querySelector('.buttons');
    const button2 = document.querySelector('.button2');
    const task2 = document.querySelector('.task');

    input.style.display = "flex";
    button.classList.add('show');
    button2.classList.add('button2');
    task2.style.display = "none";
}

const addTask = () => {

    const taskList = document.querySelector('.task-list');
    const inputValue = document.querySelector('.input').value;
    const cancelBtn = document.querySelector('.button3');
    const list = document.createElement('li');
    taskList.style.display = "block";
    list.innerHTML = inputValue;
    taskList.appendChild(list);
    inputValue.style.display = "none";
    cancelBtn.style.display = "none";


}

const addProject = () => {
    const input = document.createElement('input')
}

task.addEventListener('click', showElements);
addTaskBtn.addEventListener('click', addTask);

bar.addEventListener('click', (e) => {
    if (nav.style.display === "none") {
        nav.style.display = "block"
    } else {
        nav.style.display = "none";
    }
})