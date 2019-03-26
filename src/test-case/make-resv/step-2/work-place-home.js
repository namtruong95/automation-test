import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';

const changeWorkPlaceHome = () => {
  it('handle work place home', async () => {
    try {
      const workPlaceEl = await driver.findElement(
        By.xpath(
          `/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step2/div/div/form/div[1]/div[1]/div/div[2]/div/div[2]/label[2]`,
        ),
      );
      workPlaceEl.click();

      // enter address
      const addressForm = await driver.findElement(
        By.xpath(
          '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step2/div/div/form/div[1]/div[1]/div/div[4]',
        ),
      );

      try {
        await driver.wait(until.elementIsVisible(addressForm));
      } catch {}

      await driver.findElement(By.name('address')).sendKeys('123 nguyen van linh', Key.RETURN);

      return;
    } catch (error) {}
  });
};

export default changeWorkPlaceHome;
