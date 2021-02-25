import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from './index';

const appUrl = 'http://localhost:3000';

const r11links = {
  url: 'http://devrecluta1.occdev.com.mx/',
  classifications: 'Vacantes/Clasificaciones/',
  notasCV: 'Administracion/NotasReclutador/',
  account: 'Paquetes/EstadoCuenta/',
  reports: 'Vacantes/Reportes/',
  personalData: 'DatosPersonales/',
  changePass: 'DatosPersonales/CambiarClave/',
  users: 'SubCuentas/Listado/',
  home: 'Home/DefaultN/',
  agents: 'Administracion/AgentesReclutamiento/',
  chat: 'Conversaciones/Listado/',
  h3Url: 'https://h3.occ.com.mx/',
  h3IndicesSalariales: 'Mercer/MisPerfiles/',
  termsAndConditions: 'Administracion/Terminos/',
};

const r12links = {
  url: 'https://master.occdev.com.mx/empresas/mi-oficina/',
  ayuda: 'ayuda/hc/es/',
  contacto: 'contacto',
};

const links = {
  sight: 'http://localhost:8029/',
  r11home: 'http://devrecluta1.occdev.com.mx/Home/DefaultN/',
  sightMainPage: 'actividad/',
  sightJobAdmin: 'vacantes/admin/',
  talent: 'talento/',
  notes: 'herramientas/notas/',
  company: 'empresa/',
  plan: 'tienda/personaliza-tu-plan/',
  cart: 'http://localhost:5000/carrito/',
  sSight: 'productos/',
  anuncios: 'publicacion-de-vacantes/',
  talentSearch: 'busqueda-de-talento/',
  quotation: 'personaliza-tu-plan/',
  prices: 'precios-paquetes/',
  faqs: 'preguntas-frecuentes/',
  aboutUs: 'acerca-de-occmundial/',
  buscoEmpleo: 'https://www.occ.com.mx/?utm_source=empresas&utm_medium=referral&utm_campaign=header',
  buscoPersonal: 'http://localhost:3000/',
  loginPage: 'http://localhost:2000/login/',
  newAccount: 'http://localhost:2000/crear-cuenta/',
  indices: 'https://h3.occ.com.mx/Mercer/MisPerfiles',
  RUE: ' https://www.occ.com.mx/rue/contacto/',
};

const cartLink = `${links.cart}?utm_source=sight&utm_medium=referral&utm_campaign=checkOut/personalizador`;
const planLink = `${appUrl}/?utm_source=sight&utm_medium=referral&utm_campaign=checkOut/personalizador`;
const levelAccount = 'Subadministrator';
const validEmail = true;
const isAdmin = true;
const typeAdministrator = levelAccount === 'Administrator';
const typeSubadministrator = isAdmin || levelAccount === 'Subadministrator';
const canReturn = false;

const defaultProps = {
  linksH: [
    {
      url: planLink, text: 'Carrito', visible: false, alert: false,
    },
    { url: `${r11links.url}${r11links.chat}`, text: 'Chat', visible: false },
    { separator: true, hide: true },
    { url: `${r11links.url}${r11links.classifications}`, text: 'Clasificaciones de CV\'s', visible: true },
    { url: `${r11links.url}${r11links.notasCV}`, text: 'Notas de CV\'s', visible: true },
    { separator: true },
    { url: `${r11links.url}${r11links.account}`, text: 'Estado de cuenta', visible: true },
    { url: `${r11links.url}${r11links.reports}`, text: 'Reportes de uso de cuenta', visible: isAdmin && typeAdministrator && canReturn },
    { separator: true },
    { url: `${r12links.url}${r12links.contacto}`, text: 'Datos de contacto', visible: isAdmin && typeAdministrator },
    { url: `${r11links.url}${r11links.personalData}`, text: 'Datos personales', visible: !isAdmin || !typeAdministrator },
    { url: `${r11links.url}${r11links.changePass}`, text: 'Cambiar contraseña', visible: true },
    { url: `${r11links.url}${r11links.users}`, text: 'Administrador de cuenta', visible: validEmail && isAdmin && typeSubadministrator },
    { url: `${links.buscoPersonal}${links.notes}`, text: 'Administrador de notas', visible: false },
    { separator: true },
    { url: `${links.indices}`, text: 'Índices salariales', visible: true },
    { separator: true },
    { url: `${r12links.url}${r12links.ayuda}`, text: 'Ayuda', visible: true },
    { separator: true },
  ],
};

const cartHasItems = {
  linksH: [
    {
      url: cartLink, text: 'Carrito', visible: false, alert: true,
    },
    { url: `${r11links.url}${r11links.chat}`, text: 'Chat', visible: false },
    { separator: true, hide: true },
    { url: `${r11links.url}${r11links.classifications}`, text: 'Clasificaciones de CV\'s', visible: true },
    { url: `${r11links.url}${r11links.notasCV}`, text: 'Notas de CV\'s', visible: true },
    { separator: true },
    { url: `${r11links.url}${r11links.account}`, text: 'Estado de cuenta', visible: true },
    { url: `${r11links.url}${r11links.reports}`, text: 'Reportes de uso de cuenta', visible: isAdmin && typeAdministrator && canReturn },
    { separator: true },
    { url: `${r12links.url}${r12links.contacto}`, text: 'Datos de contacto', visible: isAdmin && typeAdministrator },
    { url: `${r11links.url}${r11links.personalData}`, text: 'Datos personales', visible: !isAdmin || !typeAdministrator },
    { url: `${r11links.url}${r11links.changePass}`, text: 'Cambiar contraseña', visible: true },
    { url: `${r11links.url}${r11links.users}`, text: 'Administrador de cuenta', visible: validEmail && isAdmin && typeSubadministrator },
    { url: `${links.buscoPersonal}${links.notes}`, text: 'Administrador de notas', visible: false },
    { separator: true },
    { url: `${links.indices}`, text: 'Índices salariales', visible: true },
    { separator: true },
    { url: `${r12links.url}${r12links.ayuda}`, text: 'Ayuda', visible: true },
    { separator: true },
  ],
};

const mobile = {
  linksH: [
    {
      url: cartLink, text: 'Carrito', visible: true, alert: true,
    },
    { url: `${r11links.url}${r11links.chat}`, text: 'Chat', visible: true },
    { separator: true, hide: false },
    { url: `${r11links.url}${r11links.classifications}`, text: 'Clasificaciones de CV\'s', visible: true },
    { url: `${r11links.url}${r11links.notasCV}`, text: 'Notas de CV\'s', visible: true },
    { separator: true },
    { url: `${r11links.url}${r11links.account}`, text: 'Estado de cuenta', visible: true },
    { url: `${r11links.url}${r11links.reports}`, text: 'Reportes de uso de cuenta', visible: isAdmin && typeAdministrator && canReturn },
    { separator: true },
    { url: `${r12links.url}${r12links.contacto}`, text: 'Datos de contacto', visible: isAdmin && typeAdministrator },
    { url: `${r11links.url}${r11links.personalData}`, text: 'Datos personales', visible: !isAdmin || !typeAdministrator },
    { url: `${r11links.url}${r11links.changePass}`, text: 'Cambiar contraseña', visible: true },
    { url: `${r11links.url}${r11links.users}`, text: 'Administrador de cuenta', visible: validEmail && isAdmin && typeSubadministrator },
    { url: `${links.buscoPersonal}${links.notes}`, text: 'Administrador de notas', visible: false },
    { separator: true },
    { url: `${links.indices}`, text: 'Índices salariales', visible: true },
    { separator: true },
    { url: `${r12links.url}${r12links.ayuda}`, text: 'Ayuda', visible: true },
    { separator: true },
  ],
};


storiesOf('Header/Menu', module)
  .add('Default', () => (
    <Menu {...defaultProps} />
  ))
  .add('Cart Has Items', () => (
    <Menu {...cartHasItems} />
  ))
  .add('Mobile', () => (
    <Menu {...mobile} />
  ));
