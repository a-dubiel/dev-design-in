exports.task = {
  build: {
    files: [{
      expand: true,
      cwd: '<%= path.source %>/<%= path.images %>/',
      src: '**/*.{png,jpg,gif}',
      dest: '<%= path.build %>/<%= path.images %>/'
    }]
  }
};