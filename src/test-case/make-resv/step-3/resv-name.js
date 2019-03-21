import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';

it('handle resv name', async () => {
  try {
    const inputResvNameEl = await driver.findElement(By.name('resv_name'));

    try {
      await driver.wait(until.elementIsVisible(inputResvNameEl), 1000);
    } catch {}

    await inputResvNameEl.sendKeys('resv name', Key.RETURN);

    return;
  } catch (error) {}
});
