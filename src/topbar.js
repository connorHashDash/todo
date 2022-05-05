import {elementFactory} from './ElementMaker.js'
import {tabArr} from './projectArray.js'
import {toDoItem} from './todoCards.js'
import {clearDisplay} from './seeAllLogic.js'

let topBar = document.getElementById('topnav')
let display = document.getElementById('display')

let currentProj = 0;

let projChanger = (input) => {
  currentProj = input
}

let removeActives = () => {
  let actives = document.getElementsByClassName('active')
  for (let j = 0; j < actives.length; j++){
    actives[j].classList.remove('active')
  }
}

let makeActive = (target) => {
  removeActives()
  let targetTab = document.getElementById(`${target}`)
  targetTab.className += ' active'
}


let printTodos = (number) => {
  for (let i = 1; i < Object.keys(tabArr[number]).length; ++i) {
    toDoItem(tabArr[number][i].Name, 
      tabArr[number][i].Desc, 
      tabArr[number][i].dueDate,
      tabArr[number][i].priority,
      tabArr[number][i].Number,
      tabArr[number][i].checked,
    )
  }
}

let tabMaker = (tabName, number) => {
  let container = elementFactory('div', {
    className: 'tabdiv',
    id: `${tabName}`,
  })
  

  container.addEventListener('click', function(e) {
    clearDisplay()
    removeActives()
    currentProj = number
    printTodos(number)
    this.className += ' active'
    display.style.flexDirection = 'row';
    return
  })
  
  

  let name = elementFactory('p', {
    className: 'tabName',
    innerHTML: `${tabName}`,
  })

  let deleteButtonHolder = elementFactory('div', {
    className: `killTabHolder`
  })

  deleteButtonHolder.addEventListener('click', function(e) {
    e.stopPropagation()
    this.parentElement.remove()
    let nextTab = document.getElementById('topnav').children
    if (!currentProj == number) {
      return
    } else if (nextTab.length == 0) {
      clearDisplay()
    } else {
      nextTab[0].click()
    }
  })

  let deleteButton = elementFactory('div', {
    className: `killTab`,
    innerHTML: `&#10799`,
  })

  container.appendChild(name)
  deleteButtonHolder.appendChild(deleteButton)
  container.appendChild(deleteButtonHolder)
  topBar.insertBefore(container, topBar.children[topBar.children.length - 1])
  return {tabName, number}
}




export {tabMaker}
export {removeActives}
export {currentProj}
export {makeActive}
export {projChanger}
export {printTodos}
