import en from '../languages/english.json';
import no from '../languages/norwegian.json';

type Language = Record<string, string>

export const dictionaries: Record<string, Language> = { 'en': {...en}, 'no': {...no} };

export const languageNames = {
    en: 'English',
    no: 'Norsk'
};