import driver from './src/commons/driver';
import testLogin from './src/test-suite/login';
import makeResvFunc from './src/test-suite/make-resv';

let times = [1, 2, 3];

describe('test user', () => {
  // times.forEach((time) => {
  //   describe(`time ${time}`, () => {
  //     testLogin();
  //   });
  // });

  times.forEach((time) => {
    describe(`time ${time}`, () => {
      makeResvFunc();
    });
  });

  after(() => driver.quit());
});
