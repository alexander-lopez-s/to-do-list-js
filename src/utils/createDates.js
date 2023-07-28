import { dates } from "../data.js";

function createDates() {
  const dateArray = [];
  const today = new Date();
  const options = { weekday: 'short', day: '2-digit' };

  // Get the last 2 days
  for (let i = 2; i > 0; i--) {
    const lastDay = new Date(today);
    lastDay.setDate(today.getDate() - i);
    dates.push({
      previousDays: lastDay.toLocaleString('en-US', options),
    });
  }
    
  // Get the current day and date
  dates.push({
    today: today.toLocaleString('en-US', options),
  });

  // Get the upcoming 2 days
  for (let i = 1; i <= 2; i++) {
    const upcomingDay = new Date(today);
    upcomingDay.setDate(today.getDate() + i);
    dates.push({
      nextDays: upcomingDay.toLocaleString('en-US', options),
    });
  }

  return dateArray;
}

export default createDates;

  