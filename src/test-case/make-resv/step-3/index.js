import makeResvByPhone from './by-phone';
import registerInStep3 from './register';
import loginInStep3 from './login';
import changeOption from './option';
import changeCoupon from './coupon';
import changeResvName from './resv-name';
import submitStep3Func from './submit';

const step3Func = () => {
  makeResvByPhone();
  registerInStep3();
  loginInStep3();
  changeOption();
  changeCoupon();
  changeResvName();
  submitStep3Func();
};

export default step3Func;
