module.exports = {
    /**Sets the base url for testing */
    baseUrl: "https://www.saucedemo.com/",

    /**Sets the text execution timeout (0 = no timeout) */
    timeoutTest: 0,

    /**Sets the commands timeout */
    commandsTimeout: 40000,

    /**Sets the browser options */
    browserConfigurations: {
        executablePath: 'C:/testBrowsers/Chrome_V119.0.6045.105/chrome.exe',
        headless: false,
        slowMo: 20,
        args: [
            '--start-fullscreen',
        ]
    }
}