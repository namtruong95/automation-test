import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';
import promiseDelay from '../../../commons/promise-delay';

const changeOption = (data) => {
  it('handle option', async () => {
    if (!data) {
      return;
    }

    const elementNumber = +data.substr(0, 1);

    await promiseDelay(1000);

    try {
      const loadingOption = await driver.findElement(
        By.xpath(
          '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step3/div/div/form/div[1]/div/div[1]/div/ng-select/div/div[2]',
        ),
      );

      await driver.wait(until.elementIsNotVisible(loadingOption), 1000);
    } catch {}

    const optionSelectEl = await driver.findElement(
      By.xpath(
        '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step3/div/div/form/div[1]/div/div[1]/div/ng-select',
      ),
    );
    await optionSelectEl.click();
    await promiseDelay(500);

    const optionsItem = await driver.findElements(By.className('ng-option'));

    if (!optionsItem.length) {
      console.log('options not found!');
      return;
    }

    if (elementNumber >= optionsItem.length) {
      console.log("can't change this option!");
      return;
    }

    try {
      // option not found
      const classCss = await optionsItem[0].getAttribute('class');
      if (classCss === 'ng-option ng-option-disabled') {
        const msg = await optionsItem[0].getText();
        expect(msg).to.equal('データが見つかりません');
        return;
      }
    } catch {}

    // select options
    await optionsItem[elementNumber].click();
    return;
  });
};

export default changeOption;
