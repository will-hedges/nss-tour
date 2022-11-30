import { getVenues } from "./database.js";

// make and export a bulleted list of all available venues
const venues = getVenues();

export const venuesHTML = () => {
  let html = "<ul>";
  for (const venue of venues) {
    html += `<li id="venue--${venue.id}">${venue.name}</li>`;
  }
  html += "</ul>";
  return html;
};
