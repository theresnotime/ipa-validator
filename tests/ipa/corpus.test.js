const ipavalidator = require('./../../dist/index');

test('[valid]: sotʃiˈmilko', async () => {
    expect(await ipavalidator.validate('sotʃiˈmilko')).toBe(true);
});
test('[valid]: tenoːt͡ʃˈtit͡ɬan', async () => {
    expect(await ipavalidator.validate('tenoːt͡ʃˈtit͡ɬan')).toBe(true);
});
test('[valid]: dʒəˈneɪ', async () => {
    expect(await ipavalidator.validate('dʒəˈneɪ')).toBe(true);
});
test('[valid]: ˈælbəˌkɜːrki', async () => {
    expect(await ipavalidator.validate('ˈælbəˌkɜːrki')).toBe(true);
});
test('[valid]: ˈɦaɪ̯daraːbaːd', async () => {
    expect(await ipavalidator.validate('ˈɦaɪ̯daraːbaːd')).toBe(true);
});
test('[valid]: ˈmɪnhɑː(d)ʒ', async () => {
    expect(await ipavalidator.validate('ˈmɪnhɑː(d)ʒ')).toBe(true);
});
test('[valid]: paɾanɡaɾikutiɾiˈmikwaɾo', async () => {
    expect(await ipavalidator.validate('paɾanɡaɾikutiɾiˈmikwaɾo')).toBe(true);
});
test('[valid]: mexiko', async () => {
    expect(await ipavalidator.validate('mexiko')).toBe(true);
});
test('[valid]: ɑ̃.ti.kɔ̃s.ti.ty.sjɔ.nɛl.mɑ̃', async () => {
    expect(await ipavalidator.validate('ɑ̃.ti.kɔ̃s.ti.ty.sjɔ.nɛl.mɑ̃')).toBe(true);
});
test('[valid]: ˈsmɶɐ̯ˌpʁœðˀ', async () => {
    expect(await ipavalidator.validate('ˈsmɶɐ̯ˌpʁœðˀ')).toBe(true);
});
test('[valid]: ˈsʌt(ə)l', async () => {
    expect(await ipavalidator.validate('ˈsʌt(ə)l')).toBe(true);
});
test('[valid]: ˈdʒuːəlɹi', async () => {
    expect(await ipavalidator.validate('ˈdʒuːəlɹi')).toBe(true);
});
test('[valid]: ˈhæmbɝɡɚ', async () => {
    expect(await ipavalidator.validate('ˈhæmbɝɡɚ')).toBe(true);
});
test('[valid]: ɪbɪˈbiːəʊ', async () => {
    expect(await ipavalidator.validate('ɪbɪˈbiːəʊ')).toBe(true);
});
test('[valid]: ˈɔːfɫ̩', async () => {
    expect(await ipavalidator.validate('ˈɔːfɫ̩')).toBe(true);
});
test('[valid]: flaɪ̯', async () => {
    expect(await ipavalidator.validate('flaɪ̯')).toBe(true);
});
test('[valid]: ˈkætⁿnɪp', async () => {
    expect(await ipavalidator.validate('ˈkætⁿnɪp')).toBe(true);
});
test('[valid]: ˈæp̚t', async () => {
    expect(await ipavalidator.validate('ˈæp̚t')).toBe(true);
});
test('[valid]: ˈspɒtˡlɨs', async () => {
    expect(await ipavalidator.validate('ˈspɒtˡlɨs')).toBe(true);
});
test('[valid]: kənˈfjuːʒən', async () => {
    expect(await ipavalidator.validate('kənˈfjuːʒən')).toBe(true);
});
test('[valid]: θɪŋ', async () => {
    expect(await ipavalidator.validate('θɪŋ')).toBe(true);
});
test('[valid]: ˈwɪən', async () => {
    expect(await ipavalidator.validate('ˈwɪən')).toBe(true);
});
test('[valid]: nə.məs.t̪eː', async () => {
    expect(await ipavalidator.validate('nə.məs.t̪eː')).toBe(true);
});
test('[valid]: n̪anri', async () => {
    expect(await ipavalidator.validate('n̪anri')).toBe(true);
});
test('[valid]: ˈʃɪbəlɛθ', async () => {
    expect(await ipavalidator.validate('ˈʃɪbəlɛθ')).toBe(true);
});
test('[valid]: ef.xa.ɾiˈsto', async () => {
    expect(await ipavalidator.validate('ef.xa.ɾiˈsto')).toBe(true);
});
test('[valid]: ˈsʊʃi', async () => {
    expect(await ipavalidator.validate('ˈsʊʃi')).toBe(true);
});
test('[valid]: spɐˈsʲibə', async () => {
    expect(await ipavalidator.validate('spɐˈsʲibə')).toBe(true);
});
test('[valid]: suːpəˌkælɨˌfɹædʒɨˌlɪstɪkˌɛkspɪˌælɨˈdəʊʃəs', async () => {
    expect(await ipavalidator.validate('suːpəˌkælɨˌfɹædʒɨˌlɪstɪkˌɛkspɪˌælɨˈdəʊʃəs')).toBe(true);
});
test('[valid]: ˈkɔːrnwɔːl', async () => {
    expect(await ipavalidator.validate('ˈkɔːrnwɔːl')).toBe(true);
});
test('[valid]: tɛmz', async () => {
    expect(await ipavalidator.validate('tɛmz')).toBe(true);
});
test('[valid]: ɡʌnˈwɒləʊ', async () => {
    expect(await ipavalidator.validate('ɡʌnˈwɒləʊ')).toBe(true);
});
test('[valid]: ˌpɔːrθˈlɛvən', async () => {
    expect(await ipavalidator.validate('ˌpɔːrθˈlɛvən')).toBe(true);
});
test('[valid]: ˈsʌmərsɛt', async () => {
    expect(await ipavalidator.validate('ˈsʌmərsɛt')).toBe(true);
});
