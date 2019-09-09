import * as fs from 'fs';
import * as gulp from 'gulp';
import * as consolidate from 'gulp-consolidate';
import * as debug from 'gulp-debug';
import * as iconfont from 'gulp-iconfont';
import * as rename from 'gulp-rename';
import { Gulpclass, SequenceTask, Task } from 'gulpclass';
import 'reflect-metadata';

const ICONFONT_INFO = 'A config file(iconfont.json) and template for the iconfont creating '
  + 'has been created in the root directory. Set your preferences for the library.';
const CONFIG_NAME = 'iconfont.json';
const TEMPLATE_NAME = 'template';
const TIMESTAMP = 1000;

class FontConfig {
  svgDir = '';
  fontsDir = '';
  fontName = '';
}

@Gulpclass()
export class Gulpfile {

  private check() {
    return fs.existsSync('iconfont/' + CONFIG_NAME) && fs.existsSync('iconfont/' + TEMPLATE_NAME);
  }

  private read(): FontConfig[] {
    return JSON.parse(fs.readFileSync('iconfont/' + CONFIG_NAME, 'utf-8'));
  }

  private async create() {
    if (!fs.existsSync('iconfont')) {
      fs.mkdirSync('iconfont');
    }
    fs.writeFileSync('iconfont/' + CONFIG_NAME, JSON.stringify([new FontConfig()], null, 4));
    fs.copyFileSync('node_modules/junte-ui/' + TEMPLATE_NAME, 'iconfont/' + TEMPLATE_NAME);
    console.log('\x1b[31m', ICONFONT_INFO);
  }

  @Task()
  styles(cb) {
    const fonts: FontConfig[] = this.read();
    fonts.forEach(font => {
      gulp.src([`${font.svgDir}/*.svg`])
        .pipe(debug())
        .pipe(iconfont({
          fontName: font.fontName,
          prependUnicode: true,
          formats: ['ttf', 'woff', 'svg', 'eot', 'woff2'],
          timestamp: Math.round(Date.now() / TIMESTAMP),
          normalize: true,
          fontHeight: 1001
        }))
        .on('glyphs', function (glyphs) {
          glyphs.forEach(function (glyph, idx, arr) {
            arr[idx].unicode[0] = glyph.unicode[0].charCodeAt(0).toString(16);
          });
          gulp.src('iconfont/template')
            .pipe(consolidate('lodash', {
              glyphs: glyphs,
              fontName: font.fontName,
              fontPath: './',
              className: 'icon'
            }))
            .pipe(rename(`${font.fontName}-font.scss`))
            .pipe(gulp.dest(`${font.fontsDir}/${font.fontName}`));
        })
        .pipe(gulp.dest(`${font.fontsDir}/${font.fontName}`));
    });
    cb();
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
