import { By, until } from 'selenium-webdriver';
import driver from '../../commons/driver';
import promiseDelay from '../../commons/promise-delay';

const logout = () => {
  it('logout', async () => {
    try {
      const openMenuBtn = await driver.findElement(By.xpath('//*[@id="nav-icon2"]'));

      await openMenuBtn.click();

      await promiseDelay(500);

      const logoutBtn = await driver.findElement(By.xpath('//*[@id="navbarNavDropdown"]/ul/li[9]/a'));
      await logoutBtn.click();

      await promiseDelay(500);

      const btnOK = await driver.findElement(By.xpath('/html/body/modal-container/div/div/div[3]/div/div[1]/button'));

      await btnOK.click();

      await driver.wait(until.urlIs('https://sod.bla-one.net/ja/login'), 3000);

      return;
    } catch (error) {}
  });
};

export default logout;
