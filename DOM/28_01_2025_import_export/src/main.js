import "./style.css";
import { sayHello as hello} from "./data/data.js";
import modal from "./data/function.js";
import Header from "./components/Header/Header.js";
import htmlLogo from "./images/html.png";

document.querySelector("#app").innerHTML = `
<h1>Import - Export</h1>
${Header()}
<img src="/logos/html.png" alt="Logo de HTML"/>
<img src="${htmlLogo}" alt="Logo de HTML"/>
`;

hello()
