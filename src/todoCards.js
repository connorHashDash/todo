import {elementFactory} from './ElementMaker.js'

let display = document.getElementById('display')

let toDoItem = (name, desc, dueDate) => {
  let toDoHolder = elementFactory('div', {
    className: 'toDoItem'
  })


  let nameDiv = elementFactory('div', {
    className: 'nameDiv'
  })

  let toDoName = elementFactory('p', {
    className: 'toDoName',
    innerHTML: name,
  })

  let descDiv= elementFactory('div', {
    className: 'descDiv'
  })

  let toDoDesc = elementFactory('p', {
    className: 'toDoDesc',
    innerHTML: desc,
  })

  let dueDateDiv = elementFactory('div', {
    className: 'dueDateDiv'
  })

  let toDoDueDate = elementFactory('p', {
    className: 'toDoDueDate',
    innerHTML: `Deadline: ${dueDate}`,
  })

  nameDiv.appendChild(toDoName)
  descDiv.appendChild(toDoDesc)
  dueDateDiv.appendChild(toDoDueDate)

  toDoHolder.appendChild(nameDiv)
  toDoHolder.appendChild(descDiv)
  toDoHolder.appendChild(dueDateDiv)

  display.appendChild(toDoHolder)
}

export {toDoItem}
