exports.task = {
  misc: {       
    expand: true,
    cwd: '<%= path.source %>/<%= path.misc %>',
    src: '**/*',
    dest: '<%= path.build %>', 
    dot: true 
  },
  components: {
    expand: true,
    flatten: true,
    cwd: '<%= path.source %>/<%= path.components %>',
    src: '**/*.js',
    dest: '<%= path.build %>/<%= path.scripts %>/<%= path.components %>', 
  }
};