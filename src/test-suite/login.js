import importTestCase from '../commons/import-testcase';

describe('login screen', () => {
  importTestCase('login fail', '../test-case/login/login-fail');
  importTestCase('login success', '../test-case/login/login-success');
});
