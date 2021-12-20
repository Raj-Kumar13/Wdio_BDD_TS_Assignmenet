import report from '@wdio/allure-reporter'
export const addLogs = (logData:string) =>{
    report.addStep(`STEP : ${logData}`)
    console.log(`STEP : ${logData}`)
}