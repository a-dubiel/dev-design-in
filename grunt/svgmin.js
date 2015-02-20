exports.task = {
  build: {
    expand: true,
    cwd: '<%= path.source %>/<%= path.images %>/',
    src: '**/*.svg',
    dest: '<%= path.build %>/<%= path.images %>/'
  }
};