import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../commons/driver';

it('change cast', async () => {
  try {
    await driver.get('https://sod.bla-one.net/ja/casts');

    const loading = await driver.findElement(By.xpath('/html/body/sod-user-root/sod-user-cast/div/div[2]/div/div/div'));

    try {
      await driver.wait(until.elementIsNotVisible(loading));
    } catch {}

    try {
      const castNotFound = await driver.findElement(
        By.xpath('/html/body/sod-user-root/sod-user-cast/div/div[2]/div/div/p'),
      );

      const msg = await castNotFound.getText();
      expect(msg).to.equal('出勤予定のキャストがまだいません');
      return;
    } catch {}

    // change first cast
    const cast = await driver.findElement(
      By.xpath('/html/body/sod-user-root/sod-user-cast/div/div[2]/div/div[1]/div[2]'),
    );
    await cast.click();
    await driver.wait(until.urlIs('https://sod.bla-one.net/ja/resv/make/step1'));

    return;
  } catch (error) {}
});
