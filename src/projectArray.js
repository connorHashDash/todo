import {toDoItem} from './todoCards.js'
import {currentProj} from './topbar.js'

let display = document.getElementById('display')

let tabArr = []

let localStorageRead = () => {
  if (!localStorage.length == 0){
  let stringArray = localStorage.getItem('appMemory')
  tabArr = JSON.parse(stringArray)
  }
}

let localStorageCommit = () => {
  localStorage.setItem('appMemory', JSON.stringify(tabArr))
}

let findProjects = () => {
  let projects = []
  for (let i = 0; i < tabArr.length; i++) {
    projects[i] = tabArr[i][0]
  }
  return {projects}
}

let findTodos = (number) => {
  for (let i = 1; i < Object.keys(tabArr[number]).length; ++i) {
    toDoItem(tabArr[number][i].Name, 
      tabArr[number][i].Desc, 
      tabArr[number][i].dueDate,
      tabArr[number][i].priority,
      tabArr[number][i].Number,)
      
  }
}

let editArray = (Number, valToChange, newVal) => {
  for(let i = 1; i < tabArr[currentProj].length; i++) { 
    if (Number == tabArr[currentProj][i].Number){
      if (valToChange == 'priority'){
        tabArr[currentProj][i].priority = newVal
      } else if (valToChange == 'desc') {
        tabArr[currentProj][i].Desc = newVal
      } else if (valToChange == 'date') {
        tabArr[currentProj][i].dueDate = newVal
      } else if (valToChange == 'name') {
        tabArr[currentProj][i].Name = newVal
      }
    }
  }
  localStorageCommit()
}

let deleteProject = (number) => {
  tabArr.splice(number, 1)
  for (let k = number; k < tabArr.length; k++){
    tabArr[k][0].number--
  }
  localStorageCommit()
}

let deleteTodo = (number) => {
  tabArr[currentProj].splice(number, 1)
  for(let j = number; j < tabArr[currentProj].length; j++){
    tabArr[currentProj][j].Number--
  }
  localStorageCommit()
}

export {tabArr}
export {findProjects}
export {findTodos}
export {localStorageRead}
export {editArray}
export {localStorageCommit}
export {deleteTodo}
export {deleteProject}
