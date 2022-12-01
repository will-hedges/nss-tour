import { bandList } from "./bands.js";
import { bookingList } from "./bookings.js";
import { venueList } from "./venues.js";

const heroContainer = document.querySelector("#bookings");
const columnContainer = document.querySelector("#columnContainer");

const heroHTML = `
<h1>Scheduled Bookings</h1>
${bookingList()}
`;

const columnHTML = `
<section id="band__list">
  <h2>Available Bands</h2>
  ${bandList()}
</section>
<div class="column__divider"></div>
<section id="venue__list">
  <h2>Available Venues</h2>
  ${venueList()}
</section>`;

heroContainer.innerHTML = heroHTML;
columnContainer.innerHTML = columnHTML;
// STEP 1 - ANALYSIS

/*
  Create a module each for bands, venues, bookings
  possible database module?
*/

/*
  Each module should be able to pull each of it's "own" data out of the db
  getBands should get all the bands out of the db and into bands.js
  getVenues should get all the available venues out of db
  getBookings...

  each module should also export a copy of it's "own" data
  i.e export allBands, allVenues, allBookings
*/

// STEP 2 - ALGORITHM

/*
  show all the venues in a bulleted list 
  when a venue is clicked, an alert should show all of the bands that booked the venue
*/

/*
  show all bands in a bulleted list
  when a band is clicked, an alert should show all of the venues that band is playing at
*/

/*
  display all the bookings that SD has made
  ex. Rocket Pumpkins are playing at The Cellar Moss on 12/13/2023
  when a booking is clicked, an alert should show the following: name, genre, year formed, # members
  example:
    Rocket Pumpkins
    EDM
    Formed in 2005
    3 band members
*/
