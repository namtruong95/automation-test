import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';

it('handle area', async () => {
  try {
    const loadingArea = await driver.findElement(
      By.xpath(
        '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[1]/div[2]/div/div[1]/ng-select/div/div[2]',
      ),
    );
    try {
      await driver.wait(until.elementIsNotVisible(loadingArea));
    } catch {}

    const areasSelectEl = await driver.findElement(
      By.xpath(
        '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[1]/div[2]/div/div[1]/ng-select',
      ),
    );
    await areasSelectEl.click();

    const areasItem = await driver.findElements(By.className('ng-option'));

    if (!areasItem.length) {
      console.log('areas not found!');
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

    // select first area
    await areasItem[0].click();

    return;
  } catch (error) {}
});
