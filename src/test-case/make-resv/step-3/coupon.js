import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';
import promiseDelay from '../../../commons/promise-delay';

const changeCoupon = (data) => {
  it('handle coupon', async () => {
    if (!data) {
      return;
    }

    const elementNumber = +data.substr(0, 1);

    await promiseDelay(1000);

    try {
      const loadingCoupon = await driver.findElement(
        By.xpath(
          '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step3/div/div/form/div[1]/div/div[2]/div/ng-select/div/div[2]',
        ),
      );

      await driver.wait(until.elementIsNotVisible(loadingCoupon), 1000);
    } catch {}

    const couponSelectEl = await driver.findElement(
      By.xpath(
        '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step3/div/div/form/div[1]/div/div[2]/div/ng-select',
      ),
    );
    await couponSelectEl.click();
    await promiseDelay(500);

    const couponsItem = await driver.findElements(By.className('ng-option'));

    if (!couponsItem.length) {
      console.log('coupons not found!');
      return;
    }

    if (elementNumber >= couponsItem.length) {
      console.log("can't change this coupon!");
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

    // select coupon
    await couponsItem[elementNumber].click();
    return;
  });
};

export default changeCoupon;
