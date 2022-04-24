import {populateSideBar} from './leftbar.js'
import {populateForm} from './leftbar.js'
import {elementFactory} from './ElementMaker.js'

let display = document.getElementById('display')

let active = false

let clearDisplay = () => {
  display.innerHTML = ``
}

let populateSeeAllDiv = (title, number) => {
  let container = elementFactory('div', {
    className: 'projectDiv',
  })
  let projTitle = elementFactory('p', {
    className: 'projectName',
    innerHTML: title,
  })
  
  let open = elementFactory('div', {
    className: 'openButton',
  })

  let openText = elementFactory('p', {
    className: 'buttonText',
    innerHTML: 'Open Project'
  })
    
  container.appendChild(projTitle)
  container.appendChild(open)
  open.appendChild(openText)

  return {container}
}

let seeAllButton = () => {
  if (active == false){
    clearDisplay()
    console.log(active)
    active = true;
    return
  }else if (active == true){
    console.log(active)
    active = false;
    return
  }
  
}


export {seeAllButton}
export {populateSeeAllDiv}
