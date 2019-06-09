module.exports = function(grunt){
    
    grunt.initConfig({
      concat: {
        js: {
          src: ['assets/js/jquery.min.js', 'assets/js/modernizr.min.js', 'assets/js/bootstrap/bootstrap.min.js', 'assets/js/bootstrap/popper.min.js', 'assets/js/slick/slick.min.js', 'assets/js/jquery.meanmenu.js', 'assets/js/jquery.magnific-popup.min.js', 'assets/js/wow.min.js', 'assets/js/idle-script.js'],
          dest: 'build/js/scripts.js',  
        },
        css: {
          src: ['assets/css/bootstrap/bootstrap.min.css', 'assets/css/animate.css', 'assets/css/meanmenu.css','assets/css/slick/slick.css','assets/css/slick/slick-theme.css','assets/css/site.css','assets/css/idle-styles.css','assets/css/responsive.css'],
          dest: 'build/css/styles.css',
        },
      },
      watch: {
      js: {
        files: ['assets/js/*.js'],
        tasks: ['concat'],
      },
      css: {
        files: ['assets/css/*.css'],
        tasks: ['concat'],
      },
    },
    
//above this    
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['concat','watch']);
}