'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    rigger = require('gulp-rigger'),
    browserSync = require("browser-sync"),
	less = require('gulp-less'),
    reload = browserSync.reload;

	var reload = browserSync.reload;
	


var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/'
    },
    src: { //Пути откуда брать исходники
        html: 'dev/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'dev/js/*.js',//В стилях и скриптах нам понадобятся только main файлы
        style: 'dev/less/style.less'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'dev/**/*.html',
        js: 'dev/js/*.js',
        style: 'dev/less/*.less'
    }
};




gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "build/"
    }
  });
});

gulp.task('less', function () {
  return gulp.src(path.src.style) 
    .pipe(less())
    .pipe(gulp.dest(path.build.css))
	.pipe(reload({stream:true}));
});

gulp.task('html:build', function () {
    gulp.src(path.src.html) //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
        .pipe(reload({stream:true})); //И перезагрузим наш сервер для обновлений
});

  gulp.task('watcher',function(){
    gulp.watch(path.watch.html, ['html:build']);
    gulp.watch(path.watch.style, ['less']);
});
gulp.task('default', ['watcher', 'browserSync']);