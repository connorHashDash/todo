import './style.css'

import {populateSideBar} from './leftbar.js'
import {populateTopBar} from './topbar.js'

let todooey = (() => {
  populateSideBar()
  populateTopBar()
})()
