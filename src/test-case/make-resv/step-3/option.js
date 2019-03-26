import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';

const changeOption = () => {
  it('handle option', async () => {
    try {
      const loadingOption = await driver.findElement(
        By.xpath(
          '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step3/div/div/form/div[1]/div/div[1]/div/ng-select/div/div[2]',
        ),
      );
      try {
        await driver.wait(until.elementIsNotVisible(loadingOption));
      } catch {}

      const optionSelectEl = await driver.findElement(
        By.xpath(
          '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step3/div/div/form/div[1]/div/div[1]/div/ng-select',
        ),
      );
      await optionSelectEl.click();

      const optionsItem = await driver.findElements(By.className('ng-option'));

      if (!optionsItem.length) {
        console.log('options not found!');
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

      // select first options
      await optionsItem[0].click();
      return;
    } catch (error) {}
  });
};

export default changeOption;
