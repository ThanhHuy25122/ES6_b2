import { Glass } from "../models/glass.js";

import { GetGlass } from "../service/glass.js";

const getGlass = new GetGlass();

const domId = (id) => document.getElementById(id);

let content = getGlass.dataGlasses.reduce((content, element) => {
  content += ` <img src="${element.src}" alt="" class="col-4" onclick="showGlass('${element.id}')" /> `;
  return content;
}, "");

domId("vglassesList").innerHTML = content;

window.showGlass = (id) => {
  const data = getGlass.showGlass(id);
  domId("glassesInfo").style.display = "block";

  content = `
    <p class="nameGlass"> ${data.name} - ${data.brand} (${data.color})</p>
    <p class="priceGlass">${data.price}</p>
    <p class="statusGlass">stocking</p>
    <p class="descriptionGlass">${data.name}</p>
 `;

  domId("glassesInfo").innerHTML = content;
};
