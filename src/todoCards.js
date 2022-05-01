import {elementFactory} from './ElementMaker.js'

let display = document.getElementById('display')

// creates inbuilt tabs of each todo item
let todoTabs = () => {
  let tabHolder = elementFactory('div', {
    className: 'todoTabs',
  })

  let descTab = elementFactory('div', {
    className: 'descTab'
  })

  let descTabText = elementFactory('p', {
    className: 'descTabText',
    innerHTML: 'Desc'
  })

  let dueDateTab = elementFactory('div', {
    className: 'dueDateTab',
  })

  let dueDateText = elementFactory('p', {
    className: 'dueDateText',
    innerHTML: 'Due Date',
  })

  let priorityTab = elementFactory('div', {
    className: 'priorityTab'
  })

  let priorityText = elementFactory('p', {
    className: 'priorityText',
    innerHTML: 'Priority',
  })

  //appending todo list tabs to holder
  tabHolder.appendChild(descTab)
  tabHolder.appendChild(dueDateTab)
  tabHolder.appendChild(priorityTab)
  
  //appending text to the tabs
  descTab.appendChild(descTabText)
  dueDateTab.appendChild(dueDateText)
  priorityTab.appendChild(priorityText)

  //Need to return tabs  to add event listeners
  return {tabHolder, descTab, dueDateTab, priorityTab} 
}

//Create the page when description tab is clicked
let descPage = (desc, dueDate) => {
  let descDiv= elementFactory('div', {
    className: 'descDiv'
  })

  let toDoDesc = elementFactory('p', {
    className: 'toDoDesc',
    innerHTML: desc,
  })

  
  descDiv.appendChild(toDoDesc)

  return {descDiv}
}

let dueDatePage = (dueDate) => {
  if (dueDate == '') {
    dueDate = 'none'
  }

  let deadline = 'Deadline: '
  let dueDateDiv = elementFactory('div', {
    className: 'dueDateDiv',
  })

  let toDoDueDate = elementFactory('p', {
    className: 'toDoDueDate',
    innerHTML: `${deadline} ${dueDate}`,
  })

  dueDateDiv.appendChild(toDoDueDate)
  
  return {dueDateDiv}
}

// creates the priority tab, with three "bubbles" which allow you to select the priority.
let priorityPage = () => {
  let holderDiv = elementFactory('div', {
    className: 'priorityDiv',
  })

  let labelDiv = elementFactory('div', {
    className: 'labelDiv',
  })

  let priorityLabel = elementFactory('p', {
    className: 'priorityLabel',
    innerHTML: 'Priority: ',
  })

  let bubbleHolder = elementFactory('div', {
    className: 'bubbleHolder',
  })

  let bubble1 = elementFactory('div', {
    className: 'green',
  })

  let bubble2 = elementFactory('div', {
    className: 'orange',
  })

  let bubble3 = elementFactory('div', {
    className: 'red',
  })

  //append bubbles to parent node
  bubbleHolder.appendChild(bubble1)
  bubbleHolder.appendChild(bubble2)
  bubbleHolder.appendChild(bubble3)

  labelDiv.appendChild(priorityLabel)

  holderDiv.appendChild(labelDiv)
  holderDiv.appendChild(bubbleHolder)

  return {holderDiv}
}

//The function which creates the todo item and appends them to the document
let toDoItem = (name, desc, dueDate, priority) => {

  if (priority > 0) {
    return
  } else {
    priority = 0
  }

  let todoDiv = elementFactory('div', {
    className: 'toDoItem'
  })

  let nameDiv = elementFactory('div', {
    className: 'nameDiv'
  })

  let toDoName = elementFactory('p', {
    className: 'toDoName',
    innerHTML: name,
  })
  
  let tickBox = elementFactory('div', {
    className: 'tickBox',
  })

  let buttonDiv = elementFactory('div', {
    className: 'buttons',
  })

  let todoDisplay = elementFactory('div', {
    className: 'todoDisplay'
  })

  let tabs = todoTabs()

  let infoDiv = elementFactory('div', {
    id: 'infoDiv'
  })

  let removeActives = (siblings) => {
    for (let i = 0; i < siblings.length ; i++){
      siblings[i].classList.remove('tabActive')
    }
  }
  let descDiv = descPage(desc)

  let dueDateDiv = dueDatePage(dueDate)


  tabs.descTab.addEventListener('click', function() {
    let siblings = this.parentElement.children
    removeActives(siblings)
    this.className += ' tabActive'
    infoDiv.innerHTML =''
    infoDiv.appendChild(descDiv.descDiv)
  })

  tabs.dueDateTab.addEventListener('click', function() {
    let siblings = this.parentElement.children
    removeActives(siblings)
    this.className += ' tabActive'
    infoDiv.innerHTML =''
    console.log(dueDateDiv.dueDateDiv)
    infoDiv.appendChild(dueDateDiv.dueDateDiv)
  })

  tabs.priorityTab.addEventListener('click', function() {
    let siblings = this.parentElement.children;
    removeActives(siblings);
    this.className += ' tabActive';
    infoDiv.innerHTML = '';
    infoDiv.appendChild(priorityPage().holderDiv)
  })

  tabs.descTab.className += ' tabActive'

  nameDiv.appendChild(toDoName)
  buttonDiv.appendChild(tickBox)
  nameDiv.appendChild(buttonDiv)
  todoDiv.appendChild(nameDiv)

  // adds tabs to todo card
  todoDiv.appendChild(tabs.tabHolder)
  
  // add description to todo card
  todoDiv.appendChild(infoDiv)
  infoDiv.appendChild(descDiv.descDiv)
  
  // puts tab into the display div 
  display.appendChild(todoDiv)
}

export {toDoItem}
