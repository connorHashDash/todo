import {elementFactory} from './ElementMaker.js'
import {tabArr} from './projectArray.js'
import {toDoItem} from './todoCards.js'
import {clearDisplay} from './seeAllLogic.js'

let topBar = document.getElementById('topnav')
let currentProj = 0;

let removeActives = () => {
  let actives = document.getElementsByClassName('active')
  for (let j = 0; j < actives.length; j++){
    actives[j].classList.remove('active')
  }
}

let printTodos = () => {
  for (let i = 1; i < Object.keys(tabArr[currentProj]).length; ++i) {
    console.log('this is i: ' + i)
    console.log('targer is: ' + Object.keys(tabArr[currentProj].length))
    toDoItem(tabArr[currentProj][i].Name, 
      tabArr[currentProj][i].Desc, 
      tabArr[currentProj][i].dueDate)
  }
}

let tabMaker = (tabName, number) => {
  let container = elementFactory('div', {
    className: 'tabdiv',
  })
  

  container.addEventListener('click', function() {
    clearDisplay()
    currentProj = number
    console.log(number)
    removeActives()
    printTodos()
    this.className += ' active'
    console.log(tabArr)
    return
  })

  let name = elementFactory('p', {
    className: 'tabName',
    innerHTML: `${tabName}`,
  })

  let deleteButtonHolder = elementFactory('div', {
    className: `killTabHolder`
  })

  deleteButtonHolder.addEventListener('click', function() {
    this.parentElement.remove()
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
