/* jshint node:true */
/* global MAKE */

MAKE.decl('Arch', {

    getBlocksLevels: function () {
        return [
            'libs/bem-core/common.blocks',
            'libs/bem-core/desktop.blocks',
            'libs/bem-components/common.blocks',
            'libs/bem-components/desktop.blocks',
            'desktop.blocks'
        ];
    },

    bundlesLevelsRegexp: /^.+?\.bundles$/,

    getLevelCachePolicy: function () {
        return {
            cache: false,
            except: ['libs/bem-core', 'libs/bem-components']
        }
    }

});


MAKE.decl('BundleNode', {

    getTechs: function () {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'browser.js+bemhtml',
            'css',
            'html'
        ];

    }

});
