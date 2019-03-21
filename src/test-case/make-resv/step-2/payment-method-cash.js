import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';

it('handle payment method cash', async () => {
  try {
    const paymentMethodEl = await driver.findElement(
      By.xpath(
        `/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step2/div/div/form/div[1]/div[1]/div/div[1]/div/div[2]/label[2]`,
      ),
    );
    paymentMethodEl.click();

    return;
  } catch (error) {}
});
