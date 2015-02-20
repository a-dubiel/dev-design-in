exports.task = {
  options: {
    csslintrc: '.csslintrc',
    formatters: [
    {
      id: 'csslint-xml',
      dest: 'reports/css-report.xml'
    }
    ]
  },
  build: {
    src: '<%= path.build %>/<%= path.styles %>/*.css'
  }
};