

function createHomeContent(homeContent){
    homeContent = document.createElement('homeContent');

    return homeContent;
}

function loadHome(){
    const workspace = document.getElementById('center_content');
    let homeContent;

    if(typeof homeContent == "undefined"){
        homeContent = createHomeContent(homeContent);
    }
    workspace.appendChild(homeContent);
    console.log("Home loaded");
}

export default loadHome;