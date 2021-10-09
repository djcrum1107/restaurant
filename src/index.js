import init_website from "./website";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import './style.css';

function changeTab(e){
    let targetTab = e.target.id;
    console.log(e.target.id);
    if(targetTab == "home_btn"){
        loadHome();
    }else if(targetTab == "menu_btn"){
        loadMenu();
    }else if(targetTab == "contact_btn"){
        loadContact();
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