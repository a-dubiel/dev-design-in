exports.task = {
  options: {
    report: 'min',
    banner: '<%= banner.compressed %>'
  },
  build: {
    expand: true,
    cwd: '<%= path.build %>',
    src: '<%= path.styles %>/app.css',
    dest: '<%= path.build %>',
    extDot: 'last',
    ext: '.min.css'
  }
};