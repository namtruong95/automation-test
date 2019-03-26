import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';

const registerInStep3 = () => {
  it('step 3 register', async () => {
    try {
      const redirectRegisterEl = await driver.findElement(
        By.xpath(
          `/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step3/div/div/div[2]/div/a[2]`,
        ),
      );

      await driver.wait(until.elementIsVisible(redirectRegisterEl));

      redirectRegisterEl.click();

      await driver.wait(until.urlIs('https://sod.bla-one.net/ja/resv/make/step3/register'));

      await driver.findElement(By.name('email')).sendKeys('example1@yopmail.com', Key.RETURN);
      await driver.findElement(By.name('password')).sendKeys('abcd1234', Key.RETURN);
      await driver.findElement(By.name('name')).sendKeys('example 1', Key.RETURN);
      await driver.findElement(By.name('phone')).sendKeys('0359802857', Key.RETURN);
      const acceptPolicyEl = await driver.findElement(
        By.xpath(
          '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step3-register/div/div/form/div/div[2]/div/div[3]/div[7]/div/label',
        ),
      );

      await acceptPolicyEl.click();
      const submitBtnEl = await driver.findElement(
        By.xpath(
          '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step3-register/div/div/form/div/div[2]/div/div[3]/div[10]/div/div/button[1]',
        ),
      );
      await driver.wait(until.elementIsEnabled(submitBtnEl));

      await submitBtnEl.click();

      try {
        await driver.wait(until.urlIs('https://sod.bla-one.net/ja/resv/make/step3'), 1000);

        return;
      } catch {}

      const backBtnEl = await driver.findElement(
        By.xpath(
          '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step3-register/div/div/form/div/div[2]/div/div[3]/div[10]/div/div/button[2]',
        ),
      );
      await driver.wait(until.elementIsEnabled(backBtnEl));

      await backBtnEl.click();

      await driver.wait(until.urlIs('https://sod.bla-one.net/ja/resv/make/step3'));
      return;
    } catch (error) {}
  });
};

export default registerInStep3;
