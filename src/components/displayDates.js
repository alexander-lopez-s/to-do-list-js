const displayDates = (datesData) => {
        const today = new Date();
        const options = { weekday: 'short', day: '2-digit' };
      const weekContainer = document.createElement('div');
      weekContainer.className = 'week-container';
    
      // Access the correct property names to display the dates
      datesData.forEach((dateObj) => {
        const dateElement = document.createElement('p');
        if(today.toLocaleString('en-US', options) === dateObj.today){
          dateElement.classList = "today";
        }
        dateElement.innerText = dateObj.today || dateObj.previousDays || dateObj.nextDays;
        weekContainer.appendChild(dateElement);
      });
    
      return weekContainer;
    };

export default displayDates;

