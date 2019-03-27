import { By, until } from 'selenium-webdriver';
import driver from '../../../commons/driver';

const submitStep2Func = () => {
  it('submit step 2', async () => {
    const btnSubmit = await driver.findElement(
      By.xpath(
        '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step2/div/div/form/div[2]/div[1]/button',
      ),
    );
    await driver.wait(until.elementIsEnabled(btnSubmit));
    await btnSubmit.click();
    await driver.wait(until.urlIs('https://sod.bla-one.net/ja/resv/make/step3'));
    return;
  });
};

export default submitStep2Func;
