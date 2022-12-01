import { getBands, getBookings } from "./database.js";
import { getVenueByVenueId } from "./bookings.js";

const bands = getBands();
const bookings = getBookings();

export const bandList = () => {
  let bandHTML = "<ul>";
  for (const band of bands) {
    bandHTML += `<li id="band--${band.id}">${band.name}</li>`;
  }
  bandHTML += "</ul>";
  return bandHTML;
};

// write a function that filters booking objects based on the bands id
// it should take a band object and return an array of booking objects
export const filterBookingsByBand = (bandObj) => {
  const bandBookings = [];
  for (const booking of bookings) {
    if (booking.bandId == bandObj.id) {
      bandBookings.push(booking);
    }
  }
  return bandBookings;
};

/*
  add a click listener for the band list
  clicking a band should show all of the bookings that that band has
  ex. 
    3/6/2023 at The Hedges
    4/15/2023 at The 404 Grill
*/
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.id.startsWith("band")) {
    const [, bandId] = itemClicked.id.split("--");
    // you now have the bands primary id key
    // let's use that key to get the band object
    let scheduledBookings = {};

    for (const band of bands) {
      if (band.id == bandId) {
        // get all the bookings the band has
        scheduledBookings = filterBookingsByBand(band);
      }
    }
    // now get all the bookings that that band has
    // now that we have an array of bookingObjs
    // we need to pull out the name of the venue for each one
    let bookingStringsArr = [];
    for (const booking of scheduledBookings) {
      // pull out the venueObj for the booking
      let venue = getVenueByVenueId(booking);
      // now we can use the venue name
      let bookingStr = `${booking.bookingDate} at ${venue.name}`;
      bookingStringsArr.push(bookingStr);
    }
    // now that we have an array of booking strings, join them with newlines
    window.alert(`${bookingStringsArr.join("\n")}`);
  }
});
