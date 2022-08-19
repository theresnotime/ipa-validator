const ipavalidator = require('./../../dist/index');

test('[default]: həˈləʊ', async () => {
    expect(await ipavalidator.validate('həˈləʊ')).toBe(true);
});

test("[default]: hə'ləʊ", async () => {
    expect(await ipavalidator.validate("hə'ləʊ", true, false)).toBe(false);
});

test('[default]: tenoːt͡ʃˈtit͡ɬan', async () => {
    expect(await ipavalidator.validate('tenoːt͡ʃˈtit͡ɬan')).toBe(true);
});

test('[default]: teno:t͡ʃˈtit͡ɬan', async () => {
    expect(await ipavalidator.validate('teno:t͡ʃˈtit͡ɬan', true, false)).toBe(false);
});

test('[default]: pʰə̥ˈkj̊uːliɚ', async () => {
    expect(await ipavalidator.validate('pʰə̥ˈkj̊uːliɚ')).toBe(true);
});

test('[default]: ˈt͡ʃɔk(ə)lɪt', async () => {
    expect(await ipavalidator.validate('ˈt͡ʃɔk(ə)lɪt')).toBe(true);
});

test('[default]: ˈkætⁿnɪp', async () => {
    expect(await ipavalidator.validate('ˈkætⁿnɪp')).toBe(true);
});

test('[default]: ˈspɒtˡlɨs', async () => {
    expect(await ipavalidator.validate('ˈspɒtˡlɨs')).toBe(true);
});

test('[default]: k̟ʰi', async () => {
    expect(await ipavalidator.validate('k̟ʰi')).toBe(true);
});

test('[default]: ˈhʌsən', async () => {
    expect(await ipavalidator.validate('ˈhʌsən')).toBe(true);
});

test('[default]: ˈmɪnhɑː(d)ʒ', async () => {
    expect(await ipavalidator.validate('ˈmɪnhɑː(d)ʒ')).toBe(true);
});

test("[default]: 'mɪnhɑ:(d)3", async () => {
    expect(await ipavalidator.validate("'mɪnhɑ:(d)3", true, false)).toBe(false);
});

test('[default]: ɬanˈdɨdno', async () => {
    expect(await ipavalidator.validate('ɬanˈdɨdno')).toBe(true);
});

test('[default]: ˈkɑːpɑːk', async () => {
    expect(await ipavalidator.validate('ˈkɑːpɑːk')).toBe(true);
});

test('[default]: ˈkɑ:paːk', async () => {
    expect(await ipavalidator.validate('ˈkɑ:paːk', true, false)).toBe(false);
});

test('[default]: ˈkɑ:paːk', async () => {
    expect(await ipavalidator.validate('ˈkɑ:paːk', true, true)).toBe(true);
});
