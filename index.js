import driver from './src/commons/driver';
import testLogin from './src/test-suite/login';
import makeResvFunc from './src/test-suite/make-resv';
import readExcel from './src/commons/read-excel';

const path = '/home/nam/Desktop/testcase.xlsx';

describe('test user login', async () => {
  const testDatas = readExcel(path)[0].data;

  testDatas.forEach((row, rowNumber) => {
    if (!rowNumber) {
      return;
    }

    describe(`test row ${rowNumber}`, () => {
      const testData = {
        email: row[0],
        password: row[1],
      };

      testLogin(testData);
    });
  });

  // times.forEach((time) => {
  //   describe(`time ${time}`, () => {
  //     makeResvFunc();
  //   });
  // });
  after(() => driver.quit());
});
