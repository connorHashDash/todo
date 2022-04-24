import {elementFactory} from './ElementMaker.js'

let topBar = document.getElementById('topnav')

let tabMaker = (tabName) => {
  let container = elementFactory('div', {
    className: 'tabdiv',
  })

  container.addEventListener('click', () => {
    
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
}


let plusSign = (() => {

  let plusSymHolder = elementFactory('div', {
    id: 'plusDiv',
  })

  let plusSymbol = elementFactory('p', { 
    id: 'plusSign',
    innerHTML: '&#43;',
  })
  
  plusSymHolder.appendChild(plusSymbol)
  return {plusSymHolder}
})()

let populateTopBar = () => {
  topBar.appendChild(plusSign.plusSymHolder)
} 


export {populateTopBar}
export {tabMaker}
