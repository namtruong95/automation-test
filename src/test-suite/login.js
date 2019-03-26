import logout from '../test-case/login/logout';
import loginFail from '../test-case/login/login-fail';
import loginSuccess from '../test-case/login/login-success';

const testLogin = (data) => {
  // loginFail(data);
  loginSuccess(data);
  logout();
};

export default testLogin;
