module.exports = {
    /**Sets the base url for testing */
    baseUrl: "https://www.saucedemo.com/",

    /**Sets the test execution timeout (0 = no timeout) */
    timeoutTest: 0,

    /**Sets the commands timeout */
    commandsTimeout: 40000,

    /**Sets the browser options */
    browserConfigurations: {
        headless: true,
        slowMo: 20,
        args: [
            '--start-fullscreen',
            '--disable-notifications',
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ],
    }
};