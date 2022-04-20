import './style.css'

import {populateSideBar} from './leftbar.js'
import {populateTopBar} from './topbar.js'
import {tabMaker} from './topbar.js'
import {toDoItem} from './todoCards.js'

tabMaker('hello')
tabMaker('goodbye')

let todooey = (() => {
  populateSideBar()
  populateTopBar()
})()
