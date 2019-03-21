import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';

it('step 3 login', async () => {
  try {
    const redirectLoginEl = await driver.findElement(
      By.xpath(
        `/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step3/div/div/div[2]/div/a[1]`,
      ),
    );

    await driver.wait(until.elementIsVisible(redirectLoginEl));

    redirectLoginEl.click();

    await driver.wait(until.urlIs('https://sod.bla-one.net/ja/resv/make/step3/login'));

    await driver.findElement(By.name('email')).sendKeys('example1@yopmail.com', Key.RETURN);
    await driver.findElement(By.name('password')).sendKeys('abcd1234', Key.RETURN);

    await driver.wait(until.urlIs('https://sod.bla-one.net/ja/resv/make/step3'), 1000);
    return;
  } catch (error) {}
});
