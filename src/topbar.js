import {elementFactory} from './ElementMaker.js'

let topBar = document.getElementById('topnav')

console.log(topBar)

let tabMaker = (tabName) => {
  let container = elementFactory('div', {
    className: 'tabdiv',
  })

  let name = elementFactory('p', {
    className: 'tabName',
    innerHTML: `${tabName}`
  })

  let deleteButton = elementFactory('div', {
    className: `killTab`,
    innerHTML: `&#10799`
  })

  container.appendChild(name)
  container.appendChild(deleteButton)
  topBar.appendChild(container)
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
