import { createHomeDiv } from "./home.js";
import { createMenuDiv } from "./menu.js";
import { createContactDiv } from "./contact.js";

function homeClick () {
    const home = document.getElementById("home");
    const content = document.getElementById('content')

    home.addEventListener("click", function() {
        content.textContent = "";
        const homeDiv = createHomeDiv();
        content.appendChild(homeDiv);
  });
}

function menuClick () {
    const menu = document.getElementById("menu");
    const content = document.getElementById('content')

    menu.addEventListener("click", function() {
        content.textContent = "";
        const menuDiv = createMenuDiv();
        content.appendChild(menuDiv);
  });
}

function contactClick () {
    const contact = document.getElementById("contact");
    const content = document.getElementById('content')

    contact.addEventListener("click", function() {
        content.textContent = "";
        const contactDiv = createContactDiv();
        content.appendChild(contactDiv);
  });
}

export { homeClick }
export { menuClick }
export { contactClick }