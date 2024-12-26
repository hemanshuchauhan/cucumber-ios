import type { Options } from '@wdio/types'
import path from "path";

export const config: Options.Testrunner = {

    runner: 'local',

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    
    port: 4723,

        specs: [
            path.join(process.cwd(), "./src/features/*.feature")
    ],


    maxInstances: 1,

    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 15 Pro',
        'appium:platformVersion': '17.2',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), "./app/CalculatorTutorial.app")
    }],


    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: [
        ['appium', {
            args: {
                ...{ 'use-plugin': 'appium-dashboard' } as any
            },
            command: 'appium'
        }]
    ],

    framework: 'cucumber',
    
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],

    cucumberOpts: {
        require: [path.join(process.cwd(), "./src/step-definitions/*.ts")],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
}
