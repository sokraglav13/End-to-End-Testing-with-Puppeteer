
![project_tools](https://github.com/user-attachments/assets/92b30dde-90bd-4c4c-8592-4776456bbfaa)

# Automation-Testing-with-Puppeteer  [![CI Pipeline](https://github.com/godpower13/Test-Challeng-Project/workflows/CI%20Pipeline/badge.svg)](https://github.com/godpower13/Test-Challeng-Project/actions?query=workflow%3A%22CI+Pipeline%22)

This project is focused on automating end-to-end testing and ensuring code quality for a web application. It uses Puppeteer to automate browser interactions, allowing for seamless testing of user interfaces and web page behaviors. The implementation follows the Page Object Model (POM) design pattern, which organizes the Web Elements and Pages for better maintainability and scalability. A custom Logging system is used to provide clear, detailed feedback during test execution. ESLint ensures that the codebase is consistently clean and free of common issues through static code analysis. Additionally, the project incorporates video recording to capture each test session, aiding in the debugging process by providing visual evidence of test behavior. Allure is used to generate comprehensive reports after each test run, offering insights into test results with detailed breakdowns. Finally, the project is integrated with a CI/CD pipeline, which runs automated tests and reports on every commit, ensuring continuous feedback and maintaining high code quality standards throughout the development process.

# Capabilities

- **Browser Automation**: Automates browser actions for end-to-end testing.
- **Logger**: Tracks and logs test execution for easy debugging.
- **Static Analysis**: Ensures code quality with static analysis.
- **Video Recording**: Records test sessions to help debug failures.
- **Reports**: Generates detailed test reports for each test run.
- **CI/CD Integration**: Runs tests and generates reports on every commit.

# Tools

- **Puppeteer**: A Node.js library that automates browser actions for web testing.
- **Puppeteer-screen-recorder**: Captures videos of browser sessions during Puppeteer tests for debugging purposes.
- **Winston**: A versatile logging library used to capture logs for tracking and troubleshooting test executions.
- **ESLint**: A static code analysis tool that enforces coding standards and catches potential errors in JavaScript code.
- **Mocha**: A feature-rich testing framework for running tests cases.
- **Allure Commandline**: A tool that generates detailed test reports with insights on test results, failures, and history.

# Configurations

In `config.js` file you can modify the configuration of the project :
- `headless` : Executing test with GUI (false) or not (true)
- `slowMo` : Change the commands execution time 
- `baseUrl` : Specify the url for testing
- `timeoutTest` : Sets the test execution time
- `commandsTimeout` : Sets the commands timeout

# Available scripts to run locally

In terminal click the below command:
- `npm run lint` : This command runs a static analysis procedure to identify any code issues
- `npm run test` : This command executes all tests cases serially
- `npm run test-reporter` : This command executes all test cases in parallel and generates a report
- `npm run generate-report` : This command generates a server to serve the report in browser

# CI/CD Integration

This project integrates a CI/CD pipeline that automatically runs tests every time code is pushed to the repository. The test results are then published to GitHub Pages, providing easy access to the reports. Additionally, the pipeline maintains a history of all test executions, allowing for tracking of performance and progress over time. This ensures continuous validation of the codebase, making the development process more efficient and reliable.

# Test Execution Results

![allure report](https://github.com/user-attachments/assets/ebcf2fea-62e3-4bf7-89fe-0226f90e4b62)

