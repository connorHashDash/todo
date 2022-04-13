const sidenav = document.getElementById('leftsidenav')
import Logo from './TodooeyLogo.png'

let sideBarForm = (() => {

  //Creating form elements
  const formDiv = document.createElement('div')
  const form = document.createElement('form')

  const titleDiv = document.createElement('div')
  const titleLabel = document.createElement('label')
  const title = document.createElement('input')

  const descDiv = document.createElement('div')
  const descLabel = document.createElement('label')
  const desc = document.createElement('textarea')

  const dueDateDiv = document.createElement('div')
  const dueDateLabel = document.createElement('label')
  const dueDate = document.createElement('input')

  const buttonDiv = document.createElement('div')
  const button = document.createElement('button')
  
  //form ID's
  formDiv.id = 'formDiv'
  form.id = 'form'
  
  titleDiv.className =`FormItem`
  titleDiv.id =`titleDiv`
  titleLabel.id = 'titleLabel'
  title.id = 'title'
  
  descDiv.className =`FormItem`
  descDiv.id = 'descDiv'
  descLabel.id = 'descLabel'
  desc.id = 'desc'

  dueDateDiv.className =`FormItem`
  dueDateDiv.id = `dueDateDiv`
  dueDateLabel.id = 'dueDateLabel'
  dueDate.id = 'dueDate'

  buttonDiv.className = `FormItem`
  buttonDiv.id = `buttonDiv`
  button.id = 'button'

  titleLabel.innerHTML = `Todo Name`
  descLabel.innerHTML = `Description`
  dueDateLabel.innerHTML = `Due Date`
  button.innerHTML = `Add`

  // making dom tree of form
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
  
  return {formDiv}
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

function populateSideBar() {
  sidenav.appendChild(sideBarIcon.iconDiv)
  sidenav.appendChild(sideBarForm.formDiv)
}


export {populateSideBar}
