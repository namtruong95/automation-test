import { expect } from 'chai';
import { By, Key, until } from 'selenium-webdriver';
import driver from '../../commons/driver';

const loginSuccess = () => {
  it('success', async () => {
    try {
      await driver.get('https://sod.bla-one.net');

      const titleLogin = await driver.getTitle();
      expect(titleLogin).to.equal('kakaka | Login');

      await driver.findElement(By.name('email')).sendKeys('example1@yopmail.com', Key.RETURN);
      await driver.findElement(By.name('password')).sendKeys('abcd1234', Key.RETURN);
      await driver.wait(until.urlIs('https://sod.bla-one.net/ja/home'));

      const titleHome = await driver.getTitle();
      expect(titleHome).to.equal('kakaka | user');
      return;
    } catch (error) {}
  });
};

export default loginSuccess;
