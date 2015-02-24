exports.task = {
  options: {
    livereload: true,
  },
  scripts: {
    files: '<%= path.source %>/<%= path.scripts %>/**/*',
    tasks: ['scripts'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['<%= path.source %>/<%= path.styles %>/**/*'],
    tasks: ['styles'],
    options: {
      spawn: false,
    }
  },
  images: {
    files: '<%= path.source %>/<%= path.images %>/**/*.{png,jpg,gif,svg}',
    tasks: ['images'],
    options: {
      spawn: false,
    }
  },
  data:{
    files: '<%= path.source %>/<%= path.data %>/*.json',
    tasks: 'copy:data',
    options: {
      spawn: false
    }
  },  
  html:{
    files: '<%= path.source %>/<%= path.views %>/**/*.html',
    tasks: 'htmlmin',
    options: {
      spawn: false
    }
  }  
};