exports.task = {                                    
  build: {                                      
    options: {                                 
      removeComments: true,
      collapseWhitespace: true
    },
    files: {                                   
      '<%= path.build %>/index.html': '<%= path.source %>/<%= path.views %>/index.html',    
    }
  }
};