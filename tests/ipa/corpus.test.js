const ipavalidator = require('./../../dist/index');

test('[corpus]: sotʃiˈmilko', async () => {
    expect(await ipavalidator.validate('sotʃiˈmilko')).toBe(true);
});
test('[corpus]: tenoːt͡ʃˈtit͡ɬan', async () => {
    expect(await ipavalidator.validate('tenoːt͡ʃˈtit͡ɬan')).toBe(true);
});
test('[corpus]: dʒəˈneɪ', async () => {
    expect(await ipavalidator.validate('dʒəˈneɪ')).toBe(true);
});
test('[corpus]: ˈælbəˌkɜːrki', async () => {
    expect(await ipavalidator.validate('ˈælbəˌkɜːrki')).toBe(true);
});
test('[corpus]: ˈɦaɪ̯daraːbaːd', async () => {
    expect(await ipavalidator.validate('ˈɦaɪ̯daraːbaːd')).toBe(true);
});
test('[corpus]: ˈmɪnhɑː(d)ʒ', async () => {
    expect(await ipavalidator.validate('ˈmɪnhɑː(d)ʒ')).toBe(true);
});
test('[corpus]: paɾanɡaɾikutiɾiˈmikwaɾo', async () => {
    expect(await ipavalidator.validate('paɾanɡaɾikutiɾiˈmikwaɾo')).toBe(true);
});
test('[corpus]: mexiko', async () => {
    expect(await ipavalidator.validate('mexiko')).toBe(true);
});
test('[corpus]: ɑ̃.ti.kɔ̃s.ti.ty.sjɔ.nɛl.mɑ̃', async () => {
    expect(await ipavalidator.validate('ɑ̃.ti.kɔ̃s.ti.ty.sjɔ.nɛl.mɑ̃')).toBe(true);
});
test('[corpus]: ˈsmɶɐ̯ˌpʁœðˀ', async () => {
    expect(await ipavalidator.validate('ˈsmɶɐ̯ˌpʁœðˀ')).toBe(true);
});
test('[corpus]: ˈsʌt(ə)l', async () => {
    expect(await ipavalidator.validate('ˈsʌt(ə)l')).toBe(true);
});
test('[corpus]: ˈdʒuːəlɹi', async () => {
    expect(await ipavalidator.validate('ˈdʒuːəlɹi')).toBe(true);
});
test('[corpus]: ˈhæmbɝɡɚ', async () => {
    expect(await ipavalidator.validate('ˈhæmbɝɡɚ')).toBe(true);
});
test('[corpus]: ɪbɪˈbiːəʊ', async () => {
    expect(await ipavalidator.validate('ɪbɪˈbiːəʊ')).toBe(true);
});
test('[corpus]: ˈɔːfɫ̩', async () => {
    expect(await ipavalidator.validate('ˈɔːfɫ̩')).toBe(true);
});
test('[corpus]: flaɪ̯', async () => {
    expect(await ipavalidator.validate('flaɪ̯')).toBe(true);
});
test('[corpus]: ˈkætⁿnɪp', async () => {
    expect(await ipavalidator.validate('ˈkætⁿnɪp')).toBe(true);
});
test('[corpus]: ˈæp̚t', async () => {
    expect(await ipavalidator.validate('ˈæp̚t')).toBe(true);
});
test('[corpus]: ˈspɒtˡlɨs', async () => {
    expect(await ipavalidator.validate('ˈspɒtˡlɨs')).toBe(true);
});
test('[corpus]: kənˈfjuːʒən', async () => {
    expect(await ipavalidator.validate('kənˈfjuːʒən')).toBe(true);
});
test('[corpus]: θɪŋ', async () => {
    expect(await ipavalidator.validate('θɪŋ')).toBe(true);
});
test('[corpus]: ˈwɪən', async () => {
    expect(await ipavalidator.validate('ˈwɪən')).toBe(true);
});
test('[corpus]: nə.məs.t̪eː', async () => {
    expect(await ipavalidator.validate('nə.məs.t̪eː')).toBe(true);
});
test('[corpus]: n̪anri', async () => {
    expect(await ipavalidator.validate('n̪anri')).toBe(true);
});
test('[corpus]: ˈʃɪbəlɛθ', async () => {
    expect(await ipavalidator.validate('ˈʃɪbəlɛθ')).toBe(true);
});
test('[corpus]: ef.xa.ɾiˈsto', async () => {
    expect(await ipavalidator.validate('ef.xa.ɾiˈsto')).toBe(true);
});
test('[corpus]: ˈsʊʃi', async () => {
    expect(await ipavalidator.validate('ˈsʊʃi')).toBe(true);
});
test('[corpus]: spɐˈsʲibə', async () => {
    expect(await ipavalidator.validate('spɐˈsʲibə')).toBe(true);
});
test('[corpus]: suːpəˌkælɨˌfɹædʒɨˌlɪstɪkˌɛkspɪˌælɨˈdəʊʃəs', async () => {
    expect(await ipavalidator.validate('suːpəˌkælɨˌfɹædʒɨˌlɪstɪkˌɛkspɪˌælɨˈdəʊʃəs')).toBe(true);
});
test('[corpus]: ˈkɔːrnwɔːl', async () => {
    expect(await ipavalidator.validate('ˈkɔːrnwɔːl')).toBe(true);
});
test('[corpus]: tɛmz', async () => {
    expect(await ipavalidator.validate('tɛmz')).toBe(true);
});
test('[corpus]: ɡʌnˈwɒləʊ', async () => {
    expect(await ipavalidator.validate('ɡʌnˈwɒləʊ')).toBe(true);
});
test('[corpus]: ˌpɔːrθˈlɛvən', async () => {
    expect(await ipavalidator.validate('ˌpɔːrθˈlɛvən')).toBe(true);
});
test('[corpus]: ˈsʌmərsɛt', async () => {
    expect(await ipavalidator.validate('ˈsʌmərsɛt')).toBe(true);
});
