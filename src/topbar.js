import {elementFactory} from './ElementMaker.js'
import {tabArr} from './projectArray.js'
import {toDoItem} from './todoCards.js'
import {clearDisplay} from './seeAllLogic.js'

let topBar = document.getElementById('topnav')

let projNumber = 1

let tabMaker = (tabName, number) => {
  let container = elementFactory('div', {
    className: 'tabdiv',
  })
  

 let clicked = false;
  container.addEventListener('click', function() {
    if (clicked == false) {
      clearDisplay()
      this.style.backgroundColor = '#7B7B7B';
      console.log(number)
      for (let i = 1; i < Object.keys(tabArr[0]).length; i++) {
        toDoItem(tabArr[number][i].name, tabArr[number][i].desc, tabArr[number][i].dueDate)
      }
      clicked = true;
      return
    }else if (clicked == true){
      this.style.backgroundColor = 'darkgrey';
      clicked = false;
    }
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
