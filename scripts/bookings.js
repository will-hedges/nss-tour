// write a function that generates a random booking object
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

export const bookings = (numOfBookings) => {
  const randomBookings = [];
  for (let i = 0; i < numOfBookings; i++) {
    randomBookings.push(createBooking());
  }
  return randomBookings;
};
