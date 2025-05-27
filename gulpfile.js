const {src,dest,parallel}=require('gulp');
const uglify=require('gulp-uglify');
const cleanCss=require('gulp-clean-css');
function compressCss(){
    return src('src/style.css')
    .pipe(cleanCss())
    .on('error',(err)=>console.error('css error:',err))
    .pipe(dest('dist'))
}
function compressJs(){
    return src('src/script.js')
   .pipe(uglify())
    .on('error',(err)=>console.error('js error:',err))
    .pipe(dest('dist'))
}
exports.default=parallel(compressCss,compressJs);