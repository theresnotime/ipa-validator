const ipavalidator = require('./../../dist/index');

test('[google]: pʰə̥ˈkj̊uːliɚ -> phəˈkjuːliɚ', async () => {
    expect(await ipavalidator.normalize('pʰə̥ˈkj̊uːliɚ', true, true)).toBe('phəˈkjuːliɚ');
});
test('[google]: sotʃiˈmilko -> sotʃiˈmilko', async () => {
    expect(await ipavalidator.normalize('sotʃiˈmilko', true, true)).toBe('sotʃiˈmilko');
});
test('[google]: tenoːt͡ʃˈtit͡ɬan -> tenoːtʃˈtitɬan', async () => {
    expect(await ipavalidator.normalize('tenoːt͡ʃˈtit͡ɬan', true, true)).toBe('tenoːtʃˈtitɬan');
});
test('[google]: dʒəˈneɪ -> dʒəˈneɪ', async () => {
    expect(await ipavalidator.normalize('dʒəˈneɪ', true, true)).toBe('dʒəˈneɪ');
});
test('[google]: ˈælbəˌkɜːrki -> ˈælbəˌkɜːrki', async () => {
    expect(await ipavalidator.normalize('ˈælbəˌkɜːrki', true, true)).toBe('ˈælbəˌkɜːrki');
});
test('[google]: ˈɦaɪ̯daraːbaːd -> ˈɦaɪdaraːbaːd', async () => {
    expect(await ipavalidator.normalize('ˈɦaɪ̯daraːbaːd', true, true)).toBe('ˈɦaɪdaraːbaːd');
});
test('[google]: ˈmɪnhɑː(d)ʒ -> ˈmɪnhɑː(d)ʒ', async () => {
    expect(await ipavalidator.normalize('ˈmɪnhɑː(d)ʒ', true, true)).toBe('ˈmɪnhɑːdʒ');
});
test('[google]: paɾanɡaɾikutiɾiˈmikwaɾo -> paɾanɡaɾikutiɾiˈmikwaɾo', async () => {
    expect(await ipavalidator.normalize('paɾanɡaɾikutiɾiˈmikwaɾo', true, true)).toBe('paɾanɡaɾikutiɾiˈmikwaɾo');
});
test('[google]: mexiko -> mexiko', async () => {
    expect(await ipavalidator.normalize('mexiko', true, true)).toBe('mexiko');
});
test('[google]: ɑ̃.ti.kɔ̃s.ti.ty.sjɔ.nɛl.mɑ̃ -> ɑ.ti.kɔs.ti.ty.sjɔ.nɛl.mɑ', async () => {
    expect(await ipavalidator.normalize('ɑ̃.ti.kɔ̃s.ti.ty.sjɔ.nɛl.mɑ̃', true, true)).toBe('ɑ.ti.kɔs.ti.ty.sjɔ.nɛl.mɑ');
});
test('[google]: ˈsmɶɐ̯ˌpʁœðˀ -> ˈsmɶɐˌpʁœðˀ', async () => {
    expect(await ipavalidator.normalize('ˈsmɶɐ̯ˌpʁœðˀ', true, true)).toBe('ˈsmɶɐˌpʁœðˀ');
});
test('[google]: ˈsʌt(ə)l -> ˈsʌt(ə)l', async () => {
    expect(await ipavalidator.normalize('ˈsʌt(ə)l', true, true)).toBe('ˈsʌtəl');
});
test('[google]: ˈdʒuːəlɹi -> ˈdʒuːəlɹi', async () => {
    expect(await ipavalidator.normalize('ˈdʒuːəlɹi', true, true)).toBe('ˈdʒuːəlɹi');
});
test('[google]: ˈhæmbɝɡɚ -> ˈhæmbɝɡɚ', async () => {
    expect(await ipavalidator.normalize('ˈhæmbɝɡɚ', true, true)).toBe('ˈhæmbɝɡɚ');
});
test('[google]: ɪbɪˈbiːəʊ -> ɪbɪˈbiːəʊ', async () => {
    expect(await ipavalidator.normalize('ɪbɪˈbiːəʊ', true, true)).toBe('ɪbɪˈbiːəʊ');
});
test('[google]: ˈɔːfɫ̩ -> ˈɔːfl', async () => {
    expect(await ipavalidator.normalize('ˈɔːfɫ̩', true, true)).toBe('ˈɔːfl');
});
test('[google]: flaɪ̯ -> flaɪ', async () => {
    expect(await ipavalidator.normalize('flaɪ̯', true, true)).toBe('flaɪ');
});
test('[google]: ˈkætⁿnɪp -> ˈkætnnɪp', async () => {
    expect(await ipavalidator.normalize('ˈkætⁿnɪp', true, true)).toBe('ˈkætnnɪp');
});
test('[google]: ˈæp̚t -> ˈæpt', async () => {
    expect(await ipavalidator.normalize('ˈæp̚t', true, true)).toBe('ˈæpt');
});
test('[google]: ˈspɒtˡlɨs -> ˈspɒtllɨs', async () => {
    expect(await ipavalidator.normalize('ˈspɒtˡlɨs', true, true)).toBe('ˈspɒtllɨs');
});
test('[google]: kənˈfjuːʒən -> kənˈfjuːʒən', async () => {
    expect(await ipavalidator.normalize('kənˈfjuːʒən', true, true)).toBe('kənˈfjuːʒən');
});
test('[google]: θɪŋ -> θɪŋ', async () => {
    expect(await ipavalidator.normalize('θɪŋ', true, true)).toBe('θɪŋ');
});
test('[google]: ˈwɪən -> ˈwɪən', async () => {
    expect(await ipavalidator.normalize('ˈwɪən', true, true)).toBe('ˈwɪən');
});
test('[google]: nə.məs.t̪eː -> nə.məs.teː', async () => {
    expect(await ipavalidator.normalize('nə.məs.t̪eː', true, true)).toBe('nə.məs.teː');
});
test('[google]: n̪anri -> nanri', async () => {
    expect(await ipavalidator.normalize('n̪anri', true, true)).toBe('nanri');
});
test('[google]: ˈʃɪbəlɛθ -> ˈʃɪbəlɛθ', async () => {
    expect(await ipavalidator.normalize('ˈʃɪbəlɛθ', true, true)).toBe('ˈʃɪbəlɛθ');
});
test('[google]: ef.xa.ɾiˈsto -> ef.xa.ɾiˈsto', async () => {
    expect(await ipavalidator.normalize('ef.xa.ɾiˈsto', true, true)).toBe('ef.xa.ɾiˈsto');
});
test('[google]: ˈsʊʃi -> ˈsʊʃi', async () => {
    expect(await ipavalidator.normalize('ˈsʊʃi', true, true)).toBe('ˈsʊʃi');
});
test('[google]: spɐˈsʲibə -> spɐˈsjibə', async () => {
    expect(await ipavalidator.normalize('spɐˈsʲibə', true, true)).toBe('spɐˈsjibə');
});
test('[google]: suːpəˌkælɨˌfɹædʒɨˌlɪstɪkˌɛkspɪˌælɨˈdəʊʃəs -> suːpəˌkælɨˌfɹædʒɨˌlɪstɪkˌɛkspɪˌælɨˈdəʊʃəs', async () => {
    expect(await ipavalidator.normalize('suːpəˌkælɨˌfɹædʒɨˌlɪstɪkˌɛkspɪˌælɨˈdəʊʃəs', true, true)).toBe(
        'suːpəˌkælɨˌfɹædʒɨˌlɪstɪkˌɛkspɪˌælɨˈdəʊʃəs'
    );
});
test('[google]: ˈkɔːrnwɔːl -> ˈkɔːrnwɔːl', async () => {
    expect(await ipavalidator.normalize('ˈkɔːrnwɔːl', true, true)).toBe('ˈkɔːrnwɔːl');
});
test('[google]: tɛmz -> tɛmz', async () => {
    expect(await ipavalidator.normalize('tɛmz', true, true)).toBe('tɛmz');
});
test('[google]: ɡʌnˈwɒləʊ -> ɡʌnˈwɒləʊ', async () => {
    expect(await ipavalidator.normalize('ɡʌnˈwɒləʊ', true, true)).toBe('ɡʌnˈwɒləʊ');
});
test('[google]: ˌpɔːrθˈlɛvən -> ˌpɔːrθˈlɛvən', async () => {
    expect(await ipavalidator.normalize('ˌpɔːrθˈlɛvən', true, true)).toBe('ˌpɔːrθˈlɛvən');
});
test('[google]: ˈsʌmərsɛt -> ˈsʌmərsɛt', async () => {
    expect(await ipavalidator.normalize('ˈsʌmərsɛt', true, true)).toBe('ˈsʌmərsɛt');
});
