const ipavalidator = require('./../../dist/index');

test('[valid]: /sotʃiˈmilko/', async () => {
    expect(
        await ipavalidator.validate('/sotʃiˈmilko/')
    ).toBe(
        true
    );
});