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

let localStorageCommit = () => {
  localStorage.setItem('appMemory', JSON.stringify(tabArr))
  log(localStorage.getItem('appMemory'))
  log(tabArr)
}


localStorageRead()


let Logic = (() => {
  let logo = document.getElementById('Logo')

  logo.addEventListener('click', () => {
    localStorage.clear()
    log(localStorage)
  })

  let display = document.getElementById('display')
  let displayProjectsList = () => {
  display.style.flexDirection = 'column';
  removeActives()
  clearDisplay()
  for (let i = 0; i < Object.keys(tabArr).length; i++){
    display.appendChild(populateSeeAllDiv(tabArr[i][0].name, i).container)
  }
  display.appendChild(addProjButton().formContainer)
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let currentTodo = tabArr[currentProj].length
    tabArr[currentProj][currentTodo] = formGet();
    toDoItem(
      tabArr[currentProj][currentTodo].Name, 
      tabArr[currentProj][currentTodo].Desc, 
      tabArr[currentProj][currentTodo].dueDate);
    form.reset();
    localStorageCommit()
  })

  let homeTab = (() => {
    if(localStorage.length == 0){
    tabArr[0] = []
    tabMaker(`Home`, 0);
    tabArr[0][0] = tabObj(`Home`, 0);
    } else {
      displayProjectsList()
      log('works')
    }
  })()

let seeAll = document.getElementById('seeAllDiv')

seeAll.addEventListener('click', () => {
  displayProjectsList()
  return
})
})()

// make todos work and look pretty
// make projects deletable
