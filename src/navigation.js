import { createHomeDiv } from "./home.js";
import { createMenuDiv } from "./menu.js";
import { createAboutDiv } from "./about.js";

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

function aboutClick () {
    const about = document.getElementById("about");
    const content = document.getElementById('content')

    about.addEventListener("click", function() {
        content.textContent = "";
        const aboutDiv = createAboutDiv();
        content.appendChild(aboutDiv);
  });
}

export { homeClick }
export { menuClick }
export { aboutClick }