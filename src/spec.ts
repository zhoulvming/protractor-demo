import { Baidu } from './page';

describe('Baidu Test Search', function () {
    it('Test input search', async function () {

        let baidu = new Baidu();
        await baidu.open();

        await baidu.getSeachInput().sendKeys('protractor');

        await baidu.getSubmitBtn().click();


        let results = await baidu.getResults();
        let firstResult = await results[0].getText();
        expect(firstResult).toBe('Protractor - end-to-end testing for AngularJS');
    });
});
