export const r11links = {
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
  termsAndConditions: 'Administracion/Terminos/'
};

export const linksAccountEnv = {
  local: 'returnurl=http://localhost:3002/nueva/?origin=CAJA&type=1',
  dev: 'returnurl=https://master.occdev.com.mx/empresas/vacantes/nueva/?origin=CAJA&type=1',
  prod: 'returnurl=https://www.occ.com.mx/empresas/vacantes/nueva/?origin=CAJA&type=1'
};

export const links = {
  buscoEmpleo:
    'https://www.occ.com.mx/?utm_source=empresas&utm_medium=referral&utm_campaign=header',
  sightJobAdmin: 'vacantes/admin/',
  talent: 'talento/',
  notes: 'herramientas/notas/',
  company: 'empresa/',
  sSight: 'productos/',
  anuncios: 'publicacion-de-vacantes/',
  talentSearch: 'busqueda-de-talento/',
  quotation: 'personaliza-tu-plan/',
  checkout: 'checkout/',
  faqs: 'preguntas-frecuentes/',
  aboutUs: 'acerca-de-occmundial/',
  chat: 'chat/',
  newAccount: 'crear-cuenta/',
  ayuda: 'https://occmundialcommunity.force.com/ayudareclutadores/s/',
  RUE: ' https://www.occ.com.mx/rue/contacto/',
  create: '/api/create',
  billingData: '/datos-facturacion/',
};

export const r12links = {
  sightMainPage: 'actividad/',
  contacto: 'contacto'
};

export const localRoot = {
  home: 'http://localhost:3000',
  checkout: 'http://localhost:5002',
  accounts: 'http://localhost:2000',
  jobAds: 'http://localhost:3002',
  basics: 'http://localhost:3005',
  talentSearch: 'http://localhost:3003',
  candidates: 'http://localhost:3010',
  r12: 'http://localhost:8029',
  r11: 'http://localhost:64660',
  scrappy: 'http://localhost:3020'
};

export const devRoot = {
  home: 'https://master.occdev.com.mx/empresas',
  checkout: 'https://master.occdev.com.mx/empresas/tienda',
  accounts: 'https://master.occdev.com.mx/empresas/cuenta',
  jobAds: 'https://master.occdev.com.mx/empresas/vacantes',
  basics: 'https://master.occdev.com.mx/empresas/herramientas',
  talentSearch: 'https://master.occdev.com.mx/empresas/talento',
  candidates: 'https://master.occdev.com.mx/empresas/candidatos',
  r12: 'https://master.occdev.com.mx/empresas/hirer-center',
  r11: 'http://devrecluta1.occdev.com.mx',
  scrappy: 'https://backendlogin.occdev.com.mx'
};

export const prodRoot = {
  home: 'https://occ.com.mx/empresas',
  checkout: 'https://occ.com.mx/empresas/tienda',
  accounts: 'https://occ.com.mx/empresas/cuenta',
  jobAds: 'https://occ.com.mx/empresas/vacantes',
  basics: 'https://occ.com.mx/empresas/herramientas',
  talentSearch: 'https://occ.com.mx/empresas/talento',
  candidates: 'https://occ.com.mx/empresas/candidatos',
  r12: 'https://occ.com.mx/empresas/hirer-center',
  r11: 'https://recluta11.occ.com.mx',
  scrappy: 'https://scrappy.occ.com.mx'
};

export const getRoot = (
  local: boolean = false,
  dev: boolean = false,
  prod: boolean = false
) => {
  if (local) return localRoot;
  else if (dev) return devRoot;
  else if (prod) return prodRoot;
  else return localRoot;
};

export const dummyOrganizationsAndTeams = (tabSelected = 0) => [
  {
    url: '#',
    text: 'Organización 1',
    unclickable: true
  },
  {
    url: '#',
    text: 'Equipo 1',
    visible: true,
    selected: tabSelected === 1
  },
  {
    url: '#',
    text: 'Equipo 2',
    visible: true,
    selected: tabSelected === 2
  },
  { url: '', separator: true },
  {
    url: '#',
    text: 'Organización 2',
    unclickable: true
  },
  {
    url: '#',
    text: 'Equipo 1',
    visible: true,
    selected: tabSelected === 3
  },
  {
    url: '#',
    text: 'Equipo 2',
    visible: true,
    selected: tabSelected === 4
  },
  { separator: true },
  {
    url: '#',
    text: 'Organización 3',
    unclickable: true
  },
  {
    url: '#',
    text: 'Equipo 1',
    visible: true,
    selected: tabSelected === 5
  },
  {
    url: '#',
    text: 'Equipo 2',
    visible: true,
    selected: tabSelected === 6
  }
];

export const dummyOrganizations = (tabSelected = 0) => [
  {
    url: '#',
    text: 'Organización 1',
    visible: true,
    selected: tabSelected === 1
  },
  {
    url: '#',
    text: 'Organización 2',
    visible: true,
    selected: tabSelected === 2
  },
  {
    url: '#',
    text: 'Organización 3',
    visible: true,
    selected: tabSelected === 3
  }
];
