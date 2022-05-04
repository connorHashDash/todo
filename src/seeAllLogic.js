import {populateSideBar} from './leftbar.js'
import {populateForm} from './leftbar.js'
import {elementFactory} from './ElementMaker.js'
import {tabArr} from './projectArray.js'
import {tabMaker} from './topbar.js'
import {findTodos} from './projectArray.js'
import {makeActive} from './topbar.js'
import {projChanger} from './topbar.js'
import {deleteProject} from './projectArray.js'
import {removeActives} from './topbar.js'

let display = document.getElementById('display')

let clearDisplay = () => {
  display.innerHTML = ``;
}

let tabObj = (name, number) => {
  return {name, number}
}

let displayProjectsList = () => {
  display.style.flexDirection = 'column';
  removeActives()
  clearDisplay()
  for (let i = 0; i < Object.keys(tabArr).length; i++){
    display.appendChild(populateSeeAllDiv(tabArr[i][0].name, i).container)
  }
  display.appendChild(addProjButton().formContainer)
}

let populateSeeAllDiv = (title, number) => {
  let container = elementFactory('div', {
    className: 'projectDiv',
  })
  let projTitle = elementFactory('p', {
    className: 'projectName',
    innerHTML: title,
  })
  let rightSideDiv = elementFactory('div', {
    className: 'rightSideDiv',
  })

  let deleteDiv = elementFactory('div', {
    className: 'trashDiv'
  })
  let deleteIcon = elementFactory('i', {
    className: 'fa fa-trash menuTrash',
  })
  
  let open = elementFactory('div', {
    className: 'openButton',
  })

  let openText = elementFactory('p', {
    className: 'buttonText',
    innerHTML: 'Open Project'
  })

  deleteIcon.addEventListener('click', function() {
    deleteProject(number)
    display.innerHTML = ''
    displayProjectsList()
  })

  // creates the tab from the project menu, if the tab doesn't already exist
  open.addEventListener('click', () => {
    let exists = document.getElementById(`${title}`);
    projChanger(number)
    
    if (exists == null) {
      tabMaker(title, number)
      makeActive(title)
      clearDisplay()
      findTodos(number)
      display.style.flexDirection = 'row';
    } else {
      clearDisplay();
      findTodos(number);
      makeActive(title);
      display.style.flexDirection = 'row';
    }
  })
  
  
  open.appendChild(openText)
  container.appendChild(projTitle)
  rightSideDiv.appendChild(open)

  deleteDiv.appendChild(deleteIcon)
  rightSideDiv.appendChild(deleteDiv)
  container.appendChild(rightSideDiv)

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
export {displayProjectsList}
