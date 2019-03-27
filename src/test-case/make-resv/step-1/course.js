import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';
import promiseDelay from '../../../commons/promise-delay';

const courseFunc = (data) => {
  it('handle course', async () => {
    if (!data) {
      return;
    }

    const elementNumber = +data.substr(0, 1);

    await promiseDelay(1000);

    try {
      const loadingCourse = await driver.findElement(
        By.xpath(
          '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[1]/div[1]/div[2]/div/ng-select/div/div[2]',
        ),
      );

      await driver.wait(until.elementIsNotVisible(loadingCourse), 1000);
    } catch {}

    const coursesSelectEl = await driver.findElement(
      By.xpath(
        '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[1]/div[1]/div[2]/div/ng-select',
      ),
    );
    await coursesSelectEl.click();
    await promiseDelay(500);

    const coursesItem = await driver.findElements(By.className('ng-option'));

    if (!coursesItem.length || elementNumber >= coursesItem.length) {
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
    await coursesItem[elementNumber].click();
    return;
  });
};

export default courseFunc;
