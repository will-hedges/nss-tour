import { getVenues } from "./database.js";

// make and export a bulleted list of all available venues
const venues = getVenues();

export const venueList = () => {
  let venueHTML = "<ul>";
  for (const venue of venues) {
    venueHTML += `<li id="venue--${venue.id}">${venue.name}</li>`;
  }
  venueHTML += "</ul>";
  return venueHTML;
};
