// home.js

function createHomeDiv () {
    const homeDiv = document.createElement("div");
    homeDiv.className = "pageTab";
    homeDiv.id = "homeDiv";

    createTitle(homeDiv);
    insertImage(homeDiv);
    createInfo(homeDiv);
    createHours(homeDiv);

    return homeDiv;
}

function createTitle (parentDiv) {
    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Theo's Icecream"

    parentDiv.appendChild(title);
}

function insertImage (parentDiv) {
    const image = document.createElement("div");
    image.id = "image";
    image.textContent = "Place holder for homepage image";

    parentDiv.appendChild(image);
}

function createInfo (parentDiv) {
    const info = document.createElement("p");
    info.id = "info";
    info.textContent = `Most people don't think a 3 year old can create delicious icecream.\n  Come try homemade creations from our young prodigy.`

    parentDiv.appendChild(info);
}

function createHours (parentDiv) {
    const topLine = document.createElement("h3");
    topLine.id = "topLine";
    topLine.textContent = "Open Daily"

    const bottomLine = document.createElement("div");
    bottomLine.id = "bottomLine";
    bottomLine.textContent = "11AM to 9PM"

    parentDiv.appendChild(topLine);
    parentDiv.appendChild(bottomLine);
}


export { createHomeDiv };