import loginSuccess from '../test-case/login/login-success';
import castListFunc from '../test-case/make-resv/cast-list';
import step1Func from '../test-case/make-resv/step-1';
import step2Func from '../test-case/make-resv/step-2';
import step3Func from '../test-case/make-resv/step-3';

const makeResvFunc = (row, rowNumber) => {
  if (rowNumber <= 1) {
    describe('login', () => {
      const data = {
        email: 'example1@yopmail.com',
        password: 'abcd1234',
      };
      loginSuccess(data);
    });
  }

  describe('change cast', () => {
    castListFunc(row);
  });

  describe('step 1', () => {
    step1Func(row);
  });

  describe('step 2', () => {
    step2Func(row);
  });

  describe('step 3', () => {
    step3Func(row);
  });
};

export default makeResvFunc;
