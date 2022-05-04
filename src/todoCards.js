import {elementFactory} from './ElementMaker.js'
import {tabArr} from './projectArray.js'
import {editArray} from './projectArray.js'
import {currentProj} from './topbar.js'
import {formatDistanceToNow} from 'date-fns'
import {printTodos} from './topbar.js'
import {deleteTodo} from './projectArray.js'

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

  descDiv.appendChild(toDoDesc)
  descDiv.appendChild(penIcon)

  return {descDiv, penIcon, toDoDesc}
}

let dueDatePage = (dueDate) => {
  let dateProcess = () => {
    let dateArray = dueDate.split('-');
    let relativeDate = formatDistanceToNow(new Date(dateArray[0], parseFloat(dateArray[1]) - 1, dateArray[2]));
    if (dueDate == '') {
      dueDate = 'none'
    }
    return {relativeDate, dateArray}
  }

  
  let relativeDate = dateProcess(dueDate).relativeDate;
  let dateArray = dateProcess(dueDate).dateArray;
  
  let deadline = 'Deadline: '
  let dueDateDiv = elementFactory('div', {
    className: 'dueDateDiv',
  })

  let casualCountdown = elementFactory('p', {
    className: 'timeLeftText',
    innerHTML: `Due in ${relativeDate}`
  })

  let dueDateText = elementFactory('p', {
    className: 'toDoDueDate',
    innerHTML: `${deadline} ${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`,
  })

  let textDiv = elementFactory('div', {
    className: 'dueDateTextDiv',
  })

  let changeDateButton = elementFactory('div', {
    className: 'DateButton',
  })

  let changeDateText = elementFactory('p', {
    className: 'DateButtonText',
    innerHTML: `Change Deadline`,
  })

  //text content goes into the text div
  textDiv.appendChild(dueDateText);
  textDiv.appendChild(casualCountdown);
  dueDateDiv.appendChild(textDiv);

  //adds the edit button to the div
  changeDateButton.appendChild(changeDateText);
  dueDateDiv.appendChild(changeDateButton);
  
  return {dueDateDiv, casualCountdown, changeDateButton}
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

  holderDiv.appendChild(labelDiv)
  holderDiv.appendChild(bubbleHolder)

  return {holderDiv, bubble1, bubble2, bubble3}
}


//The function which creates the todo item and appends them to the document
let toDoItem = (name, desc, dueDate, priority, number) => {

  let todoDiv = elementFactory('div', {
    className: 'toDoItem',
  })

  let nameDiv = elementFactory('div', {
    className: 'nameDiv',
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

  let nameTextDiv = elementFactory('div',{
    className: 'nameTextDiv'
  })

  let toDoName = elementFactory('p', {
    className: 'toDoName',
    innerHTML: name,
  })

  toDoName.addEventListener('click', function() {
    this.contentEditable = 'true'
    this.focus()
    this.addEventListener('input', function() {
      editArray(number, 'name', this.innerHTML)
      toDoName.addEventListener('keypress', function(e) {
        if (e.key === 'Enter'){
          console.log(this)
          this.contentEditable = 'false'
        }
      })
    })
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

  let deleteDiv = elementFactory('div', {
    className: 'deleteDiv',
  })

  let deleteIcon = elementFactory('i', {
    className: 'fa fa-trash',
  })

  deleteDiv.appendChild(deleteIcon)
  // Event Listeners & functions for everything in the todos
  tickBox.addEventListener('click', function() {
    if (this.style.backgroundColor == ''){
      this.parentElement.parentElement.style.opacity = '70%'
      this.style.backgroundColor = 'black'
      this.style.opacity = '90%'
      infoDiv.innerHTML = ''
      infoDiv.appendChild(deleteDiv)
      deleteIcon.addEventListener('click', function() {
        display.innerHTML = ''
        deleteTodo(number)
        printTodos(currentProj)
      })
    } else {
      this.parentElement.parentElement.style.opacity = '100%'
      this.style.backgroundColor = '';
      this.style.opacity = '40%'
      infoDiv.innerHTML = ''
      infoDiv.appendChild(descDiv.descDiv)
    }
  })

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

  descDiv.penIcon.addEventListener('click', () => {
    descDiv.toDoDesc.contentEditable = true;
    descDiv.toDoDesc.focus()
    descDiv.toDoDesc.addEventListener('input', function() {
      editArray(number, 'desc', descDiv.toDoDesc.innerHTML)
    })
  })

  dueDateDiv.changeDateButton.addEventListener('click', function() {
    if (this.parentElement.children[1].className !== 'date'){
      let dateInput = elementFactory('input', {
        type: 'date',
        className: 'date'
        })
      dateInput.focus()
      this.innerHTML = 'Submit';
      this.addEventListener('click', function() {
        if (dateInput.value == '') {
          return
        } else {
          editArray(number, 'date', dateInput.value)
          display.innerHTML = ''
          for (let i = 1; i < Object.keys(tabArr[currentProj]).length; ++i) {
            toDoItem(tabArr[currentProj][i].Name, 
              tabArr[currentProj][i].Desc, 
              tabArr[currentProj][i].dueDate,
              tabArr[currentProj][i].priority,
              tabArr[currentProj][i].Number,)
          }
        }
      })
      this.parentElement.insertBefore(dateInput, this.parentElement.children[1])
    }
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

  nameTextDiv.appendChild(toDoName)
  nameTextDiv.appendChild(dueDateDiv.casualCountdown)
  nameDiv.appendChild(nameTextDiv)
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
