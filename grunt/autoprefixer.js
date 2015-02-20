exports.task = {
  options: {
    browsers: ['last 2 version']
  },
  build: {
    expand: true,
    flatten: true,
    src: '<%= path.build %>/<%= path.styles %>/*.css',
    dest: '<%= path.build %>/<%= path.styles %>/'
  }
};