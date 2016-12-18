module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      'src/**/*.json',
      '!src/**/*.spec.js',
      'test/helpers.js',
      'test/bootstrap.js',
      'test/firebase.js',
      'test/fixtures/**/*',
      'test/stubs/**/*',
      '.env.test'
    ],

    tests: [
      'src/**/*.spec.js',
    ],

    env: {
      type: 'node',
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },

    setup(wallaby) {
      require('./test/helpers');
    },

    testFramework: 'mocha',
  };
};
