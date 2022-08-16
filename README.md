# Node package for validating IPA
[![Node.js CI](https://github.com/theresnotime/ipa-validator/actions/workflows/node.yml/badge.svg)](https://github.com/theresnotime/ipa-validator/actions/workflows/node.yml)
[![CodeQL](https://github.com/theresnotime/ipa-validator/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/theresnotime/ipa-validator/actions/workflows/codeql-analysis.yml)
[![install size](https://packagephobia.com/badge?p=@theresnotime/ipa-validator)](https://packagephobia.com/result?p=@theresnotime/ipa-validator)


## Installing
Go grab it on [npmjs](https://www.npmjs.com/package/@theresnotime/ipa-validator) via `npm i @theresnotime/ipa-validator`

You'll then be all set to `require` it:
```js
const ipaValidator = require('@theresnotime/ipa-validator');
```
Simples!

## IPA goes in..
We pass the the IPA as a string:

```js
let validatorResult = await ipaValidator.validate('həˈləʊ');
```

## ..and a bool comes out!
Unsurprisingly, `true` for valid IPA, `false` for invalid IPA..

### A note on "valid"
As the tests show, you need to use the correct unicode — for example, `həˈləʊ` is valid but `hə'ləʊ` is not.

## Developing
 1. [Fork n' clone](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) this repo
 2. Do a `npm install`
 3. Run `npm test` because who knows, maybe its already broken
 4. Hack!

## The Regex
```
^[().a-z|æçðøħŋœǀ-ǃɐ-ɻɽɾʀ-ʄʈ-ʒʔʕʘʙʛ-ʝʟʡʢʰʲʷʼˀˈˌːˑ˞ˠˡˤ-˩̴̘̙̜̝̞̟̠̤̥̩̪̬̯̰̹̺̻̼̀́̂̃̄̆̈̊̋̌̏̽̚͜͡βθχ᷄᷅᷈‖‿ⁿⱱ]+$
```

I've also placed it at https://regex101.com/r/f2Qhuk if you think you can improve it... (**please do**!)