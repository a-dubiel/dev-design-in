exports.task = {
  options: {
    report: 'min',
    banner: '<%= banner.compressed %>'
  },
  build: {
    files: [{
      expand: true,
      cwd: '<%= path.build %>/<%= path.scripts %>',
      src: ['app.js'], 
      dest: '<%= path.build %>/<%= path.scripts %>',
      ext: '.min.js',
    }]
  }
};