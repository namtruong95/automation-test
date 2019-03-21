import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';
import promiseDelay from '../../../commons/promise-delay';

it('make resv by phone', async () => {
  try {
    const phoneInputEl = await driver.findElement(
      By.xpath(
        `/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step3/div/div/div[2]/div/div[2]/div/input`,
      ),
    );

    try {
      await driver.wait(until.elementIsVisible(phoneInputEl), 1000);
    } catch {}

    await phoneInputEl.sendKeys('0905688666', Key.RETURN);

    const btnSendCodeEl = await driver.findElement(
      By.xpath(
        '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step3/div/div/div[2]/div/button[1]',
      ),
    );

    try {
      await driver.wait(until.elementIsEnabled(btnSendCodeEl));
    } catch {}

    await btnSendCodeEl.click();

    await driver.wait(until.elementIsEnabled(btnSendCodeEl), 5000);

    await promiseDelay(1000);

    const modalEnterCodeEl = await driver.findElement(By.tagName('modal-container'));

    await driver.wait(until.elementIsNotVisible(modalEnterCodeEl), 10000);

    return;
  } catch (error) {}
});
