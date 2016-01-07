// подключаем переменные  -функции модулей галпа

var cssmin = require('gulp-cssmin');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var symlink = require('gulp-sym');
var fileinclude = require('gulp-file-include');
var concat = require('gulp-concat');
var uncss = require('gulp-uncss');
var watch = require('gulp-watch'); 
var concatCss = require('gulp-concat-css');

gulp.task('minify-js', function ()  // Минимизируем все файлы js. pipe это unix команда, которая разделяет задачи
{
    var a = gulp.src('js/*.js') // задаем начальный каталог
        .pipe(uglify()) // выполняем минимизацию жс файлов
        .pipe(gulp.dest('_build/js')); // задаем выходной каталог
    return a;
});

gulp.task('sass-to-css', function ()  // переводим сасс в цсс и минимизируем 
{
        var a =  gulp.src('scss/*.scss')  //Return позволяет в очереди задач ожидать выполнения конкретной задачи. Можно делать через переменную как показано без коментов.
        .pipe(sass())                    // Или без переменной как в коментах ниже
        .pipe(gulp.dest('css'));	
        return a;                                 
       
        /* return gulp.src('sass/*.scss')   // Или без переменной как в коментах
        .pipe(sass())
        .pipe(gulp.dest('css')); */
	
});

gulp.task('minify-css', ['sass-to-css'], function () // в [] мы пишем порядок выполнения задач, тоесть сначала выполнится задача в [], а затем то что стоит перед этими скобками - в теле функции
{
   var a = gulp.src('css/*.css') 
        .pipe(cssmin())
        .pipe(gulp.dest('_build/css/'));       
   /*var a = gulp.src('css/animatediv/*.css') 
        .pipe(cssmin())
        .pipe(gulp.dest('_build/css/animatediv'));     
    var a =gulp.src('css/animatediv/libs/*.css') 
        .pipe(cssmin())
        .pipe(gulp.dest('_build/css/animatediv/libs'));
    var a =gulp.src('css/buttons/*.css') 
        .pipe(cssmin())
        .pipe(gulp.dest('_build/css/buttons'));
    var a =gulp.src('css/creativeLinkEffects/*.css') 
        .pipe(cssmin())
        .pipe(gulp.dest('_build/css/creativeLinkEffects'));
    var a =gulp.src('css/hover-master/*.css') 
         .pipe(cssmin())
         .pipe(gulp.dest('_build/css/hover-master'));
    var a =gulp.src('css/Icomoon/*.css') 
        .pipe(cssmin())
        .pipe(gulp.dest('_build/css/Icomoon'));*/
 return a; 

});

gulp.task('minify-html', function () // минимизируем хтмл, используя возможные методы
{
    gulp.src('*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
        .pipe(htmlmin(
                        {
                            removeComments:true,
                            removeRedundantAttributes:true, 
                            removeEmptyAttributes:true, 
                            removeIgnored:true,
                            minifyJS:true,
                            minifyCSS:true,
                            collapseWhitespace:true
                        }
                      ))
        .pipe(gulp.dest('_build/'));
});

 
/*gulp.task('symlink', function () //делаем ссылки в собираемом нами проекте, для тех случаев, когда нам нет необходимости что-то делать с файлами/папками, такми как fonts, img
{
    
         gulp.src('css/fonts').pipe(symlink('_build/css/fonts'));
         gulp.src(['img']).pipe(symlink(['_build/img']));
         gulp.src(['fonts']).pipe(symlink(['_build/fonts']));    
});  */


gulp.task('scripts',['minify-js'], function() {  // собираем все дж файлы в один
  return gulp.src(['_build/js/*.js', "!_build/js/wow.min.js"]) 
    .pipe(concat('all.js'))
    .pipe(gulp.dest('_build/js'));  
});

gulp.task('css',['minify-css'], function () {  // собираем все сss файлы в один
  return gulp.src('_build/css/*.css')
    .pipe(concatCss("all.css"))
    .pipe(gulp.dest('_build/css'));
});


/*gulp.task('default' , function() { // метод вотч позволяет в он-лайн режиме(через командную строку в которой выполняем gulp task следить за изменениями, например в папке цсс и тут-же минимизировать их   )

    gulp.watch( 'css/*.css', ['minify-css']);

});*/


gulp.task("all",["minify-js","minify-css","minify-html","scripts","css"/*,"symlink"*/]); // делаем одну общую комнаду для выполнения всех медодов - в командной строке или нетбинсе выполняем gulp all


 


