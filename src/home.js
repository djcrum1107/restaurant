//The initial creation of the home content, should only be run once
function createHomeContent(homeContent){
    homeContent = document.createElement('div');
    homeContent.id = 'homeContent';

    const homeHeader = document.createElement('h1');
    homeHeader.innerText = "Welcome to Bluey's Burgers!";

    homeContent.appendChild(homeHeader);

    return homeContent;
}

//Load the home content. Create the home content if it has not already been created, otherwise append the already created home content
function loadHome(){
    const workspace = document.getElementById('center_content');
    let homeContent;

    //If the home content does not exist yet create it
    if(typeof homeContent == "undefined"){
        homeContent = createHomeContent(homeContent);
    }
    workspace.appendChild(homeContent);
    console.log("Home loaded");
}

//Export only needed load function
export default loadHome;