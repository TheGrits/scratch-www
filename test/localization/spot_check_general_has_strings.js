/*
 * spot check that each language has values for the string id keys used generally in the site
 * that are contained in English (i.e. make sure strings will show up, not ids")
 */
var merge = require('lodash.merge');
var path = require('path');
var tap = require('tap');

var languages = require('../../languages.json');
var localeCompare = require('../../bin/lib/locale-compare');

tap.test('spotCheckAboutStrings', function (t) {
    var isoCodes = Object.keys(languages);
    isoCodes.splice(isoCodes.indexOf('en'), 1);
    var viewLocales = {};
    var idsWithICU = {};
    var icuWithIds = {};
    localeCompare.getIdsForView(
        'general',
        path.resolve(__dirname, '../../src/l10n.json'),
        viewLocales,
        idsWithICU,
        icuWithIds
    );
    var md5WithIds = localeCompare.getMD5Map(icuWithIds);
    var keysToCheck = Object.keys(merge(viewLocales['general']['en'])).sort();
    for (var i in isoCodes) {
        var translations = localeCompare.getTranslationsForLanguage(isoCodes[i], idsWithICU, md5WithIds);
        t.same(
            Object.keys(translations['general'][isoCodes[i]]).sort(),
            keysToCheck,
            'check About keys for language ' + isoCodes[i]
        );
    }
    t.end();
});
