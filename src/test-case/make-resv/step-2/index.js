import changeMethodCash from './payment-method-cash';
import changeMethodPoint from './payment-method-point';
import changeWorkPlaceHome from './work-place-home';
import changeWorkPlaceHotel from './work-place-hotel';
import submitStep2Func from './submit';

const step2Func = () => {
  changeMethodCash();
  changeMethodPoint();
  changeWorkPlaceHome();
  changeWorkPlaceHotel();
  submitStep2Func();
};

export default step2Func;
