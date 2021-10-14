import init_website from "./website";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import './style.css';

//Set the current tab as a global variable
var currentTab = null;

//Remove all children from a parent, used when switching tabs to remove old tab
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//Loading a tab for the content, replacing the old content with new if it does switch to a different tab
function loadTab(targetTab){
    //Only bother switching tabs if it's a different tab
    if (targetTab != currentTab){
        currentTab = targetTab;
        //Remove old tab content
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

//Event triggered tab switching, currently only used for button click events
function changeTab(e){
    let targetTab = e.target.id;
    loadTab(targetTab);
}

//Initial setup of the tabs after initial website setup. Collects buttons and add click events
function setupTabs(){
    const content = document.getElementById('content');
    const buttons = Array.from(content.getElementsByTagName('button'));

    buttons.forEach(button => {
        button.addEventListener("click", changeTab);
    });

}

//Initilize the website and setup the tab events
init_website();
setupTabs();