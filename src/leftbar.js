let sideBarContents = () => {
  let iconDiv = document.createElement('div')
  let icon = 'make Icon';
  let button = document.createElement('div').id = 'addButton';
 
  iconDiv.id = 'iconDiv';
  return {iconDiv, icon, button}
};


function populateSideBar() {
  let sidenav = document.getElementById('leftsidenav')

}

export {sideBarContents}
