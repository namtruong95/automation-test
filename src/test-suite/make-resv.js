import loginSuccess from '../test-case/login/login-success';
import castListFunc from '../test-case/make-resv/cast-list';
import step1Func from '../test-case/make-resv/step-1';
import step2Func from '../test-case/make-resv/step-2';
import step3Func from '../test-case/make-resv/step-3';

const makeResvFunc = () => {
  describe('login', () => {
    loginSuccess();
  });

  describe('change cast', () => {
    castListFunc();
  });

  describe('step 1', () => {
    step1Func();
  });

  describe('step 2', () => {
    step2Func();
  });

  describe('step 3', () => {
    step3Func();
  });
};

export default makeResvFunc;
