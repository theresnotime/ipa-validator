const ipavalidator = require('./../../dist/index');

test("[normalize]: sotʃi'milko", async () => {
    expect(await ipavalidator.normalize("sotʃi'milko")).toBe('sotʃiˈmilko');
});

test('[normalize]: kənˈfju:ʒən', async () => {
    expect(await ipavalidator.normalize('kənˈfju:ʒən')).toBe('kənˈfjuːʒən');
});

test('[normalize]: su:pə,kælɨ,fɹædʒɨ,lɪstɪk,ɛkspɪˌælɨˈdəʊʃəs', async () => {
    expect(await ipavalidator.normalize('su:pə,kælɨ,fɹædʒɨ,lɪstɪk,ɛkspɪˌælɨˈdəʊʃəs')).toBe(
        'suːpəˌkælɨˌfɹædʒɨˌlɪstɪkˌɛkspɪˌælɨˈdəʊʃəs'
    );
});

test("[normalize]: /kən'fju:ʒən/", async () => {
    expect(await ipavalidator.normalize("/kən'fju:ʒən/", true)).toBe('kənˈfjuːʒən');
});

test("[normalize]: /kən'fju:ʒən/", async () => {
    expect(await ipavalidator.normalize("/kən'fju:ʒən/", false)).toBe('/kənˈfjuːʒən/');
});
