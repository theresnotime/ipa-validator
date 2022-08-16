/**
 * Validate IPA
 * @param {string} ipa - IPA to validate.
 * @returns {boolean} - Whether the IPA is valid.
 */
 function validate(ipa) {
    try {
        const regex = new RegExp('^[().a-z|æçðøħŋœǀ-ǃɐ-ɻɽɾʀ-ʄʈ-ʒʔʕʘʙʛ-ʝʟʡʢʰʲʷʼˀˈˌːˑ˞ˠˡˤ-˩̴̘̙̜̝̞̟̠̤̥̩̪̬̯̰̹̺̻̼̀́̂̃̄̆̈̊̋̌̏̽̚͜͡βθχ᷄᷅᷈‖‿ⁿⱱ]+$', 'gui');
        return regex.test(ipa);
    } catch (err) {
        return err;
    }
}

module.exports = {
    validate
};