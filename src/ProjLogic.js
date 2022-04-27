import {populateSeeAllDiv} from './seeAllLogic.js'

let display = document.getElementById('display')

let tabArr = []

let seeAllButton = () => {
  if (active == false){
    display.style.flexDirection = 'column';
    active = true;
    for (let i = 0; i < tabArr.length; i++){
      display.appendChild(populateSeeAllDiv(tabArr[i][0].name, tabArr[i][0].position + 1).container)
    }
    display.appendChild(addProjButton().container)
    return
  }else if (active == true){
    active = false;
    display.style.flexDirection = 'null'
    clearDisplay()
    return
  }
}

export {seeAllButton}
