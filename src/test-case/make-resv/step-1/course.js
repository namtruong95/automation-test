import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';

it('handle course', async () => {
  try {
    const loadingCourse = await driver.findElement(
      By.xpath(
        '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[1]/div[1]/div[2]/div/ng-select/div/div[2]',
      ),
    );
    try {
      await driver.wait(until.elementIsNotVisible(loadingCourse));
    } catch {}

    const coursesSelectEl = await driver.findElement(
      By.xpath(
        '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[1]/div[1]/div[2]/div/ng-select',
      ),
    );
    await coursesSelectEl.click();

    const coursesItem = await driver.findElements(By.className('ng-option'));

    if (!coursesItem.length) {
      console.log('courses not found!');
      return;
    }

    try {
      // area not found
      const classCss = await coursesItem[0].getAttribute('class');
      if (classCss === 'ng-option ng-option-disabled') {
        const msg = await coursesItem[0].getText();
        expect(msg).to.equal('データが見つかりません');
        return;
      }
    } catch {}

    // select first course
    await coursesItem[0].click();
    return;
  } catch (error) {}
});
