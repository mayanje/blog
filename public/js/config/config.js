require.config({
    // set paths since they are outside the baseUrl
    paths : {
        hgn : 'lib/hgn',
        text : 'lib/text',
        backbone :'lib/backbone-min',
        jquery : 'lib/jquery-1.9.0.min',
        hogan : 'lib/hogan-2.0.0.amd',
        underscore : 'lib/underscore-min'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jquery': {
            exports: 'jQuery'
        },
        'underscore': {
            exports: '_'
        }
    },
    // configure hgn! plugin
    hgn : {
        // load "*.mustache" files, set to empty string if you
        // want to specify the template extension for each individual file
        // the default value is ".mustache"
        templateExtension : '.mustache',
        templateDir : '../../templates/',

        // if you need to set custom options it can be done through the
        // "compilationOptions" setting, check hogan documentation:
        // https://github.com/twitter/hogan.js#compilation-options
        compilationOptions : {
            // delimiters : '<% %>',
            // sectionTags: [{o: '_foo', c: 'foo'}],
            // disableLambda : true
        }
    }
});
