//The initial creation of the contact content, should only be run once
function createContactContent(contactContent){
    contactContent = document.createElement('div');
    contactContent.id = 'contactContent';

    return contactContent;
}

//Load the contact content. Create the contact content if it has not already been created, otherwise append the already created home content
function loadContact(){
    const workspace = document.getElementById('center_content');
    let contactContent;

    //If the contact content does not exist yet create it
    if(typeof contactContent == "undefined"){
        contactContent = createContactContent(contactContent);
    }
    workspace.appendChild(contactContent);
    console.log("Contact loaded");
}

export default loadContact;