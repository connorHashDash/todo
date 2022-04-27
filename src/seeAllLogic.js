import {populateSideBar} from './leftbar.js'
import {populateForm} from './leftbar.js'
import {elementFactory} from './ElementMaker.js'
import {tabArr} from './projectArray.js'
import {tabMaker} from './topbar.js'

let display = document.getElementById('display')

let clearDisplay = () => {
  display.innerHTML = ``;
}

let tabObj = (name, number) => {
  return {name, number}
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

let addProjButton = () => {
  let formContainer = elementFactory('div', {
    id: 'newProjForm',
    autocomplete: 'off',
  })
  
  let buttonContainer = elementFactory('div', {
    id: 'newProjButton',
    innerText: 'New Project'
  })

  let inputBox = elementFactory('input', {
    id: 'newProjInput',
    required: true,
    autocomplete: 'off',
  })

  buttonContainer.addEventListener('click', () => {
    let newProjVal = document.getElementById('newProjInput').value;
    if (!newProjVal == ''){
      tabMaker(newProjVal, Object.keys(tabArr).length)
      tabArr[Object.keys(tabArr).length] = []
      tabArr[Object.keys(tabArr).length - 1][0] = tabObj(newProjVal, Object.keys(tabArr).length - 1);
    }
  clearDisplay()
  for (let i = 0; i < Object.keys(tabArr).length; i++){
    display.appendChild(populateSeeAllDiv(tabArr[i][0].name, tabArr[i][0].position + 1).container)
    display.appendChild(formContainer)
  }
  })
  
  formContainer.appendChild(inputBox)
  formContainer.appendChild(buttonContainer)

  return {formContainer}
}

export {populateSeeAllDiv}
export {addProjButton}
export {clearDisplay}
