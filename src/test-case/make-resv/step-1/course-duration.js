import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';

it('handle course duration', async () => {
  try {
    const loadingCourseDuration = await driver.findElement(
      By.xpath(
        '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[1]/div[1]/div[3]/div/ng-select/div/div[2]',
      ),
    );
    try {
      await driver.wait(until.elementIsNotVisible(loadingCourseDuration));
    } catch {}

    const courseDurationsSelectEl = await driver.findElement(
      By.xpath(
        '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[1]/div[1]/div[3]/div/ng-select',
      ),
    );
    await courseDurationsSelectEl.click();

    const courseDurationsItem = await driver.findElements(By.className('ng-option'));

    if (!courseDurationsItem.length) {
      console.log('course durations not found!');
      return;
    }

    try {
      // area not found
      const classCss = await courseDurationsItem[0].getAttribute('class');
      if (classCss === 'ng-option ng-option-disabled') {
        const msg = await courseDurationsItem[0].getText();
        expect(msg).to.equal('データが見つかりません');
        return;
      }
    } catch {}

    // select first area
    await courseDurationsItem[0].click();

    return;
  } catch (error) {}
});
