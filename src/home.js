// home.js

function createHomeDiv () {
    const homeDiv = document.createElement("div");
    homeDiv.id = "homeDiv";

    createTitle(homeDiv);

    return homeDiv;
}

function createTitle (parentDiv) {
    const title = document.createElement("h1");
    title.id = "title";
    title.textContent = "Theo's Icecream"

    parentDiv.appendChild(title);
}

export { createHomeDiv };