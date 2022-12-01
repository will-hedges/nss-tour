import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands();
const bookings = getBookings();
const venues = getVenues();

// pull out a band based on a booking band id
const getBandByBandId = (bookingObj) => {
  for (const band of bands) {
    if (bookingObj.bandId == band.id) {
      return band;
    }
  }
};

// pull out a venue based on a booking venue id
const getVenueByVenueId = (bookingObj) => {
  for (const venue of venues) {
    if (bookingObj.venueId == venue.id) {
      return venue;
    }
  }
};

// make and export a bulleted list of all bookings
export const bookingList = () => {
  let bookingHTML = "<ul>";
  let [band, venue] = ["", ""];

  // go through all the bookings
  for (const booking of bookings) {
    // look at the booking, and match the band id
    band = getBandByBandId(booking);
    // look at the booking, and match the venue id
    venue = getVenueByVenueId(booking);
    // create a string with the pertinent information
    bookingHTML += `<li id="booking--${booking.id}">${band.name} is playing at ${venue.name} on ${booking.bookingDate}</li>`;
  }
  return bookingHTML;
};
