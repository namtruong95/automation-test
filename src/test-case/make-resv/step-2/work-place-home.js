import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';
import promiseDelay from '../../../commons/promise-delay';

const changeWorkPlaceHome = (data) => {
  it('handle work place home', async () => {
    if (!data) {
      return;
    }
    await promiseDelay(1000);

    const workPlaceEl = await driver.findElement(
      By.xpath(
        `/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step2/div/div/form/div[1]/div[1]/div/div[2]/div/div[2]/label[2]`,
      ),
    );
    workPlaceEl.click();

    try {
      // enter address
      const addressForm = await driver.findElement(
        By.xpath(
          '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step2/div/div/form/div[1]/div[1]/div/div[4]',
        ),
      );

      await driver.wait(until.elementIsVisible(addressForm), 1000);
    } catch {}

    await driver.findElement(By.name('address')).sendKeys(data, Key.RETURN);

    return;
  });
};

export default changeWorkPlaceHome;
