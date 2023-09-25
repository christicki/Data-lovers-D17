import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/got/got.js";

const dataGot = data.got;

const root = document.querySelector("#root");

root.appendChild(renderItems(dataGot));
const liContainerAll = root.querySelectorAll(".container");
console.log(liContainerAll);
liContainerAll.forEach((liContainer)=>{
  liContainer.addEventListener('click', ()=>{console.log('hola jojo')})
})
//averiguar sobre el event.target