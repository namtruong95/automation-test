const { Builder, By, until, Key } = require('selenium-webdriver');
const { expect } = require('chai');

describe('UserLogin',  () => {
  const driver = new Builder().forBrowser('chrome').build();

  it('user login faild', async () => {
    await driver.get('https://sod.bla-one.net');

    const titleLogin = await driver.getTitle();
    expect(titleLogin).to.equal('kakaka | Login');

    await driver.findElement(By.name('email')).sendKeys('example1@yopmail.com', Key.RETURN);
    await driver.findElement(By.name('password')).sendKeys('abcd1234121212', Key.RETURN);
    const btnSubmit = await driver.findElement(By.className('btn sod-btn sod-btn--bg-pink w-100'));
    await driver.wait(until.elementIsEnabled(btnSubmit));

    const msg = await driver.findElement(By.className('toast-error')).getText();
    expect(msg).to.equal('メールアドレスまたはパスワードが正しくありません');
    return;
  });

  it('user login success', async () => {
    await driver.get('https://sod.bla-one.net');

    const titleLogin = await driver.getTitle();
    expect(titleLogin).to.equal('kakaka | Login');

    await driver.findElement(By.name('email')).sendKeys('example1@yopmail.com', Key.RETURN);
    await driver.findElement(By.name('password')).sendKeys('abcd1234', Key.RETURN);
    await driver.wait(until.urlIs('https://sod.bla-one.net/ja/home'));

    const titleHome = await driver.getTitle();
    expect(titleHome).to.equal('kakaka | user');
    return;
  });

  it('make resv by user', async () => {
    await driver.get('https://sod.bla-one.net/ja/casts');

    const loading = await driver.findElement(By.xpath('/html/body/sod-user-root/sod-user-cast/div/div[2]/div/div/div'));;

    try {
        await driver.wait(until.elementIsNotVisible(loading));
    } catch (error) {}

    const a = await driver.findElement(By.xpath('/html/body/sod-user-root/sod-user-cast/div/div[2]/div/div[1]/div[1]'));


    await a.click();

    await driver.wait(until.urlIs('https://sod.bla-one.net/ja/resv/make/step1'));

    const loadingArea = await driver.findElement(By.xpath('/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[1]/div[2]/div/div[1]/ng-select/div/div[2]'));
    try {
        await driver.wait(until.elementIsNotVisible(loadingArea))
    } catch (error) {}

    const area = await driver.findElement(By.xpath('/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[1]/div[2]/div/div[1]/ng-select'));
    await area.click();

    const areas = await driver.findElements(By.className('ng-option'));
    await areas[0].click();

    const btnSubmit = await driver.findElement(By.xpath('/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step1/div/form/div[3]/div[1]/button'));
    await driver.wait(until.elementIsEnabled(btnSubmit));

    await btnSubmit.click();
  });

  after(async () => driver.quit());
});
