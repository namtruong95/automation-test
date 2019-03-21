import importTestCase from '../commons/import-testcase';

Promise.all([
  importTestCase('', '../test-case/login/login-fail'),
  importTestCase('', '../test-case/login/login-success'),
]);
