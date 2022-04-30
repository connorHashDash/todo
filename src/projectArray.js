import {toDoItem} from './todoCards.js'

let display = document.getElementById('display')

let tabArr = []

let localStorageRead = () => {
  if (!localStorage.length == 0){
  let stringArray = localStorage.getItem('appMemory')
  tabArr = JSON.parse(stringArray)
  }
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
      tabArr[number][i].dueDate)
  }
}

export {tabArr}
export {findProjects}
export {findTodos}
export {localStorageRead}
