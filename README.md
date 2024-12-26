# cucumber-wdio-ios-framework

## Overview
 Automated testing suite using Appium, WebdriverIO (Typescript) and Cucumber framework to test an iOS caluclator app.
 It uses the appium dashboard plugin for live test exectution view and Allure for reporting.


## Prerequisites
Before setting up the project, ensure you have the following installed:

- Node.js (version 18 or higher)
- NPM (usually comes with Node.js)
- Appium (version 1.21.0 or higher)
- An iOS simulator or real device setup

## Installation

### Clone the Repository

git clone [Repository URL]

cd ios-calculator-tests

### Install Dependencies

npm install

## Set Apps

The iOS calculator app used for testing is in /app folder.


### Prepare Android Device or Emulator

Ensure your device simulator matches the configuration given in the wdio.config.ts. By default app is set to run on  iPhone 15 Pro with iOS 17.2

## Running Tests

To execute the tests, use the following command:
npm run test


## Reporting

To generate allure report, after running the test, run the command: 'npm run allure'

## Dashboard

After triggering the tests, navigate to http://localhost:4723/dashboard to view the dashboard.

