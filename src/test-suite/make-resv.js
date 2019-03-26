import loginSuccess from '../test-case/login/login-success';
import castListFunc from '../test-case/make-resv/cast-list';
import step1Func from '../test-case/make-resv/step-1';
import step2Func from '../test-case/make-resv/step-2';
import step3Func from '../test-case/make-resv/step-3';

const makeResvFunc = (row) => {
  describe('login', () => {
    const data = {
      email: 'example1@yopmail.com',
      password: 'abcd1234',
    };
    loginSuccess(data);
  });

  describe('change cast', () => {
    const data = row[0];
    castListFunc(data);
  });

  describe('step 1', () => {
    const data = {
      course: row[1],
      courseDuration: row[2],
      area: row[3],
    };
    step1Func(data);
  });

  describe('step 2', () => {
    step2Func();
  });

  describe('step 3', () => {
    step3Func();
  });
};

export default makeResvFunc;
