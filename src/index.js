// index.js
import "./reset.css";
import "./styles.css";

import { homeClick } from "./navigation";
import { menuClick } from "./navigation";
import { aboutClick } from "./navigation";
import { createHomeDiv } from "./home";

// add click events for nav bar

homeClick();
menuClick();
aboutClick();

// load home page for initial load
const homeDiv = createHomeDiv();
const content = document.getElementById('content')

content.appendChild(homeDiv);
