//Variables//
const bar = document.querySelector('#bars2');
const nav = document.querySelector('nav');
const buttons = document.getElementById('links');
const task = document.querySelector('.task')
const projectPreview = document.querySelector('main');
const addTaskBtn = document.querySelector('.button2');
const addBtn = document.querySelector('.add');
const cancelBtn = document.querySelector('.button4');
const inputBox = document.querySelector('.input');
const add = document.querySelector('.add');

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

//Add ta
const addTask = () => {

    const taskList = document.querySelector('.task-list');
    const inputValue = document.querySelector('.input').value;
    const inputValue2 = document.querySelector('.input')
    const cancelBtn = document.querySelector('.button4');
    const list = document.createElement('li');
    taskList.style.display = "block";
    list.innerHTML = inputValue;
    taskList.appendChild(list);


}

const addProject = () => {
    const input2 = document.querySelector('.input2');
    const addBtn = document.querySelector('.addBtn');
    const cancelBtn = document.querySelector('.cancelBtn');
    const addProject = document.querySelector('.add');

    addProject.style.display = "none";
    input2.style.display = "block";
    cancelBtn.style.display = "block";
    addBtn.style.display = "block";
    
}

const cancel = () => {
 cancelBtn.style.display = "none";
 inputBox.style.display = "none"

}

task.addEventListener('click', showElements);
addTaskBtn.addEventListener('click', addTask);
cancelBtn.addEventListener('click', cancel);
add.addEventListener('click', addProject);

bar.addEventListener('click', (e) => {
    if (nav.style.display === "none") {
        nav.style.display = "block"
    } else {
        nav.style.display = "none";
    }
})