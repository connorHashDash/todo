import {elementFactory} from './ElementMaker.js'

let topBar = document.getElementById('topnav')

let tabMaker = (tabName, number) => {
  let container = elementFactory('div', {
    className: 'tabdiv',
  })

 let clicked = false;
  container.addEventListener('click', function() {
    if (clicked == false) {
      this.style.backgroundColor = '#7B7B7B'
      clicked = true;
      return
    }else if (clicked == true){
      this.style.backgroundColor = 'darkgrey'
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
