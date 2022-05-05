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
import {localStorageRead} from './projectArray.js'
import {localStorageCommit} from './projectArray.js'
import {displayProjectsList} from './seeAllLogic.js'

let form = document.getElementById('form')
let log = console.log

let tabGet = (() => {
  let topBar = document.getElementById('topnav');
  return {topBar}
})()

let tabObj = (name, number) => {
  return {name, number}
}
let i = 1

let formGet = () => {
  let Name = document.getElementsByName('titleInput')[0].value
  let Desc = document.getElementsByName('desc')[0].value
  let dueDate = document.getElementsByName('dueDate')[0].value
  let priority = 0
  let checked = false
  return {Name, Desc, dueDate, priority, Number, checked}
}

localStorageRead()

let Logic = (() => {
  let logo = document.getElementById('Logo')

  logo.addEventListener('click', () => {
    localStorage.clear()
  })

  let display = document.getElementById('display')

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let currentTodo = tabArr[currentProj].length
    tabArr[currentProj][currentTodo] = formGet();
    tabArr[currentProj][currentTodo].Number = currentTodo
    toDoItem(
      tabArr[currentProj][currentTodo].Name, 
      tabArr[currentProj][currentTodo].Desc, 
      tabArr[currentProj][currentTodo].dueDate,
      tabArr[currentProj][currentTodo].priority,
      tabArr[currentProj][currentTodo].Number,
      tabArr[currentProj][currentTodo].checked,)
    form.reset();
    localStorageCommit()
    log(tabArr)
  })

  let homeTab = (() => {
    if(localStorage.length == 0){
    tabArr[0] = []
    tabMaker(`Home`, 0);
    tabArr[0][0] = tabObj(`Home`, 0);
    let home = document.getElementById('Home')
    home.classList += ' active'
    } else {
      displayProjectsList()
    }
  })()

let seeAll = document.getElementById('seeAllDiv')

seeAll.addEventListener('click', () => {
  displayProjectsList()
  return
})
})()

// fix todo tab when clicking the ticked button
