#!/usr/bin/env node
var program = require('commander');
var gallery = require('./gallery');

program
  .version(require('./package.json').version)
  .option('-s, --sort <value>', 'time | viral | top', /^time|viral|top$/i)
  .option('-w, --window <value>', 'Change the date range of the request if the sort is \'top\', day | week | month | year | all', /^day|week|month|year|all$/i)
  .option('-p, --page <value>', 'the data paging number')
  .option('-a, --all <terms>', 'Search for all of these words')
  .option('-y, --any <terms>', 'Search for any of these words')
  .option('-e, --exactly <phrase>', 'Search for exactly this word or phrase')
  .option('-n, --not <terms>', 'Exclude results matching this')
  .option('-t, --type <type>', 'Show results for any file type, jpg | png | gif | anigif (animated gif) | album', /^(jpg|png|gif|anigif|album)$/i)
  .option('-z, --size <size>', 'Size ranges, small (500 pixels square or less) | med (500 to 2,000 pixels square) | big (2,000 to 5,000 pixels square) | lrg (5,000 to 10,000 pixels square) | huge (10,000 square pixels and above)', /^(small|med|big|lrg|huge)$/i)
  .parse(process.argv);

if (typeof program.sort != 'string') {
  delete program.sort;
}
if (typeof program.window != 'window') {
  delete program.window;
}
if (typeof program.size != 'string') {
  delete program.size;
}
if (typeof program.type != 'string') {
  delete program.type;
}
var queryOptions = {
  sort: program.sort,
  window: program.window,
  page: program.page,
  all: program.all,
  any: program.any,
  exactly: program.exactly,
  not: program.not,
  type: program.type,
  size: program.size
};

gallery.search(queryOptions, function(error, data) {
  if (error) { console.log(error); }
  else if (data.length === 0) {
    console.log('no results!');
  }
  else {
    data.forEach(function(datum) {
      console.log(datum.link);
    });
  }
});
