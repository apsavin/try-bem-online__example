var PATH = require('path'),
    environ = require('bem-environ'),
    join = PATH.join,

    PRJ_ROOT = environ.PRJ_ROOT,
    PRJ_TECHS = join(PRJ_ROOT, '.bem/techs'),
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs');

exports.getTechs = function() {

    return {
        'vanilla.js'    : join(BEMCORE_TECHS, 'vanilla.js.js'),
        'browser.js'    : join(BEMCORE_TECHS, 'browser.js.js'),
        'node.js'       : join(BEMCORE_TECHS, 'node.js.js'),
        'bemhtml'       : join(BEMCORE_TECHS, 'bemhtml.js'),
        'css'           : join(PRJ_TECHS, 'css.js'),
        //for bem create command only (https://github.com/bem/bem-tools/issues/555)
        'js'            : join(PRJ_TECHS, 'js.js')
    };

};

exports.defaultTechs = ['css', 'browser.js', 'bemhtml'];
