/**
 * Validate IPA
 * @param {string} ipa - IPA to validate.
 * @returns {boolean} - Whether the IPA is valid.
 */
 function validate(ipa) {
    const delimiterRegex = new RegExp(/[\/\[\]]/, 'gui');
    ipa = ipa.replaceAll(delimiterRegex, '');
    const ipaRegex = new RegExp(/^[().a-z|æçðøħŋœǀ-ǃɐ-ɻɽɾʀ-ʄʈ-ʒʔʕʘʙʛ-ʝʟʡʢʰʲʷʼˀˈˌːˑ˞ˠˡˤ-˩̴̘̙̜̝̞̟̠̤̥̩̪̬̯̰̹̺̻̼̀́̂̃̄̆̈̊̋̌̏̽̚͜͡βθχ᷄᷅᷈‖‿ⁿⱱ]+$/, 'gui');
    return ipaRegex.test(ipa);
}

module.exports = {
    validate
};