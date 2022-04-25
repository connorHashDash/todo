// file is improperly named, it is the hub file for all the logic used in the app
import {toDoItem} from './todoCards.js'
import {tabMaker} from './topbar.js'
import {populateSeeAllDiv} from './seeAllLogic.js'
import {tabObj} from './tabLogic.js'
import {elementFactory} from './ElementMaker.js'
import {addProjButton} from './seeAllLogic.js'

let form = document.getElementById('form')
let log = console.log

let tabGet = (() => {
  let topBar = document.getElementById('topnav');
  
  return {topBar}
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
    e.preventDefault();
    tabArr[0][i + 1] = formGet();
    toDoItem(tabArr[0][i + 1].Name, tabArr[0][i + 1].Desc, tabArr[0][i + 1].dueDate);
    form.reset();
  })

  let homeTab = (() => {
    tabArr[0] = []
    tabMaker(`Home`);
    tabArr[0][0] = tabObj(`Home`, 0);
  })()
})()

// The see all projects button underneath the form
let seeAll = document.getElementById('seeAllDiv')

let active = false;
import {clearDisplay} from './seeAllLogic.js'

let display = document.getElementById('display')
seeAll.addEventListener('click', () => {
  if (active == false){
    display.style.flexDirection = 'column';
    active = true;
    for (let i = 0; i < tabArr.length; i++){
      display.appendChild(populateSeeAllDiv(tabArr[i][0].name, tabArr[i][0].position + 1).container)
    }
    display.appendChild(addProjButton().container)
    return
  }else if (active == true){
    active = false;
    display.style.flexDirection = 'null'
    clearDisplay()
    return
  }
})

let todoPopulate = (position) => {
  for (let t = 0; t < tabArr[position].length; t++){
    toDoItem(tabArr[position][t + 1].name, tabArr[position][t + 1], tabArr[position][t + 1])
  }
}
