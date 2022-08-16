const ipavalidator = require('./../../dist/index');

test("[valid]: sotʃi'milko", async () => {
    expect(await ipavalidator.normalize("sotʃi'milko")).toBe('sotʃiˈmilko');
});

test('[valid]: kənˈfju:ʒən', async () => {
    expect(await ipavalidator.normalize('kənˈfju:ʒən')).toBe('kənˈfjuːʒən');
});

test('[valid]: su:pə,kælɨ,fɹædʒɨ,lɪstɪk,ɛkspɪˌælɨˈdəʊʃəs', async () => {
    expect(await ipavalidator.normalize('su:pə,kælɨ,fɹædʒɨ,lɪstɪk,ɛkspɪˌælɨˈdəʊʃəs')).toBe(
        'suːpəˌkælɨˌfɹædʒɨˌlɪstɪkˌɛkspɪˌælɨˈdəʊʃəs'
    );
});

test("[valid]: /kən'fju:ʒən/", async () => {
    expect(await ipavalidator.normalize("/kən'fju:ʒən/", true)).toBe('kənˈfjuːʒən');
});

test("[valid]: /kən'fju:ʒən/", async () => {
    expect(await ipavalidator.normalize("/kən'fju:ʒən/", false)).toBe('/kənˈfjuːʒən/');
});
