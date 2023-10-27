//Variables//
const bar = document.querySelector('#bars2');
const nav = document.querySelector('nav');
const buttons = document.getElementById('links');
const task = document.querySelector('.task')
const projectPreview = document.querySelector('main');
const addTaskBtn = document.querySelector('.button2');
const addBtn = document.querySelector('.add');

class Todos{
 constructor(title, description, dueDate, priority){
 this.list = [];
 this.title = title;
 this.description = description;
 this.dueDate = dueDate;
 this.priority = priority;
 }

 getTitle(){
  return this.title;
 }

}