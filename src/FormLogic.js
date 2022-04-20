import {toDoItem} from './todoCards.js'
import {tabMaker} from './topbar.js'

let form = document.getElementById('form')
let log = console.log
let todos = []

let tabGet = (() => {
  let topBar = document.getElementById('topnav');
  let newTab = document.getElementById('plusDiv');
  
  return {topBar, newTab}
})()

console.log(tabGet.topBar.children.length)

let formGet = () => {
  let Name = document.getElementsByName('titleInput')[0].value
  let Desc = document.getElementsByName('desc')[0].value
  let dueDate = document.getElementsByName('dueDate')[0].value
  let button = document.getElementsByName('button')
  return {form, Name, Desc, dueDate, button}
}

let Logic = (() => {
  let i = 0
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    todos[i] = formGet()
    toDoItem(todos[i].Name, todos[i].Desc, todos[i].dueDate);
    form.reset()
  })

  let j = 0
  tabGet.newTab.addEventListener('click', () => {
    tabMaker(`Project${j}`)
    j++
    
  })
})()
