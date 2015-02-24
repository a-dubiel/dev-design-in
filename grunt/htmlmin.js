exports.task = {                                    
  build: {                                      
    options: {                                 
      removeComments: true,
      collapseWhitespace: true
    },
    files: {                                   
      '<%= path.build %>/index.html': '<%= path.source %>/<%= path.views %>/index.html',
      '<%= path.build %>/<%= path.views %>/grid.html': '<%= path.source %>/<%= path.views %>/grid.html', 
      '<%= path.build %>/<%= path.views %>/nav.html': '<%= path.source %>/<%= path.views %>/nav.html',     
    }
  }
};