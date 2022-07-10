// ✅ Method 1
// use glob to match all test files
// import glob from 'glob'
// const testFiles = glob.sync('**/*.test.js')
// console.log(testFiles)  // ['tests/01.test.js',....]

// ✅ Method 2
// use the package for analyzing and operating on large project
// it will cache of the file system in memory
// only does the minimal amount of work necessary when files changed
// ......
import { cpus } from 'os'
import { dirname, join, relative } from 'path'
import { fileURLToPath } from 'url'
import chalk from 'chalk'

// console.log(testFiles)

// read all of the code in test files
// will create multiple processes and run our code in `worker.js` in parallel using all available CPUs
import { Worker } from 'jest-worker'
import JestHasteMap from 'jest-haste-map'

// Get the root path to our project (Like `__dirname`)
const root = dirname(fileURLToPath(import.meta.url))
const hasteMapOptions = {
  extensions: ['js'], // Tells jest-haste-map to only crawl .js files
  maxWorkers: cpus().length, // Parallelizes across all available CPUs
  name: 'best-test-framework', // Used for caching
  platforms: [], // This is only used for React Native, leave empty
  rootDir: root, // The project root
  roots: [root], // Can be used to only search a subset of files within `rootDir`
}

// Need to use `.default` as of Jest 27
const hasteMap = new JestHasteMap.default(hasteMapOptions)
// This line is only necessary in `jest-haste-map` version 28 or later
await hasteMap.setupCachePath(hasteMapOptions)
// Build and return an in-memory HasteFS ("Haste File System") instance
const { hasteFS } = await hasteMap.build()

// apply a set of globs to the in-memory representation of the file system instead of running actual file system operations
// const testFiles = hasteFS.matchFilesWithGlob(['**/*.test.js'])

// quickly add test filtering via the command line
// eg. node index.mjs mock.test.js
const testFiles = hasteFS.matchFilesWithGlob([
  process.argv[2] ? `**/${process.argv[2]}*` : '**/*.test.js',
])

const worker = new Worker(join(root, 'worker.js'), {
  enableWorkerThreads: true,
})

let hasFailed = false
await Promise.all(
  Array.from(testFiles).map(async (testFile) => {
    const { success, testResults, errorMessage } = await worker.runTest(testFile)
    const status = success
      ? chalk.green.inverse.bold(' PASS ')
      : chalk.red.inverse.bold(' FAIL ')

    console.log(`${status} ${chalk.dim(relative(root, testFile))}`)
    if (!success) {
      hasFailed = true
      // Make use of the rich testResults and error messages
      if (testResults) {
        testResults
          .filter(result => result.errors.length)
          .forEach(result =>
            console.log(
              // Skip the first part of the path which is an internal token
              `${result.testPath.slice(1).join(' ')}\n${result.errors[0]}`,
            ),
          )
          // If the test crashed before `jest-cirus` ran, report it here
      }
      else if (errorMessage) {
        console.log(`  ${errorMessage}`)
      }
    }
  }),
)

worker.end() // Shut down the worker
if (hasFailed) {
  console.log(
    `\n${chalk.red.bold('Test run failed, please fix all the failing tests')}`,
  )
  // Set an exit code to indicate failure
  process.exitCode = 1
}
