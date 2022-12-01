import { getBands } from "./database.js";

// make and export a bulleted list of all band names
const bands = getBands();

export const bandList = () => {
  let bandHTML = "<ul>";
  for (const band of bands) {
    bandHTML += `<li id="band--${band.id}">${band.name}</li>`;
  }
  bandHTML += "</ul>";
  return bandHTML;
};
