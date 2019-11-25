"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs = require("fs");
var gulp = require("gulp");
var consolidate = require("gulp-consolidate");
var debug = require("gulp-debug");
var iconfont = require("gulp-iconfont");
var rename = require("gulp-rename");
var gulpclass_1 = require("gulpclass");
require("reflect-metadata");
var ICONFONT_INFO = 'A config file(iconfont.json) and template for the iconfont creating '
    + 'has been created in the root directory. Set your preferences for the library.';
var CONFIG_NAME = 'iconfont.json';
var TEMPLATE_NAME = 'template';
var TIMESTAMP = 1000;
var FontConfig = /** @class */ (function () {
    function FontConfig() {
        this.svgPath = '';
        this.fontsPath = '';
        this.fontName = '';
    }
    return FontConfig;
}());
var Gulpfile = /** @class */ (function () {
    function Gulpfile() {
    }
    Gulpfile.prototype.check = function () {
        return fs.existsSync('iconfont/' + CONFIG_NAME) && fs.existsSync('iconfont/' + TEMPLATE_NAME);
    };
    Gulpfile.prototype.read = function () {
        return JSON.parse(fs.readFileSync('iconfont/' + CONFIG_NAME, 'utf-8'));
    };
    Gulpfile.prototype.create = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (!fs.existsSync('iconfont')) {
                    fs.mkdirSync('iconfont');
                }
                fs.writeFileSync('iconfont/' + CONFIG_NAME, JSON.stringify([new FontConfig()], null, 4));
                fs.copyFileSync('node_modules/junte-ui/' + TEMPLATE_NAME, 'iconfont/' + TEMPLATE_NAME);
                console.log('\x1b[31m', ICONFONT_INFO);
                return [2 /*return*/];
            });
        });
    };
    Gulpfile.prototype.styles = function (cb) {
        var fonts = this.read();
        fonts.forEach(function (font) {
            gulp.src([font.svgPath + "/*.svg"])
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
                    fontPath: '/assets/fonts',
                    className: 'icon'
                }))
                    .pipe(rename(font.fontName + "-font.scss"))
                    .pipe(gulp.dest(font.fontsPath + "/" + font.fontName));
            })
                .pipe(gulp.dest(font.fontsPath + "/" + font.fontName));
        });
        cb();
    };
    Gulpfile.prototype.createConfig = function () {
        return this.create();
    };
    Gulpfile.prototype.build = function () {
        return this.check() ? ['styles'] : ['createConfig'];
    };
    tslib_1.__decorate([
        gulpclass_1.Task(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], Gulpfile.prototype, "styles", null);
    tslib_1.__decorate([
        gulpclass_1.Task(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], Gulpfile.prototype, "createConfig", null);
    tslib_1.__decorate([
        gulpclass_1.SequenceTask(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], Gulpfile.prototype, "build", null);
    Gulpfile = tslib_1.__decorate([
        gulpclass_1.Gulpclass()
    ], Gulpfile);
    return Gulpfile;
}());
exports.Gulpfile = Gulpfile;
//# sourceMappingURL=iconfont.js.map