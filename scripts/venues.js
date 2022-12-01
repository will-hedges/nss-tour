import { getBookings, getVenues } from "./database.js";
import { getBandByBandId } from "./bookings.js";

const bookings = getBookings();
const venues = getVenues();

export const venueList = () => {
  let venueHTML = "<ul>";
  for (const venue of venues) {
    venueHTML += `<li id="venue--${venue.id}">${venue.name}</li>`;
  }
  venueHTML += "</ul>";
  return venueHTML;
};

/*
  add a click listener for the venue list
  clicking a venue should show all of the bands that that venue has booked
  ex. 
    The 1975 - 3/6/2023
    Living With Ghosts - 10/1/2022
*/
const filterBookingsByVenue = (venueObj) => {
  const venueBookings = [];
  for (const booking of bookings) {
    if (booking.venueId == venueObj.id) {
      venueBookings.push(booking);
    }
  }
  return venueBookings;
};

// when you click the venue, parse the venue id primary key
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.id.startsWith("venue")) {
    const [, venueId] = itemClicked.id.split("--");
    // using that primary key, go through all the bookings and pull out those for the venue
    let scheduledBookings = {};
    for (const venue of venues) {
      if (venue.id == venueId) {
        scheduledBookings = filterBookingsByVenue(venue);
      }
    }
    // now we have an array of booking objects
    // need to pull out the name of the band for each one
    let bookingStringsArr = [];
    for (const booking of scheduledBookings) {
      let band = getBandByBandId(booking);
      bookingStringsArr.push(`${band.name} - ${booking.bookingDate}`);
    }
    // display the alert
    window.alert(`${bookingStringsArr.join("\n")}`);
  }
});
