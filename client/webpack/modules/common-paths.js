const path = require('path');

module.exports = {
  src: './client/',
  templates: './client/templates/',
  templateEntry: './client/templates/index.handlebars',
  templatePartials: './client/templates/partials/',
  templateLayouts: './client/templates/layouts/',
  templatePages: './client/templates/pages/',
  appEntry: './client/index.js',
  outputPath: path.resolve(__dirname, '../../dist'),
  dist: './dist',
};
