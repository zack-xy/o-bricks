// execute a test in a worker process
// for use all available CPUs
// Node.js support for "worker threads"
const fs = require('fs')
const { expect } = require('expect')
const mock = require('jest-mock')
// Provide `describe` and `it` to tests
const { describe, it, run, resetState } = require('jest-circus')

exports.runTest = async function (testFile) {
  const code = await fs.promises.readFile(testFile, 'utf-8')

  const testResult = {
    success: false,
    errorMessage: null,
  }

  let testName
  try {
    resetState()
    // ✅ the simple expect
    // const expect = (received) => ({
    //   toBe: (expected) => {
    //     if(received !== expected) {
    //       throw new Error(`Expected ${expected} but received ${received}`)
    //     }
    //     return true
    //   }
    // })

    // ✅ implement of `describe` and `it`
    // const describeFns = []
    // let currentDescribeFn
    // const describe = (name, fn) => describeFns.push([name, fn])
    // const it = (name, fn) => currentDescribeFn.push([name, fn])
    eval(code)
    // Run jest-cirus
    const { testResults } = await run()
    testResult.testResults = testResults
    testResult.success = testResults.every(result => !result.errors.length)

    // for (const [name, fn] of describeFns) {
    //   currentDescribeFn = []
    //   testName = name
    //   fn()

    //   currentDescribeFn.forEach(([name, fn]) => {
    //     testName += '  ' + name
    //     fn()
    //   })
    // }
    testResult.success = true
  }
  catch (error) {
    testResult.errorMessage = `${testName}: ${error.message}`
  }
  return testResult

  // return `worker id: ${process.env.JEST_WORKER_ID}\nfile: ${testFile}:\n${code}`
}
