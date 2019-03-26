import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';
import promiseDelay from '../../../commons/promise-delay';

const areaFunc = (data) => {
  it('handle area', async () => {
    if (!data) {
      return;
    }

    const elementNumber = +data.substr(0, 1);

    await promiseDelay(1000);

    try {
      const loadingArea = await driver.findElement(
        By.xpath(
          '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[1]/div[2]/div/div[1]/ng-select/div/div[2]',
        ),
      );

      await driver.wait(until.elementIsNotVisible(loadingArea));
    } catch {}

    const areasSelectEl = await driver.findElement(
      By.xpath(
        '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[1]/div[2]/div/div[1]/ng-select',
      ),
    );
    await areasSelectEl.click();
    await promiseDelay(500);

    const areasItem = await driver.findElements(By.className('ng-option'));

    if (!areasItem.length) {
      console.log('areas not found!');
      return;
    }

    if (elementNumber >= areasItem.length) {
      console.log("can't change this area!");
      return;
    }

    try {
      // area not found
      const classCss = await areasItem[0].getAttribute('class');
      if (classCss === 'ng-option ng-option-disabled') {
        const msg = await areasItem[0].getText();
        expect(msg).to.equal('データが見つかりません');
        return;
      }
    } catch {}

    // select area
    await areasItem[elementNumber].click();

    return;
  });
};

export default areaFunc;
