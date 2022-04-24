// file is improperly named, it is the hub file for all the logic used in the app
import {toDoItem} from './todoCards.js'
import {tabMaker} from './topbar.js'
import {seeAllButton} from './seeAllLogic.js'
import {populateSeeAllDiv} from './seeAllLogic.js'
import {tabObj} from './tabLogic.js'
import {elementFactory} from './ElementMaker.js'

let form = document.getElementById('form')
let log = console.log
let todos = []

let tabGet = (() => {
  let topBar = document.getElementById('topnav');
  let newTab = document.getElementById('plusDiv');
  
  return {topBar, newTab}
})()


let formGet = () => {
  let Name = document.getElementsByName('titleInput')[0].value
  let Desc = document.getElementsByName('desc')[0].value
  let dueDate = document.getElementsByName('dueDate')[0].value
  let button = document.getElementsByName('button')
  return {form, Name, Desc, dueDate, button}
}

let tabArr = []
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
    tabArr[j] = tabObj(`Project${j}`, j)
    log(tabArr[j])
    j++
  })
})()


// The see all projects button underneath the form
let seeAll = document.getElementById('seeAllDiv')

let display = document.getElementById('display')
seeAll.addEventListener('click', () => {
  seeAllButton()
  for (let i = 0; i < tabArr.length; i++){
    display.appendChild(populateSeeAllDiv(tabArr[i].name, tabArr[i].position + 1).container)
  }
})
