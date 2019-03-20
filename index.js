import importTestCase from './src/commons/import-testcase';
import driver from './src/commons/driver';

describe('test user', () => {
  importTestCase('login', '../test-suite/login');
  importTestCase('make resv', '../test-suite/make-resv');

  after(() => driver.quit());
});
