var Metalsmith  = require('metalsmith'),
    sass = require('metalsmith-sass'),
    markdown    = require('metalsmith-markdown'),
    layouts     = require('metalsmith-layouts'),
    permalinks  = require('metalsmith-permalinks');


Metalsmith(__dirname)
    .metadata({
      title: "foolord.com",
      description: "Payton Swick, the one and only.",
      generator: "Metalsmith",
      url: "http://www.metalsmith.io/"
    })
    .source('./src')
    .destination('./build')
    .clean(true)
    .use(sass({
        outputDir: 'css/'   // This changes the output dir to "build/css/" instead of "build/scss/"
    }))
    .use(markdown())
    .use(permalinks())
    .use(layouts({
      engine: 'handlebars',
    }))
    .build(function(err, files) {
        if (err) { throw err; }
    });
