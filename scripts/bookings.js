import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands();
const bookings = getBookings();
const venues = getVenues();

// pull out a band based on a booking band id
export const getBandByBandId = (bookingObj) => {
  for (const band of bands) {
    if (bookingObj.bandId == band.id) {
      return band;
    }
  }
};

// pull out a venue based on a booking venue id
export const getVenueByVenueId = (bookingObj) => {
  for (const venue of venues) {
    if (bookingObj.venueId == venue.id) {
      return venue;
    }
  }
};

// make and export a bulleted list of all bookings
export const bookingList = () => {
  let bookingHTML = "<ul>";

  // go through all the bookings
  for (const booking of bookings) {
    // look at the booking, and match the band id
    let band = getBandByBandId(booking);
    // look at the booking, and match the venue id
    let venue = getVenueByVenueId(booking);
    // create a string with the pertinent information
    bookingHTML += `<li id="booking--${booking.id}">${band.name} is playing at ${venue.name} on ${booking.bookingDate}</li>`;
  }
  return bookingHTML;
};

/* 
  when a booking is clicked, it should show a window alert that displays all the band information
  example:
    Rocket Pumpkins
    EDM
    Formed in 2005
    3 band members
*/

document.addEventListener("click", (clickEvent) => {
  // get the most specific item clicked
  const itemClicked = clickEvent.target;
  // check to see if the id starts with "booking"
  if (itemClicked.id.startsWith("booking")) {
    // destructure the string to get the primary key of the booking
    const [, bookingId] = itemClicked.id.split("--");
    // look up the whole booking id and get the booking band id
    for (const booking of bookings) {
      if (bookingId == booking.id) {
        // look up the band
        let band = getBandByBandId(booking);
        // display the alert
        window.alert(
          `${band.name}\n${band.genre}\nFormed in ${band.yearFormed}\n${band.numOfMembers} band members`
        );
      }
    }
  }
});
