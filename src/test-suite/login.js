import logout from '../test-case/login/logout';
import loginFail from '../test-case/login/login-fail';
import loginSuccess from '../test-case/login/login-success';

const testLogin = () => {
  loginFail();
  loginSuccess();
  logout();
};

export default testLogin;
