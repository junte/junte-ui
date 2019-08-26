import * as fs from 'fs';
import * as gulp from 'gulp';
import * as consolidate from 'gulp-consolidate';
import * as debug from 'gulp-debug';
import * as iconfont from 'gulp-iconfont';
import * as rename from 'gulp-rename';
import { Gulpclass, SequenceTask, Task } from 'gulpclass';
import 'reflect-metadata';

const ICONFONT_INFO = 'A config file(iconfont.json) and template for the iconfont creating'
  + 'has been created in the root directory. Set your preferences for the library.';
const CONFIG_NAME = 'iconfont.json';
const TEMPLATE_NAME = 'template.scss';

class Config {
  iconsDir: string = '';
  stylesDir: string = '';
  fontsDir: string = '';
  templateDir: string = '';
  fontName: string = '';
}

@Gulpclass()
export class Gulpfile {

  private check() {
    console.log(fs.existsSync('iconfont/' + CONFIG_NAME));
    return fs.existsSync('iconfont/' + CONFIG_NAME) && fs.existsSync('iconfont/' + TEMPLATE_NAME);
  }

  private read(): Config {
    return JSON.parse(fs.readFileSync('iconfont/' + CONFIG_NAME, 'utf-8'));
  }

  private async create() {
    if (!fs.existsSync('iconfont')) {
      fs.mkdirSync('iconfont');
    }
    fs.writeFileSync('iconfont/' + CONFIG_NAME, JSON.stringify(new Config(), null, 4));
    fs.copyFileSync('node_modules/junte-ui/' + TEMPLATE_NAME, 'iconfont/' + TEMPLATE_NAME);
    console.log('\x1b[31m', ICONFONT_INFO);
  }

  @Task()
  styles() {
    const config: Config = this.read();

    console.log(config);
    return gulp.src([config.iconsDir])
      .pipe(debug())
      .pipe(iconfont({
        fontName: config.fontName,
        prependUnicode: true,
        formats: ['ttf', 'woff', 'svg', 'eot', 'woff2'],
        timestamp: Math.round(Date.now() / 1000),
        normalize: true,
        fontHeight: 1001
      }))
      .on('glyphs', function (glyphs) {
        glyphs.forEach(function (glyph, idx, arr) {
          arr[idx].unicode[0] = glyph.unicode[0].charCodeAt(0).toString(16);
        });
        gulp.src(config.templateDir)
          .pipe(consolidate('lodash', {
            glyphs: glyphs,
            fontName: config.fontName,
            fontPath: '../fonts/icons/',
            className: 'icon'
          }))
          .pipe(rename('icons.scss'))
          .pipe(gulp.dest(config.stylesDir));
      })
      .pipe(gulp.dest(config.fontsDir));
  }

  @Task()
  createConfig() {
    return this.create();
  }


  @SequenceTask()
  build() {
    return this.check() ? ['styles'] : ['createConfig'];
  }
}
