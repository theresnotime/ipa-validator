const ipavalidator = require('./../../dist/index');

test('[delimiters]: /sotʃiˈmilko/ (stripped)', async () => {
    expect(await ipavalidator.validate('/sotʃiˈmilko/', true)).toBe(true);
});

test('[delimiters]: sotʃiˈmilko (not stripped)', async () => {
    expect(await ipavalidator.validate('sotʃiˈmilko', false)).toBe(true);
});

test('[delimiters]: [sotʃiˈmilko] (stripped)', async () => {
    expect(await ipavalidator.validate('[sotʃiˈmilko]', true)).toBe(true);
});

test("[delimiters]: /sotʃi'milko/ (stripped)", async () => {
    expect(await ipavalidator.validate("/sotʃi'milko/", true, false)).toBe(false);
});

test('[delimiters]: /sotʃiˈmilko/ (not stripped)', async () => {
    expect(await ipavalidator.validate('/sotʃiˈmilko/', false)).toBe(false);
});
