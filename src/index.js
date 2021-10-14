import init_website from "./website";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import './style.css';

var currentTab = null;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function loadTab(targetTab){
    if (targetTab != currentTab){
        currentTab = targetTab;

        removeAllChildNodes(document.getElementById('center_content'));
        
        if(targetTab == "home_btn"){
            loadHome();
        }else if(targetTab == "menu_btn"){
            loadMenu();
        }else if(targetTab == "contact_btn"){
            loadContact();
        }
    }
    
}

function changeTab(e){
    let targetTab = e.target.id;
    loadTab(targetTab);
}

function setupTabs(){
    const content = document.getElementById('content');
    const buttons = Array.from(content.getElementsByTagName('button'));

    buttons.forEach(button => {
        button.addEventListener("click", changeTab);
        console.log(button.id);
    });

}

init_website();

setupTabs();