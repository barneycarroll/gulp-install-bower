var bower   = require( 'bower' );
var gulp    = require( 'gulp' );
var install = require( 'gulp-install' );


gulp.task( 'default', function(){
	return gulp.src( './bower.json' )
		.pipe( install() );
} );
