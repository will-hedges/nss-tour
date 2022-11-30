// factory function for random booking objects
const createBooking = () => {
  const randomMonth = Math.floor(Math.random() * 12) + 1;
  const randomDay = Math.floor(Math.random() * 28) + 1;
  const randomYear = Math.floor(Math.random() * 2) + 2022;
  const randomDate = `${randomMonth}/${randomDay}/${randomYear}`;

  return {
    id: bookingId,
    venueId: Math.floor(Math.random() * 5) + 1,
    bandId: Math.floor(Math.random() * 10) + 1,
    bookingDate: randomDate,
  };
};

// factory function for an array of n random booking objects
const makeRandomBookings = (numOfBookings) => {
  const randomBookings = [];
  for (let i = 0; i < numOfBookings; i++) {
    randomBookings.push(createBooking());
  }
  return randomBookings;
};

const database = {
  bands: [
    {
      id: 1,
      name: "Living With Ghosts",
      genre: "Pop-Punk",
      yearFormed: 2022,
      numOfMembers: 4,
    },
    {
      id: 2,
      name: "Boston Manor",
      genre: "Rock",
      yearFormed: 2013,
      numOfMembers: 5,
    },
    {
      id: 3,
      name: "The 1975",
      genre: "Alternative",
      yearFormed: 2010,
      numOfMembers: 4,
    },
    {
      id: 4,
      name: "Spiritbox",
      genre: "Metal",
      yearFormed: 2016,
      numOfMembers: 3,
    },
    {
      id: 5,
      name: "Dance Gavin Dance",
      genre: "Post-Hardcore",
      yearFormed: 2006,
      numOfMembers: 5,
    },
    {
      id: 6,
      name: "Don Broco",
      genre: "Rock",
      yearFormed: 2014,
      numOfMembers: 4,
    },
    {
      id: 7,
      name: "Neck Deep",
      genre: "Pop-Punk",
      yearFormed: 2015,
      numOfMembers: 6,
    },
    {
      id: 8,
      name: "Waterparks",
      genre: "Pop-Punk",
      yearFormed: 2012,
      numOfMembers: 3,
    },
    {
      id: 9,
      name: "Purity Ring",
      genre: "Electronic",
      yearFormed: 2010,
      numOfMembers: 2,
    },
    {
      id: 10,
      name: "Interpol",
      genre: "Alternative",
      yearFormed: 2004,
      numOfMembers: 3,
    },
  ],
  venues: [
    {
      id: 1,
      name: "The Hedges",
      address: "8020 Claytie Cir",
      sqFootage: 600,
      maxOccupancy: 50,
    },
    {
      id: 2,
      name: "The Donelson Pub",
      address: "123 Donelson Rd",
      sqFootage: 1000,
      maxOccupancy: 75,
    },
    {
      id: 3,
      name: "Liz' Basement",
      address: "343 Setliff Pl",
      sqFootage: 750,
      maxOccupancy: 50,
    },
    {
      id: 4,
      name: "The 44 Club",
      address: "3200 Elysian Fields Rd",
      sqFootage: 500,
      maxOccupancy: 40,
    },
    {
      id: 5,
      name: "Madison Round Garden",
      address: "4562 Gallatin Pk",
      sqFootage: 1200,
      maxOccupancy: 100,
    },
  ],
  bookings: makeRandomBookings(20),
};

// getter functions for bands, venues, bookings
export const getBands = () => {
  return database.bands.map((band) => ({ ...band }));
};

export const getVenues = () => {
  return database.venues.map((venue) => ({ ...venue }));
};

export const getBookings = () => {
  return database.bookings.map((booking) => ({ ...booking }));
};
