const ipavalidator = require('./../../dist/index');

test('[valid]: həˈləʊ', async () => {
    expect(
        await ipavalidator.validate('həˈləʊ')
    ).toBe(
        true
    );
});

test('[invalid]: hə\'ləʊ', async () => {
    expect(
        await ipavalidator.validate('hə\'ləʊ')
    ).toBe(
        false
    );
});

test('[valid]: tenoːt͡ʃˈtit͡ɬan', async () => {
    expect(
        await ipavalidator.validate('tenoːt͡ʃˈtit͡ɬan')
    ).toBe(
        true
    );
});

test('[invalid]: teno:t͡ʃˈtit͡ɬan', async () => {
    expect(
        await ipavalidator.validate('teno:t͡ʃˈtit͡ɬan')
    ).toBe(
        false
    );
});


test('[valid]: pʰə̥ˈkj̊uːliɚ', async () => {
    expect(
        await ipavalidator.validate('pʰə̥ˈkj̊uːliɚ')
    ).toBe(
        true
    );
});

test('[valid]: ˈt͡ʃɔk(ə)lɪt', async () => {
    expect(
        await ipavalidator.validate('ˈt͡ʃɔk(ə)lɪt')
    ).toBe(
        true
    );
});

test('[valid]: ˈkætⁿnɪp', async () => {
    expect(
        await ipavalidator.validate('ˈkætⁿnɪp')
    ).toBe(
        true
    );
});

test('[valid]: ˈspɒtˡlɨs', async () => {
    expect(
        await ipavalidator.validate('ˈspɒtˡlɨs')
    ).toBe(
        true
    );
});

test('[valid]: k̟ʰi', async () => {
    expect(
        await ipavalidator.validate('k̟ʰi')
    ).toBe(
        true
    );
});

test('[valid]: ˈhʌsən', async () => {
    expect(
        await ipavalidator.validate('ˈhʌsən')
    ).toBe(
        true
    );
});

test('[valid]: ˈmɪnhɑː(d)ʒ', async () => {
    expect(
        await ipavalidator.validate('ˈmɪnhɑː(d)ʒ')
    ).toBe(
        true
    );
});

test('[invalid]: \'mɪnhɑ:(d)3', async () => {
    expect(
        await ipavalidator.validate('\'mɪnhɑ:(d)3')
    ).toBe(
        false
    );
});

test('[valid]: ɬanˈdɨdno', async () => {
    expect(
        await ipavalidator.validate('ɬanˈdɨdno')
    ).toBe(
        true
    );
});

test('[valid]: ˈkɑːpɑːk', async () => {
    expect(
        await ipavalidator.validate('ˈkɑːpɑːk')
    ).toBe(
        true
    );
});

test('[invalid]: ˈkɑ:paːk', async () => {
    expect(
        await ipavalidator.validate('ˈkɑ:paːk')
    ).toBe(
        false
    );
});