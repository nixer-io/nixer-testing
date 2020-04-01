var runner = require('./test-runner');
var argv = require('yargs').argv;

runner.run({
    name: 'test-bruteforce',
    dataFile: './test-bruteforce.data.csv',
    reporter: argv.reporter
});
