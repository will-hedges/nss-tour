import { getBands } from "./database.js";

// make and export a bulleted list of all band names
const bands = getBands();

export const bandsHTML = () => {
  let html = "<ul>";
  for (const band of bands) {
    html += `<li id="band--${band.id}">${band.name}</li>`;
  }
  html += "</ul>";
  return html;
};
