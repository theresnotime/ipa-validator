const ipavalidator = require('./../../dist/index');

test('[valid]: /sotʃiˈmilko/', async () => {
    expect(
        await ipavalidator.validate('/sotʃiˈmilko/')
    ).toBe(
        true
    );
});

test('[valid]: [sotʃiˈmilko]', async () => {
    expect(
        await ipavalidator.validate('[sotʃiˈmilko]')
    ).toBe(
        true
    );
});

test('[invalid]: /sotʃi\'milko/', async () => {
    expect(
        await ipavalidator.validate('/sotʃi\'milko/')
    ).toBe(
        false
    );
});