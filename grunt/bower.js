exports.task = {
  build: {
    options: {
      targetDir: '<%= path.source %>/<%= path.components %>',
      layout: 'byType',
      install: true,
      verbose: false,
      cleanTargetDir: true,
      cleanBowerDir: true,
      bowerOptions: {}
    }
  }
};