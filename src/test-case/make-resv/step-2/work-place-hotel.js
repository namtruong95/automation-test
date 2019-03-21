import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';
import promiseDelay from '../../../commons/promise-delay';

it('handle work place hotel', async () => {
  try {
    const workPlaceEl = await driver.findElement(
      By.xpath(
        `/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step2/div/div/form/div[1]/div[1]/div/div[2]/div/div[2]/label[1]`,
      ),
    );
    workPlaceEl.click();

    // enter hotel information
    // open collapse
    await promiseDelay(500);

    const collapseEl = await driver.findElement(
      By.xpath(
        '/html/body/sod-user-root/sod-user-pages/div/sod-user-make-resv-container/sod-user-make-resv-global/div/div[2]/sod-user-make-resv-step2/div/div/form/div[1]/div[1]/div/div[3]/a',
      ),
    );
    try {
      await driver.wait(until.elementIsVisible(collapseEl));
    } catch {}

    collapseEl.click();
    const hotelForm = await driver.findElement(By.xpath('//*[@id="collapseInputHotel"]'));

    try {
      await driver.wait(until.elementIsVisible(hotelForm));
    } catch {}
    const hotelNameEl = await driver.findElement(By.name('hotel_name'));
    await driver.wait(until.elementIsVisible(hotelNameEl));
    await hotelNameEl.sendKeys('khach san 5 sao', Key.RETURN);

    const hotelRoomEl = await driver.findElement(By.name('hotel_room_number'));
    await driver.wait(until.elementIsVisible(hotelRoomEl));
    await hotelRoomEl.sendKeys('1000000', Key.RETURN);

    return;
  } catch (error) {}
});
