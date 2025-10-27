// contact.js
import vertCream from "./vert_icream.jpg"

function createContactDiv () {
    const contactDiv = document.createElement("div");
    contactDiv.className = "pageTab";
    contactDiv.id = "contactDiv";

    const leftAndRightDiv = document.createElement("div");
    leftAndRightDiv.id = "leftAndRightDiv"

    createTitle(contactDiv);
    createLeftDiv(leftAndRightDiv);
    createRightDiv(leftAndRightDiv);

    contactDiv.appendChild(leftAndRightDiv);

    return contactDiv;
}

function createLeftDiv (parentDiv) {
    const leftDiv = document.createElement("div");
    leftDiv.id = "leftDiv";

    insertImage(leftDiv);

    parentDiv.appendChild(leftDiv);
}

function createRightDiv (parentDiv) {
    const rightDiv = document.createElement("div");
    rightDiv.id = "rightDiv";

    createAddress(rightDiv);
    contactUs(rightDiv);
    createHours(rightDiv);

    parentDiv.appendChild(rightDiv);
}

function createTitle (parentDiv) {
    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Contact Theo"

    parentDiv.appendChild(title);
}

function createAddress (parentDiv) {
    const addressLineOne = document.createElement("h2");
    addressLineOne.className = "lineOne";
    addressLineOne.textContent = "address";

    const addressLineTwo = document.createElement("div");
    addressLineTwo.className = "address";
    addressLineTwo.textContent = "1234 Ice Cream Avenue"

    const addressLineThree = document.createElement("div");
    addressLineThree.className = "address";
    addressLineThree.textContent = "Cary NC";

    parentDiv.appendChild(addressLineOne);
    parentDiv.appendChild(addressLineTwo);
    parentDiv.appendChild(addressLineThree);

}

function contactUs (parentDiv) {
    const contactUs = document.createElement("h2");
    contactUs.className = "contact";
    contactUs.textContent = "contact us"

    
    const phoneNumber = document.createElement("div");
    phoneNumber.className = "contact";
    phoneNumber.textContent = "919.123.4567";
    
    const email = document.createElement("div");
    email.className = "contact";
    email.textContent = "icecream@theo.com";

    parentDiv.appendChild(contactUs);
    parentDiv.appendChild(phoneNumber);
    parentDiv.appendChild(email);
}

function createHours (parentDiv) {
    const topLine = document.createElement("h2");
    topLine.className = "contactHours";
    topLine.textContent = "open daily"

    const bottomLine = document.createElement("div");
    bottomLine.className = "contactHours";
    bottomLine.textContent = "11AM to 9PM"

    parentDiv.appendChild(topLine);
    parentDiv.appendChild(bottomLine);
}

function insertImage (parentDiv) {
    const image = document.createElement("img");
    image.src = vertCream;
    image.id = "vertImage";

    image.style.maxWidth = '100%';
    image.style.height = 'auto';

    parentDiv.appendChild(image);
}

export { createContactDiv };