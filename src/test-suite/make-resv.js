const importTestCase = require('../commons/import-testcase');

describe('make resv', () => {
  importTestCase('login success', '../test-case/login/login-success');
  importTestCase('make resv step 1', '../test-case/make-resv/step-1');
});
