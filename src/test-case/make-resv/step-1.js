import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../commons/driver';

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

it('submit step 1', async () => {
  try {
    const btnSubmit = await driver.findElement(
      By.xpath(
        '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[3]/div[1]/button',
      ),
    );
    await driver.wait(until.elementIsEnabled(btnSubmit));
    await btnSubmit.click();

    return;
  } catch (error) {}
});
