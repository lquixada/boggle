var tests = [];

for (var file in window.__karma__.files) {
    if (/spec\.js$/.test(file)) {
        tests.push(file);
    }
}


requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base',

    paths: {
      'jquery': 'vendor/jquery-2.1.4.min',
      'jquery.knob': 'vendor/jquery.knob.min',
      'underscore': 'vendor/underscore-min'
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
