import {elementFactory} from './ElementMaker.js'
import {tabArr} from './projectArray.js'
import {editArray} from './projectArray.js'
import {currentProj} from './topbar.js'

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

  //Appending todo list tabs to holder
  tabHolder.appendChild(descTab)
  tabHolder.appendChild(dueDateTab)
  tabHolder.appendChild(priorityTab)
  
  //Appending text to the tabs
  descTab.appendChild(descTabText)
  dueDateTab.appendChild(dueDateText)
  priorityTab.appendChild(priorityText)

  //Need to return tabs  to add event listeners
  return {tabHolder, descTab, dueDateTab, priorityTab} 
}

//Create the page when description tab is clicked
let descPage = (desc) => {
  let descDiv= elementFactory('div', {
    className: 'descDiv'
  })

  let toDoDesc = elementFactory('p', {
    className: 'toDoDesc',
    innerHTML: desc,
  })

  let penIcon = elementFactory('i', {
    className: 'fas fa-pen'
  })

  penIcon.addEventListener('click', () => {
    toDoDesc.contentEditable = true;
  })
  
  descDiv.appendChild(toDoDesc)
  toDoDesc.appendChild(penIcon)

  return {descDiv}
}

let dueDatePage = (dueDate) => {
  console.log(dueDate)
  console.log(tabArr)
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

  dueDateDiv.appendChild(toDoDueDate);
  
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

  let bubble3 = elementFactory('div', {
    className: 'red',
  })

  let bubble2 = elementFactory('div', {
    className: 'orange',
  })

  let bubble1 = elementFactory('div', {
    className: 'green',
  })

  //Append bubbles to parent node
  bubbleHolder.appendChild(bubble3);
  bubbleHolder.appendChild(bubble2);
  bubbleHolder.appendChild(bubble1);

  //Attach label to div
  labelDiv.appendChild(priorityLabel);

  holderDiv.appendChild(labelDiv)
  holderDiv.appendChild(bubbleHolder)

  return {holderDiv, bubble1, bubble2, bubble3}
}
//The function which creates the todo item and appends them to the document
let toDoItem = (name, desc, dueDate, priority, number) => {
  console.log('priority: ' + priority)

  
  console.log(number)
  
  let todoDiv = elementFactory('div', {
    className: 'toDoItem'
  })

  let nameDiv = elementFactory('div', {
    className: 'nameDiv'
  })

  if (priority == 0){
    nameDiv.style.backgroundColor = '#0082D5'
  } else if (priority == 1){
    nameDiv.style.backgroundColor = 'green'
  } else if (priority == 2) {
    nameDiv.style.backgroundColor = 'orange'
  } else if (priority == 3){
    nameDiv.style.backgroundColor = 'red'
  }

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
    className: 'infoDiv'
  })

  let removeActives = (siblings) => {
    for (let i = 0; i < siblings.length ; i++){
      siblings[i].classList.remove('tabActive')
    }
  }
  let descDiv = descPage(desc)

  let dueDateDiv = dueDatePage(dueDate)

  let priorityDiv = priorityPage()

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
    infoDiv.appendChild(dueDateDiv.dueDateDiv)
  })

  tabs.priorityTab.addEventListener('click', function() {
    let siblings = this.parentElement.children;
    removeActives(siblings);
    this.className += ' tabActive';
    infoDiv.innerHTML = '';
    infoDiv.appendChild(priorityDiv.holderDiv)
  })

  priorityDiv.bubble1.addEventListener('click', function() {
    this.parentElement.parentElement.parentElement.parentElement.children[0].style.backgroundColor ='green';
    priority = 1;
    editArray(number, 'priority', priority)
  })

  priorityDiv.bubble2.addEventListener('click', function() {
    this.parentElement.parentElement.parentElement.parentElement.children[0].style.backgroundColor ='orange';
    priority = 2;
    editArray(number, 'priority', priority)
  })

  priorityDiv.bubble3.addEventListener('click', function() {
    this.parentElement.parentElement.parentElement.parentElement.children[0].style.backgroundColor ='red';
    priority = 3;
    editArray(number, 'priority', priority)
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
