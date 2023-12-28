export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  en: {
    'nav.women': 'Female',
    'nav.men': 'Male',
    'url.women': 'women',
    'url.men': 'men'
  },
  es: {
    'nav.women': 'Femenino',
    'nav.men': 'Masculino',
    'url.women': 'mujer',
    'url.men': 'hombre'
  },
} as const;

export const showDefaultLang = false;


export const routes = {
  es: {
    'mujer': 'women',
    'hombre': 'men',
  },
  en: {
    'men': 'men',
    'women': 'women',
  },
  }