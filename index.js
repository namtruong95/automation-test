import driver from './src/commons/driver';
import testLogin from './src/test-suite/login';
import makeResvFunc from './src/test-suite/make-resv';
import readExcel from './src/commons/read-excel';

const path = '/home/nam/Desktop/testcase.xlsx';

describe('test user login', () => {
  const workSheetsFromFile = readExcel(path);

  // const testDataLogin = workSheetsFromFile[0].data;

  // testDataLogin.forEach((row, rowNumber) => {
  //   if (!rowNumber) {
  //     return;
  //   }

  //   describe(`test row ${rowNumber}`, () => {
  //     const testData = {
  //       email: row[0],
  //       password: row[1],
  //     };

  //     testLogin(testData);
  //   });
  // });

  const testDataMakeResv = workSheetsFromFile[1].data;

  testDataMakeResv.forEach((row, rowNumber) => {
    describe(`test row ${rowNumber}`, () => {
      if (!rowNumber || !row[0]) {
        return;
      }

      makeResvFunc(row, rowNumber);
    });
  });

  after(() => driver.quit());
});
