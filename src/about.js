// about.js

function createAboutDiv () {
    const aboutDiv = document.createElement("div");
    aboutDiv.id = "aboutDiv";

    createTitle(aboutDiv);

    return aboutDiv;
}

function createTitle (parentDiv) {
    const title = document.createElement("h1");
    title.id = "title";
    title.textContent = "About Theo's Icecream"

    parentDiv.appendChild(title);
}

export { createAboutDiv };