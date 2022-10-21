require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("selenium tests", function () {
    this.timeout(30_000);

    it("should display result", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("http://localhost:3000/testing/ex1");
            const miles = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
            await miles.sendKeys("20");
            const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
            expect(await result.getAttribute("value")).to.equal("32");
        } finally {
            await driver.quit();
        }
    },)

    it("should display result", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("http://localhost:3000/testing/ex1");
            const kms = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
            await kms.sendKeys("32");
            const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
            expect(await result.getAttribute("value")).to.equal("20");
        } finally {
            await driver.quit();
        }
    },)

    it("should display result", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("http://localhost:3000/testing/ex2");
            for (let i = 0; i < 3; i++) {
                const counter = await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(4)")).click();
            }
            const result = await driver.findElement(By.css("#root > div > div.container > div.input-group > input"));
            expect(await result.getAttribute("value")).to.equal("3");
        } finally {
            await driver.quit();
        }
    },)

    it("should display result", async () => {
            const driver = await new Builder().forBrowser("chrome").build();
            try {
              await driver.get("http://localhost:3000/testing/ex3");
              const search = await driver.findElement(By.id("search-input"));
              await search.sendKeys("Batman");
              await search.sendKeys(Key.ENTER);
              await driver.findElement(By.css("#root > div > div.container > form > div > div > button")).click();
              const result = await driver.findElement(By.css("#root > div > div.container > div.container > div > div:nth-child(1) > div"));
              expect(await result.getText()).to.equal("Batman");
            } finally {
              await driver.quit();
            }
          })
})
