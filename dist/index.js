/**
 * Strip IPA delimiters (currently /.../ and [...])
 * @param {string} ipa - IPA to strip.
 * @returns {string} - Stripped IPA
 */
function stripIPA(ipa) {
    const regex = new RegExp(/[\/\[\]]/, 'gui');
    return ipa.replaceAll(regex, '');
}

/**
 * Normalize IPA
 * @param {string} ipa - IPA to normalize.
 * @param {boolean} strip - Strip delimiters (default: false)
 * @returns {string} - normalized IPA
 */
function normalize(ipa, strip = false) {
    if (strip) {
        ipa = stripIPA(ipa);
    }

    charmap = [
        ["'", 'ˈ'],
        [':', 'ː'],
        [',', 'ˌ'],
    ];

    for (var char in charmap) {
        ipa = ipa.replaceAll(charmap[char][0], charmap[char][1]);
    }

    return ipa;
}

/**
 * Validate delimiter-stripped IPA, optionally normalising it first.
 * @param {string} ipa - IPA to validate.
 * @param {boolean} strip - Strip delimiters (default: true)
 * @param {boolean} normalizeIPA - Normalize IPA (default: false)
 * @returns {boolean} - Whether the IPA is valid.
 */
function validate(ipa, strip = true, normalizeIPA = false) {
    if (strip) {
        ipa = stripIPA(ipa);
    }

    if (normalizeIPA) {
        ipa = normalize(ipa);
    }

    const regex = new RegExp(/^[().a-z|æçðøħŋœǀ-ǃɐ-ɻɽɾʀ-ʄʈ-ʒʔʕʘʙʛ-ʝʟʡʢʰʲʷʼˀˈˌːˑ˞ˠˡˤ-˩̴̘̙̜̝̞̟̠̤̥̩̪̬̯̰̹̺̻̼̀́̂̃̄̆̈̊̋̌̏̽̚͜͡βθχ᷄᷅᷈‖‿ⁿⱱ]+$/, 'gui');
    return regex.test(ipa);
}

module.exports = {
    stripIPA,
    validate,
    normalize,
};
