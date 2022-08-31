import { i18n } from '@lingui/core';
import { en, ru, de } from 'make-plural/plurals';

i18n.loadLocaleData('en', { plurals: en });
i18n.loadLocaleData('de', { plurals: de });
i18n.loadLocaleData('ru', { plurals: ru });

export async function activate(locale) {
  const { messages } = await import(`../../../locale/${locale}/messages.js`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}
