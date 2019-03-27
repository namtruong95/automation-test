import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';
import promiseDelay from '../../../commons/promise-delay';

const changeResvName = (data) => {
  it('handle resv name', async () => {
    if (!data) {
      return;
    }

    await promiseDelay(2000);

    const inputResvNameEl = await driver.findElement(By.name('resv_name'));

    try {
      await driver.wait(until.elementIsVisible(inputResvNameEl), 1000);
    } catch {}

    await inputResvNameEl.clear();
    await inputResvNameEl.sendKeys(data, Key.RETURN);
    return;
  });
};

export default changeResvName;
