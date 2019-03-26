import { By, until } from 'selenium-webdriver';
import driver from '../../../commons/driver';

const submitStep1Func = () => {
  it('submit step 1', async () => {
    const btnSubmit = await driver.findElement(
      By.xpath(
        '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[3]/div[1]/button',
      ),
    );

    await driver.wait(until.elementIsEnabled(btnSubmit), 3000);
    await btnSubmit.click();
    await driver.wait(until.urlIs('https://sod.bla-one.net/ja/resv/make/step2'));
    return;
  });
};

export default submitStep1Func;
