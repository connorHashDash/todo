const sidenav = document.getElementById('leftsidenav')
import Logo from './TodooeyLogo.png'
import {elementFactory} from './ElementMaker.js'

let seeAllProjects = () => {
  const seeAllDiv = elementFactory('div', {
    id: 'seeAllDiv',
    innerText: 'All Projects',
  })

  return seeAllDiv
}

let sideBarForm = (() => {

  //Creating form elements
  const formDiv = elementFactory('div', { 
    id: 'formDiv' 
  })
  const form = elementFactory('form', { 
    id: 'form', 
    autocomplete: 'off',
  })

  const titleDiv = elementFactory('div', {
    id: 'titleDiv',
    className: 'FormItem',
  })
  const titleLabel = elementFactory('label', {
    id: 'titleLabel',
    htmlFor: 'tileInput',
    innerText: 'Todo Name',
  })
  const title = elementFactory('input', {
    id: 'titleInput',
    name: 'titleInput',
    required: true,
  })

  const descDiv = elementFactory('div', {
    id: 'discDiv', 
    className: 'FormItem',
  })
  const descLabel = elementFactory('label', {
    id: 'descLabel',
    innerText: 'Description',
    htmlFor: 'desc',
  })
  const desc = elementFactory('textarea', {
    id: 'desc',
    name: 'desc',
  })

  const dueDateDiv = elementFactory('div', {
    id: 'dueDateDiv', className: 'FormItem'
  })
  const dueDateLabel = elementFactory('label', {
    id: 'dueDateLabel',
    htmlFor: 'dueDate',
    innerText: 'Due Date',
  })
  const dueDate = elementFactory('input', {
    type: 'date',
    id: 'dueDate',
    name: 'dueDate',
  })

  const buttonDiv = elementFactory('div', {
    id: 'buttonDiv',
    className: 'FormItem',
  })
  const button = elementFactory('button', {
    id: 'button',
    innerText: 'Add'
  })
  
  // making Dom tree of Form
  formDiv.appendChild(form)
  form.appendChild(titleDiv)
  titleDiv.appendChild(titleLabel)
  titleDiv.appendChild(title)
  form.appendChild(descDiv)
  descDiv.appendChild(descLabel)
  descDiv.appendChild(desc)
  form.appendChild(dueDateDiv)
  dueDateDiv.appendChild(dueDateLabel)
  dueDateDiv.appendChild(dueDate)
  form.appendChild(buttonDiv)
  buttonDiv.appendChild(button)
  
  return {formDiv, form}
})()

let sideBarIcon = (() => {
  let iconDiv = document.createElement('div')
  const todooeyLogo = new Image();

  todooeyLogo.src = Logo;
  todooeyLogo.id = 'Logo'

  iconDiv.id = 'iconDiv';

  iconDiv.appendChild(todooeyLogo)

  return {iconDiv}
})();

let loadedOnce = false;

function populateSideBar() {
  sidenav.appendChild(sideBarIcon.iconDiv)
  sidenav.appendChild(sideBarForm.formDiv)
  if (loadedOnce == false){
    sidenav.appendChild(seeAllProjects())
    loadedOnce = true
  }
}

function populateForm () {
  let target = document.getElementById('formDiv')
  target.appendChild(sideBarForm.form)
}


export {populateSideBar}
export {populateForm}
