//The initial creation of the contact content, should only be run once
function createContactContent(contactContent){
    contactContent = document.createElement('div');
    contactContent.id = 'contactContent';

    const contactBlurb = document.createElement('p1');
    contactBlurb.innerText = "If you would like to reach out to us don't hesitate to call or email!";
    contactBlurb.style.fontSize = '30px';
    contactContent.appendChild(contactBlurb);

    const contactNumber = document.createElement('h2');
    contactNumber.innerText = "+1 (234) 567-1234"
    contactContent.appendChild(contactNumber);

    const contactEmail = document.createElement('h2');
    contactEmail.innerText = "blueyburgers@bb.com"
    contactContent.appendChild(contactEmail);

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