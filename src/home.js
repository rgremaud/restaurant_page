// home.js
import iceCream from "./ice_cream.jpg";

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
    title.textContent = "Theo's Ice Cream"

    parentDiv.appendChild(title);
}

function insertImage (parentDiv) {
    const image = document.createElement("img");
    image.src = iceCream;
    image.id = "image";

    image.style.maxWidth = '70%';
    image.style.height = 'auto';

    parentDiv.appendChild(image);
}

function createInfo (parentDiv) {
    const info = document.createElement("p");
    info.id = "info";
    info.textContent = `Created by a very serious 3-year-old ice cream expert, Theo's Ice Cream is where things get extra silly and super sweet. We take our fun as seriously as our ice cream (which is not very serious at all). Come on in—it's always a good day for a scoop!`

    parentDiv.appendChild(info);
}

function createHours (parentDiv) {
    const topLine = document.createElement("h3");
    topLine.className = "hours";
    topLine.textContent = "Open Daily"

    const bottomLine = document.createElement("div");
    bottomLine.className = "hours";
    bottomLine.textContent = "11AM to 9PM"

    parentDiv.appendChild(topLine);
    parentDiv.appendChild(bottomLine);
}


export { createHomeDiv };