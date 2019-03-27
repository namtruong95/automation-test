import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import driver from '../../../commons/driver';
import promiseDelay from '../../../commons/promise-delay';

const changeWorkPlaceHotel = (data) => {
  it('handle work place hotel', async () => {
    if (!data) {
      return;
    }
    await promiseDelay(1000);

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
      await driver.wait(until.elementIsVisible(collapseEl), 1000);
    } catch {}

    collapseEl.click();
    const hotelForm = await driver.findElement(By.xpath('//*[@id="collapseInputHotel"]'));

    try {
      await driver.wait(until.elementIsVisible(hotelForm), 1000);
    } catch {}
    const hotelNameEl = await driver.findElement(By.name('hotel_name'));
    await driver.wait(until.elementIsVisible(hotelNameEl), 1000);
    await hotelNameEl.sendKeys(data.hotelName, Key.RETURN);

    const hotelRoomEl = await driver.findElement(By.name('hotel_room_number'));
    await driver.wait(until.elementIsVisible(hotelRoomEl), 1000);
    await hotelRoomEl.sendKeys(data.roomNumber, Key.RETURN);

    return;
  });
};

export default changeWorkPlaceHotel;
