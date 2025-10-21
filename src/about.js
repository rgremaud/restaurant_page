// about.js

function createAboutDiv () {
    const aboutDiv = document.createElement("div");
    aboutDiv.className = "pageTab";
    aboutDiv.id = "aboutDiv";

    createTitle(aboutDiv);

    return aboutDiv;
}

function createTitle (parentDiv) {
    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "About Theo's Icecream"

    parentDiv.appendChild(title);
}

export { createAboutDiv };