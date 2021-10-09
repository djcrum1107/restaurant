import init_website from "./website";
import './style.css';

function changeTab(e){
    targetTab = e.target.id;
    console.log(e.target.id);
    if(targetTab == "home_btn"){
        console.log("Hit home");
    }else if(targetTab == "menu_btn"){
        
    }else if(targetTab == "contact_btn"){
        
    }
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