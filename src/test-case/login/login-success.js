import { expect } from 'chai';
import { By, Key, until } from 'selenium-webdriver';
import driver from '../../commons/driver';

const loginSuccess = (data) => {
  it('success', async () => {
    if (global.isAuth) {
      return;
    }
    await driver.get('https://sod.bla-one.net/login');

    const titleLogin = await driver.getTitle();
    expect(titleLogin).to.equal('kakaka | Login');

    await driver.findElement(By.name('email')).sendKeys(data.email, Key.RETURN);
    await driver.findElement(By.name('password')).sendKeys(data.password, Key.RETURN);
    await driver.wait(until.urlIs('https://sod.bla-one.net/ja/home'));

    global.isAuth = true;

    const titleHome = await driver.getTitle();
    expect(titleHome).to.equal('kakaka | user');
    return;
  });
};

export default loginSuccess;
