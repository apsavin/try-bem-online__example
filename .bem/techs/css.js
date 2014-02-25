exports.baseTechName = 'v2/css';

var template = require('bem').template;

exports.techMixin = {

    getCreateResult: function(path, suffix, vars) {

        vars.Selector = '.' + vars.BlockName +
            (vars.ElemName? '__' + vars.ElemName : '') +
            (vars.ModName? ('_' + vars.ModName + (vars.ModVal? '_' + vars.ModVal: '')): '');

        return template.process([
            '{{bemSelector}} {',
            '}'],
            vars);

    }

};