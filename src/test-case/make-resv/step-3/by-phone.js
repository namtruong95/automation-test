import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';
import promiseDelay from '../../../commons/promise-delay';

const makeResvByPhone = (data) => {
  it('make resv by phone', async () => {
    if (!data) {
      return;
    }

    await promiseDelay(1000);

    try {
      const phoneInputEl = await driver.findElement(
        By.xpath(
          `/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step3/div/div/div[2]/div/div[2]/div/input`,
        ),
      );

      await driver.wait(until.elementIsVisible(phoneInputEl), 1000);

      await phoneInputEl.sendKeys(data, Key.RETURN);
    } catch (error) {
      return;
    }

    try {
      const btnSendCodeEl = await driver.findElement(
        By.xpath(
          '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step3/div/div/div[2]/div/button[1]',
        ),
      );

      await driver.wait(until.elementIsEnabled(btnSendCodeEl), 1000);

      await btnSendCodeEl.click();

      await driver.wait(until.elementIsEnabled(btnSendCodeEl), 3000);
    } catch {}

    await promiseDelay(500);

    const modalEnterCodeEl = await driver.findElement(By.tagName('modal-container'));

    await driver.wait(until.elementIsNotVisible(modalEnterCodeEl), 3000);

    return;
  });
};

export default makeResvByPhone;
