let tabArr = []

let findProjects = () => {
  let projects = []
  for (let i = 0; i < tabArr.length; i++) {
    projects[i] = tabArr[i][0]
  }
  return {projects}
}

let findTodos = (projectNumber) => {
  let todos = []
    for (let i = 1; i < tabArr[projectNumber].length; i++) {
      todos[i] = tabArr[projectNumber][i]
    }
  return {todos}
}

export {tabArr}
export {findProjects}
