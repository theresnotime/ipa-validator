export function stripIPA(ipa: string): string;
export function validate(ipa: string, strip: boolean, normalizeIPA: boolean, google: boolean): boolean;
export function normalize(ipa: string, strip: boolean, google: boolean): string;
export function removeDiacritics(ipa: string, strip: boolean): string;