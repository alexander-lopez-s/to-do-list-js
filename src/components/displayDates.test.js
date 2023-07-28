/**
 * @jest-environment jsdom
 */

import displayDates from "./displayDates.js"

 describe('create a user component ', () => {
    const datesData = [
        { today: 'Fri 27' }, 
        { previousDays: 'Thu 26' },
        { nextDays: 'Sat 28' },
      ];
      test('the node name for date should be "DIV', () => {
        const date = displayDates(datesData);
        expect(date.nodeName).toEqual('DIV');
      });
 });
