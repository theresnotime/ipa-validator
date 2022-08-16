const ipavalidator = require('./../../dist/index');

test('[valid]: /sotʃiˈmilko/ (stripped)', async () => {
    expect(
        await ipavalidator.validate('/sotʃiˈmilko/', true)
    ).toBe(
        true
    );
});

test('[valid]: sotʃiˈmilko (not stripped)', async () => {
    expect(
        await ipavalidator.validate('sotʃiˈmilko', false)
    ).toBe(
        true
    );
});

test('[valid]: [sotʃiˈmilko] (stripped)', async () => {
    expect(
        await ipavalidator.validate('[sotʃiˈmilko]', true)
    ).toBe(
        true
    );
});

test('[invalid]: /sotʃi\'milko/ (stripped)', async () => {
    expect(
        await ipavalidator.validate('/sotʃi\'milko/', true)
    ).toBe(
        false
    );
});

test('[invalid]: /sotʃiˈmilko/ (not stripped)', async () => {
    expect(
        await ipavalidator.validate('/sotʃiˈmilko/', false)
    ).toBe(
        false
    );
});