/**
 * Validate IPA
 * @param {string} ipa - IPA to validate.
 * @returns {boolean} - Whether the IPA is valid.
 */
 function validate(ipa) {
    try {
        const regex = new RegExp('^[pbtdʈɖcɟkɡqɢʔmɱnɳɲŋɴʙrʀⱱɾɽɸβfvθðszʃʒʂʐçʝxɣχʁħʕhɦɬɮʋɹɻjɰlɭʎʟʘǀǃǂǁɓɗʄɠʛʼiyɨʉɯuɪʏʊeøɘj̊uɵɤoəɛœɜɞʌɔæɐaɶɑɒʍwɥʜʢʡɕʑɺɧ͜͡ˈˌːˑ̆|‖.‿̥̬ʰ̹̜̟̠̩̯̈̽˞̤̰̼ʷʲˠˤ̴̝̞̘̙̪̺̻̃ⁿˡ̋̚˥̌˩́˦̂̄˧᷄̀˨᷅̏᷈ɚ()ˀɝɫ̩]+$', 'gui');
        return regex.test(ipa);
    } catch (err) {
        return err;
    }
}

module.exports = {
    validate
};