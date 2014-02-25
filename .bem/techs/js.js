var template = require('bem').template;

exports.techMixin = {

    getCreateSuffixes: function () {
        return ['js'];
    },

    getCreateResult: function (path, suffix, vars) {
        var moduleName = vars.BlockName;
        vars.ElemName &&
        (moduleName += '__' + vars.ElemName);
        vars.ModName &&
        (moduleName += '_' + vars.ModName);
        vars.ModVal &&
        (moduleName += '_' + vars.ModVal);
        vars.ModuleName = moduleName;

        return template.process([
            "/*global modules:false */",
            "",
            "modules.define('{{bemModuleName}}', function(provide) {",
            "",
            "provide();",
            "",
            "});",
            ""
        ], vars);
    }

};