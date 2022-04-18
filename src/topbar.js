import {elementFactory} from './ElementMaker.js'

let topBar = document.getElementById('topnav')

console.log(topBar)

let tabMaker = () => {
let container = elementFactory('div', {
  id: 'tabdiv',
  className: 'tab',
})
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
