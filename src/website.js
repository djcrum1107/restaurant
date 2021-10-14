
function create_navigation(){
    const nav = document.createElement('nav');

    const home_button = document.createElement('button');
    home_button.innerHTML = "Home";
    home_button.id = "home_btn";

    const menu_button = document.createElement('button');
    menu_button.innerHTML = "Menu";
    menu_button.id = "menu_btn";

    const contact_button = document.createElement('button');
    contact_button.innerHTML = "Contact";
    contact_button.id = "contact_btn";

    nav.appendChild(home_button);
    nav.appendChild(menu_button);
    nav.appendChild(contact_button);

    return nav;
}

function create_header(){
    const header = document.createElement('div');
    header.classList.add('header');
    header.appendChild(create_navigation());

    return header;
}

function create_center(){
    const center = document.createElement('div');
    
    center.id = "center_content";
    center.classList.add('center_content');

    return center;
}

function create_footer(){
    const footer = document.createElement('div');
    footer.classList.add('footer');

    return footer;
}

function init_website(){
    const content = document.getElementById("content");
    content.appendChild(create_header());
    content.appendChild(create_center());
    content.appendChild(create_footer());
}

export default init_website;