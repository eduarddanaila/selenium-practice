require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("selenium tests", function () {
    this.timeout(30_000);

    it("should display result", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("http://automationpractice.com/index.php");
            const search = await driver.findElement(By.id("search_query_top"));
            await search.sendKeys("blouse");
            await search.sendKeys(Key.ENTER);
            await driver.findElement(By.css("#searchbox > button")).click();
            const result = await driver.findElement(By.css("#center_column > ul > li > div > div.right-block > h5 > a"));
            expect(await result.getText()).to.equal("Blouse");
        } finally {
            await driver.quit();
        }
},)
})
