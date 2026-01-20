const gulp = require('gulp');//configuração do gulp
const sass = require('gulp-sass')(require('sass'));//configuração do sass
const imagemin = require('gulp-imagemin');/*plugin de imagens*/

function styles(){/*função p/ compilar SASS p/ CSS*/
    return gulp.src('./src/styles/*.scss') /*arquivos fontes*/
    .pipe(sass({ style:'compressed'})) /*encadiar a compilação para os arquivos a serem comprimidos*/
    .pipe(gulp.dest('./dist/css'));/*vamos enviar estes arquivos CSS já comprimidos para a pasta*/
}

/*função images*/
function images(){/*função p/ compilar SASS p/ CSS*/
    return gulp.src('./src/images/**/*') /*qualquer arquivo que esteja dentro de "images*/
    .pipe(imagemin())/*execução do imagemin*/
    .pipe(gulp.dest('./dist/images'));/*pasta de destino para comprimir*/
}

/*exportar funções*/
exports.default = gulp.parallel(styles, images);/*p/ executar o sistema em paralelo*/

exports.watch = function() {/*função para sempre atualizar as alterações do projeto*/
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}

