import createDates from './createDates.js'

 describe('createDates', () => {
    test('should populate array length with 5 entries', () => {
        const dates =  createDates();
      expect(dates.length).toEqual(5);
    });
  
    test('should contain the correct current day', () => {
        const dates =  createDates();
      const today = dates.find((date) => date.today);
      // Assuming the test is run on July 28, 2023, this should be the current day
      expect(today.today).toEqual('28 Fri');
    });
  
  });

