exports.task = {
  build: {
    expand: true,
    cwd: '<%= path.build %>',
    src: '<%= path.styles %>/**/*.css',
    dest: '<%= path.build %>'
  }
};