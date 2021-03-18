import Cookies from 'universal-cookie';

const cookies = new Cookies();

const cookieConfigLocal = {
  httpOnly: false,
  maxAge: 2592000000,
  domain: 'localhost',
  path: '/',
};
const cookieConfigDev = {
  httpOnly: false,
  maxAge: 2592000000,
  domain: '.occdev.com.mx',
  path: '/',
};
const cookieConfigProd = {
  httpOnly: false,
  maxAge: 2592000000,
  domain: '.occ.com.mx',
  path: '/',
};

const getCookieConfig = (local: boolean = false, dev: boolean = false, prod: boolean = false) => {
  if (local) return cookieConfigLocal;
  else if (dev) return cookieConfigDev;
  else if (prod) return cookieConfigProd;
  else return cookieConfigLocal;
}

export const getCookie = cookieName => (cookies.get(cookieName) || null);

export const setCookie = (cookieName, newVal, local, dev, prod) => {
  cookies.set(cookieName, newVal, getCookieConfig(local, dev, prod));
  return Promise.resolve();
};

export const cookieBanner = 'visibleBanner';
