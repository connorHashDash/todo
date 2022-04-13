function elementFactory(type, properties){
  let element = document.createElement(type)
    
  for (const p in properties){
    element[p] = properties[p]
  } return element
}

export {elementFactory}
