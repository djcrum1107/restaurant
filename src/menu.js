//Create a menu item with name, image, and description
function createMenuItem(foodName, foodDescription, foodImageLocation){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');
    
    const foodImage = document.createElement('img');
    foodImage.src = foodImageLocation;

    const fName = document.createElement('h2');
    fName.innerText = foodName;

    const fDescription = document.createElement('p');
    fDescription.innerText = foodDescription;
    
    menuItem.appendChild(foodImage);
    menuItem.appendChild(fName);
    menuItem.appendChild(fDescription);

    return menuItem;
}

//The initial creation of the menu content, should only be run once
function createMenuContent(menuContent){
    menuContent = document.createElement('div');
    menuContent.id = 'menuContent';

    menuContent.appendChild(createMenuItem('Bluey Burger', 
    'A delicious beef patty with a side of fries for the kids!', 
    './assets/burger.jpeg'));

    menuContent.appendChild(createMenuItem('Bluey Burger', 
    'A delicious beef patty with a side of fries for the kids!', 
    './assets/burger.jpeg'));

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