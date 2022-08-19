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
 * Remove diacritics
 * @param {string} ipa - IPA to modify.
 * @param {boolean} strip - Strip delimiters (default: false)
 * @returns {string} - modified IPA
 */
function removeDiacritics(ipa, strip = false) {
    return ipa.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/**
 * Normalize IPA
 * @param {string} ipa - IPA to normalize.
 * @param {boolean} strip - Strip delimiters (default: false)
 * @param {boolean} google - Normalize IPA for Google TTS (default: false)
 * @returns {string} - normalized IPA
 */
function normalize(ipa, strip = false, google = false) {
    if (strip) {
        ipa = stripIPA(ipa);
    }

    /*
     * I'm going to guess Google's normalization is weird
     * and different from what anyone else will want.
     */
    if (google) {
        charmap = [
            ['(', ''],
            [')', ''],
            ["'", 'ˈ'],
            [':', 'ː'],
            [',', 'ˌ'],
            ['ⁿ', 'n'], // 207F
            ['ʰ', 'h'], // 02B0
            ['ɫ', 'l'], // 026B
        ];
        for (let char in charmap) {
            ipa = ipa.replaceAll(charmap[char][0], charmap[char][1]);
        }
        ipa = removeDiacritics(ipa);
    } else {
        charmap = [
            ["'", 'ˈ'],
            [':', 'ː'],
            [',', 'ˌ'],
        ];
        for (let char in charmap) {
            ipa = ipa.replaceAll(charmap[char][0], charmap[char][1]);
        }
    }

    return ipa;
}

/**
 * Validate delimiter-stripped IPA, optionally normalising it first.
 * @param {string} ipa - IPA to validate.
 * @param {boolean} strip - Strip delimiters (default: true)
 * @param {boolean} normalizeIPA - Normalize IPA (default: false)
 * @param {boolean} google - Normalize IPA for Google TTS (default: false)
 * @returns {boolean} - Whether the IPA is valid.
 */
function validate(ipa, strip = true, normalizeIPA = false, google = false) {
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
    removeDiacritics,
};
