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
  },
  components: {
    files: [{
      expand: true,
      cwd: '<%= path.build %>/<%= path.scripts %>/<%= path.components %>',
      src: ['*.js'], 
      dest: '<%= path.build %>/<%= path.scripts %>/<%= path.components %>',
      ext: '.min.js',
    }]
  },
};