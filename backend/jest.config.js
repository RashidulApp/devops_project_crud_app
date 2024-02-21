module.exports = {
    testEnvironment: 'node', // or specify your desired test environment
    reporters: [
      'default',
      ['jest-junit', { outputDirectory: './test-result/jest', outputName: 'results.xml' }],
    ],
  };
  