
function create_navigation(){
    const nav = document.createElement('nav');

    const home_button = document.createElement('button');
    home_button.innerHTML = "Home";

    const menu_button = document.createElement('button');
    menu_button.innerHTML = "Menu";

    const contact_button = document.createElement('button');
    contact_button.innerHTML = "Contact";

    nav.appendChild(home_button);
    nav.appendChild(menu_button);
    nav.appendChild(contact_button);

    return nav;
}

function create_header(){
    const header = document.createElement('div');

    header.appendChild(create_navigation());

    return header;
}

function create_center(){
    const center = document.createElement('div');
    
    center.classList.add('center_content');

    return center;
}

function init_website(){
    const content = document.getElementById("content");
    content.appendChild(create_header());
    content.appendChild(create_center());
}

export default init_website;