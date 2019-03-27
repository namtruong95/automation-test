import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../commons/driver';

const castListFunc = (row) => {
  it('change cast', async () => {
    if (!row || !row[0]) {
      return;
    }

    const castNumber = row[0];

    await driver.get('https://sod.bla-one.net/ja/casts');

    try {
      const loading = await driver.findElement(
        By.xpath('/html/body/sod-user-root/sod-user-cast/div/div[2]/div/div/div'),
      );

      await driver.wait(until.elementIsNotVisible(loading), 1000);
    } catch {}

    try {
      const castNotFound = await driver.findElement(
        By.xpath('/html/body/sod-user-root/sod-user-cast/div/div[2]/div/div/p'),
      );

      const msg = await castNotFound.getText();
      expect(msg).to.equal('出勤予定のキャストがまだいません');
      return;
    } catch {}

    // select cast
    const cast = await driver.findElement(
      By.xpath(`/html/body/sod-user-root/sod-user-cast/div/div[2]/div/div[1]/div[${castNumber}]`),
    );
    await cast.click();
    await driver.wait(until.urlIs('https://sod.bla-one.net/ja/resv/make/step1'));

    return;
  });
};

export default castListFunc;
