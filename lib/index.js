'use strict';

var Mingo = require('mingo');

module.exports = function (ops) {
    ops          = ops || {};
    ops.filename = ops.filename || 'filename';
    ops.find     = ops.find || 'find';
    ops.findOne  = ops.findOne || 'findOne';

    return function (files, ms, done) {
        var data     = [];
        var metadata = ms.metadata();

        for (var file in files) {
            files[file][ops.filename] = file;
            data.push(files[file]);
        }

        metadata[ops.find] = function (criteria, projection) {
            return Mingo.find(data, criteria, projection);
        };

        metadata[ops.findOne] = function (criteria, projection) {
            return Mingo.find(data, criteria, projection).first();
        };

        done();
    };
};
