// menu.js

function createMenuDiv() {
    const menuDiv = document.createElement("div");
    menuDiv.className = "pageTab";
    menuDiv.id = "menuDiv";

    createTitle(menuDiv);
    createMenuDetails(menuDiv);

    return menuDiv;
}

function createTitle(parentDiv) {
    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Theo's Menu"

    parentDiv.appendChild(title);
}

function createMenuDetails(parentDiv) {
    const specialTitle = document.createElement("div");
    specialTitle.className = "specials"
    specialTitle.textContent = "specials - $15";

    parentDiv.appendChild(specialTitle);

    const specialItems = [
        {
            special: "the kitchen sink",
            description: "Scoop of Strawberry, Mint-Chocolate Chip, Coffee, Cookie-Dough topped with our housemade sprinkles",
        },
        {
            special: "sprinklesplosion",
            description: "Choice of any three flavors topped with our housemade chocolate sauce and a triple serving of sprinkles",
        },
        {
            special: "dealer's choice",
            description: "Four random flavors selected by our ice cream wizard",
        },
    ]

    specialItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.className = "menuItem";

        const specialTitle = document.createElement("div");
        specialTitle.className = "specialTitle";
        specialTitle.textContent = item.special;

        const description = document.createElement("div");
        description.className = "description";
        description.textContent = item.description;

        menuItem.appendChild(specialTitle);
        menuItem.appendChild(description);

        parentDiv.appendChild(menuItem)
    })

    const singleScoop = document.createElement("div");
    singleScoop.className = "specialTitle";
    singleScoop.textContent = "single scoop - $5";
    singleScoop.style.marginTop = "2vh";
    
    const doubleScoop = document.createElement("div");
    doubleScoop.className = "specialTitle";
    doubleScoop.textContent = "double scoop - $8";
    doubleScoop.style.marginBottom = "2vh";

    parentDiv.appendChild(singleScoop);
    parentDiv.appendChild(doubleScoop);

    const flavors = document.createElement("div");
    flavors.className = "specialTitle";
    flavors.textContent = "flavors";

    parentDiv.appendChild(flavors);

    const flavorArray = ["Vanilla", "Chocolate", "Strawberry", 
                    "Mint Chocolate Chip", "Rocky Road", "Cookie Dough",
                    "Coffee", "Peach Cobbler", "Cookies-n-Cream",
    ]
   
    const flavorList = document.createElement("div");
    flavorList.id = "flavorList";

    flavorArray.forEach(flavor => {
        const newFlavor = document.createElement("div");
        newFlavor.className = "flavors";
        newFlavor.textContent = flavor;

        flavorList.appendChild(newFlavor);
    })

    parentDiv.appendChild(flavorList);
}

export { createMenuDiv };