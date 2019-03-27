import changeMethodCash from './payment-method-cash';
import changeMethodPoint from './payment-method-point';
import changeWorkPlaceHome from './work-place-home';
import changeWorkPlaceHotel from './work-place-hotel';
import submitStep2Func from './submit';

const step2Func = (row) => {
  switch (row[4]) {
    case 'cash':
      changeMethodCash();
      break;
    case 'point':
      changeMethodPoint();
      break;
  }
  switch (row[5]) {
    case 'home':
      changeWorkPlaceHome(row[8]);
      break;
    case 'hotel':
      const data = {
        hotelName: row[6],
        roomNumber: row[7],
      };
      changeWorkPlaceHotel(data);
      break;
  }
  submitStep2Func();
};

export default step2Func;
