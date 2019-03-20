import { By, until } from 'selenium-webdriver';
import driver from '../../commons/driver';

it('cast list', async () => {
  await driver.get('https://sod.bla-one.net/ja/casts');

  const loading = await driver.findElement(By.xpath('/html/body/sod-user-root/sod-user-cast/div/div[2]/div/div/div'));

  try {
    await driver.wait(until.elementIsNotVisible(loading));
  } catch (error) {}

  const a = await driver.findElement(By.xpath('/html/body/sod-user-root/sod-user-cast/div/div[2]/div/div[1]/div[1]'));

  await a.click();

  await driver.wait(until.urlIs('https://sod.bla-one.net/ja/resv/make/step1'));

  const loadingArea = await driver.findElement(
    By.xpath(
      '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[1]/div[2]/div/div[1]/ng-select/div/div[2]',
    ),
  );
  try {
    await driver.wait(until.elementIsNotVisible(loadingArea));
  } catch (error) {}

  const area = await driver.findElement(
    By.xpath(
      '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[1]/div[2]/div/div[1]/ng-select',
    ),
  );
  await area.click();

  const areas = await driver.findElements(By.className('ng-option'));
  await areas[0].click();

  const btnSubmit = await driver.findElement(
    By.xpath(
      '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[3]/div[1]/button',
    ),
  );
  await driver.wait(until.elementIsEnabled(btnSubmit));

  await btnSubmit.click();
});
