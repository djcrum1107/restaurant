//The initial creation of the menu content, should only be run once
function createMenuContent(menuContent){
    menuContent = document.createElement('div');
    menuContent.id = 'menuContent';

    return menuContent;
}

//Load the menu content. Create the home content if it has not already been created, otherwise append the already created home content
function loadMenu(){
    const workspace = document.getElementById('center_content');
    let menuContent;

    //If the menu content does not exist yet create it
    if(typeof menuContent == "undefined"){
        menuContent = createMenuContent(menuContent);
    }
    workspace.appendChild(menuContent);
    console.log("Menu loaded");
}

export default loadMenu;