const importTestCase = require('./src/commons/import-testcase');
const driver = require('./src/commons/driver');

describe('test user', () => {
  importTestCase('login', '../test-suite/login');
  importTestCase('make resv', '../test-suite/make-resv');

  after(() => driver.quit());
});
