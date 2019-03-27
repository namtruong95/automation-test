import makeResvByPhone from './by-phone';
import registerInStep3 from './register';
import loginInStep3 from './login';
import changeOption from './option';
import changeCoupon from './coupon';
import changeResvName from './resv-name';
import submitStep3Func from './submit';

const step3Func = (row) => {
  if (row[4] === 'cash') {
    makeResvByPhone(row[9]);
  }
  registerInStep3();
  loginInStep3();
  changeOption(row[11]);
  changeCoupon(row[12]);
  changeResvName(row[13]);
  submitStep3Func();
};

export default step3Func;
