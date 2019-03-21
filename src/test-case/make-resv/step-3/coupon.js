import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';

it('handle coupon', async () => {
  try {
    const loadingCoupon = await driver.findElement(
      By.xpath(
        '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step3/div/div/form/div[1]/div/div[2]/div/ng-select/div/div[2]',
      ),
    );
    try {
      await driver.wait(until.elementIsNotVisible(loadingCoupon));
    } catch {}

    const couponSelectEl = await driver.findElement(
      By.xpath(
        '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step3/div/div/form/div[1]/div/div[2]/div/ng-select',
      ),
    );
    await couponSelectEl.click();

    const couponsItem = await driver.findElements(By.className('ng-option'));

    if (!couponsItem.length) {
      console.log('coupons not found!');
      return;
    }

    try {
      // coupon not found
      const classCss = await couponsItem[0].getAttribute('class');
      if (classCss === 'ng-option ng-option-disabled') {
        const msg = await couponsItem[0].getText();
        expect(msg).to.equal('データが見つかりません');
        return;
      }
    } catch {}

    // select first coupon
    await couponsItem[0].click();
    return;
  } catch (error) {}
});
