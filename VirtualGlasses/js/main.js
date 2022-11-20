import { Glass } from "../models/glass.js";

import { GetGlass } from "../service/glass.js";

const getGlass = new GetGlass();

const domId = (id) => document.getElementById(id);

let content = getGlass.dataGlasses.reduce((content, element) => {
  content += ` <img src="${element.src}" alt="" class="col-4 glass"  onclick="showGlass('${element.id}')" /> `;
  return content;
}, "");

domId("vglassesList").innerHTML = content;

window.showGlass = (id) => {
  const data = getGlass.showGlass(id);
  domId("glassesInfo").style.display = "block";

  let content = `
    <p class="nameGlass"> ${data.name.toUpperCase()} - ${data.brand.toString()} (${data.color.toString()})</p>
    <p class="priceGlass">${data.price}</p>
    <p class="statusGlass">stocking</p>
    <p class="descriptionGlass">${data.description}</p>
 `;

  let show = `<img src="${data.virtualImg}" />`;

  domId("glassesInfo").innerHTML = content;

  domId("avatar").innerHTML = show;
};
