import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';

const changeMethodPoint = () => {
  it('handle payment method point', async () => {
    try {
      const paymentMethodEl = await driver.findElement(
        By.xpath(
          `/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step2/div/div/form/div[1]/div[1]/div/div[1]/div/div[2]/label[1]`,
        ),
      );
      paymentMethodEl.click();

      return;
    } catch (error) {}
  });
};

export default changeMethodPoint;
