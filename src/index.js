import './style.css'

import {populateSideBar} from './leftbar.js'
import {populateTopBar} from './topbar.js'
import {tabMaker} from './topbar.js'
import {toDoItem} from './todoCards.js'

tabMaker('hello')
tabMaker('goodbye')


toDoItem('testToDo2', `
hello you must do things, heellooooooo hey hello hi lol adfasdfa
`, '01/02/22')

let todooey = (() => {
  populateSideBar()
  populateTopBar()
})()
