const gulp = require('gulp');//configuração do gulp
const sass = require('gulp-sass')(require('sass'));//configuração do sass

function styles(){/*função p/ compilar SASS p/ CSS*/
    return gulp.src('./src/styles/*.scss') /*arquivos fontes*/
    .pipe(sass({ style:'compressed'})) /*encadiar a compilação para os arquivos a serem comprimidos*/
    .pipe(gulp.dest('./dist/css'));/*vamos enviar estes arquivos CSS já comprimidos para a pasta*/
}

exports.default = styles;
exports.watch = function() {/*função para sempre atualizar as alterações do projeto*/
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}

