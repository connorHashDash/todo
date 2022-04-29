// File is improperly named, it is the hub file for all the logic used in the app
import {currentProj} from './topbar.js'
import {toDoItem} from './todoCards.js'
import {tabMaker} from './topbar.js'
import {removeActives} from './topbar.js'
import {populateSeeAllDiv} from './seeAllLogic.js'
import {elementFactory} from './ElementMaker.js'
import {addProjButton} from './seeAllLogic.js'
import {seeAllButton} from './ProjLogic.js'
import {tabArr} from './projectArray.js'
import {clearDisplay} from './seeAllLogic.js'
import {findProjects} from './projectArray.js'

let form = document.getElementById('form')
let log = console.log


let tabGet = (() => {
  let topBar = document.getElementById('topnav');
 
  return {topBar}
})()

let tabObj = (name, number) => {
  return {name, number}
}

let formGet = () => {
  let Name = document.getElementsByName('titleInput')[0].value
  let Desc = document.getElementsByName('desc')[0].value
  let dueDate = document.getElementsByName('dueDate')[0].value
  return {Name, Desc, dueDate}
}

let Logic = (() => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let currentTodo = tabArr[currentProj].length
    tabArr[currentProj][currentTodo] = formGet();
    toDoItem(
      tabArr[currentProj][currentTodo].Name, 
      tabArr[currentProj][currentTodo].Desc, 
      tabArr[currentProj][currentTodo].dueDate);
    form.reset();
  })

  let homeTab = (() => {
    tabArr[0] = []
    tabMaker(`Home`, 0);
    tabArr[0][0] = tabObj(`Home`, 0);
  })()
})()

// The see all projects button underneath the form
let seeAll = document.getElementById('seeAllDiv')

let display = document.getElementById('display')
seeAll.addEventListener('click', () => {
  display.style.flexDirection = 'column';
  removeActives()
  clearDisplay()
  for (let i = 0; i < Object.keys(tabArr).length; i++){
    display.appendChild(populateSeeAllDiv(tabArr[i][0].name, i).container)
  }
  display.appendChild(addProjButton().formContainer)
  
  
  return
})

let todoPopulate = (position) => {
  for (let t = 0; t < tabArr[position].length; t++){
    toDoItem(tabArr[position][t + 1].name, tabArr[position][t + 1], tabArr[position][t + 1])
  }
}
log(findProjects())
