import React, {
  Fragment, FC, useEffect, useState,
} from 'react';
import {
  NavTab, NavAside, Text, grid, Modal, Banner, colors, Avatar, Flexbox,
} from '@occmundial/occ-atomic';
import './styles.css';
import { left } from './config/left';
import { getRoot } from './config/links';
import { getCookie, setCookie, cookieBanner } from './config/cookies';
import { top } from './config/top';
import { center, centerMobile } from './config/center';
import { right, loggedMenu } from './config/right';

import windowSize from '../../common/useWindowSize';
import HeaderMenu from '../../molecules/menu';

const contingencyModal: string = 'https://cdn-shop.occ.com.mx/recruiters-home-page/img/contingencyModal.png';
export interface HeaderProps {
  showCartCount?: boolean;
  showCenter?: boolean;
  logged?: boolean;
  showContingency: boolean;
  logout: Function;
  cartItems: number;
  chatItems: number;
  userName?: string;
  userPhoto?: string;
  email?: string;
  showLoggedMenu?: boolean;
  setLoggedMenu: Function;
  loggedMenu: Array<object>;
  isMobile?: boolean;
  tabSelected?: number;
  rightTabSelected?: number;
  local: boolean;
  dev: boolean;
  prod: boolean;
  orgMenu?: boolean;
  organizationName?: string;
  teamName?: string;
  orgMenuLinks?: Array<object>;
  referral?: string;
  isAdmin?: boolean;
  validEmail?: boolean;
  canReturn?: boolean;
  typeAdministrator?: boolean;
  typeSubAdministrator?: boolean;
}

const HeaderOrg: FC<HeaderProps> = ({
  showCenter = false,
  showCartCount = false,
  logged = false,
  showContingency = false,
  cartItems = 0,
  chatItems = 0,
  userName = '',
  email = '',
  userPhoto = '',
  logout,
  isMobile = false,
  tabSelected = 0,
  rightTabSelected = 0,
  local = false,
  dev = false,
  prod = false,
  orgMenu = false,
  organizationName = '',
  teamName = '',
  orgMenuLinks = [],
  typeAdministrator = false,
  typeSubAdministrator = false,
  referral = '',
  isAdmin = false,
  validEmail = false,
  canReturn = false,
}: HeaderProps) => {
  const [scroll, toggleScroll] = useState(false);
  const [contingency, setContingency] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const width: number = windowSize();
  const [showModal, toggleContigencyModal] = useState(false);
  const [asideMenu, setAsideMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (): void => {
    if (window.pageYOffset === 0) {
      toggleScroll(false);
    } else {
      toggleScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showContingency) {
      const cookieBannerValue: string = getCookie(cookieBanner);
      if (cookieBannerValue === null) {
        setContingency(true);
        setCookie(cookieBanner, true, local, dev, prod);
      } else if (cookieBannerValue === 'true') setContingency(true);
    }
  }, [showContingency]);

  useEffect(() => {
    if (showCartCount) setCartCount(cartItems);
  }, [cartItems]);

  return (
    <Fragment>
      <NavTab
        top={scroll || logged ? undefined : top(isMobile, getRoot(local, dev, prod))}
        left={left(isMobile, logged, tabSelected, getRoot(local, dev, prod), asideMenu, setAsideMenu, orgMenu, organizationName, teamName, orgMenuLinks)}
        center={showCenter && center(isMobile, logged, getRoot(local, dev, prod), tabSelected)}
        right={right(
          isMobile,
          logged,
          setShowMenu,
          showMenu,
          userName,
          userPhoto,
          loggedMenu(rightTabSelected, isMobile, getRoot(local, dev, prod), referral, cartItems > 0, chatItems > 0, orgMenuLinks, isAdmin, validEmail, canReturn, typeAdministrator, typeSubAdministrator),
          logout,
          referral,
          cartItems,
          chatItems,
          getRoot(local, dev, prod),
          rightTabSelected,
        )}
        fixed
        hideOnScroll
      />
      {isMobile && logged && (
        <NavTab
          flexCenter={centerMobile(getRoot(local, dev, prod), tabSelected)}
          fixed
          bottom
        />
      )}
      <NavAside
        show={showMenu && (width <= grid.lg - 1)}
        onClose={() => setShowMenu(false)}
        right
        top={(
          <Flexbox display="flex">
            <Avatar name={userName} photo={userPhoto && userPhoto} size={48} />
            <div className="mobileData">
              <Text subheading>{userName}</Text>
              <Text small mid>{email}</Text>
            </div>
          </Flexbox>
        )}
      >
        <HeaderMenu
          mobile={isMobile}
          cartHasItems={cartCount > 0}
          linksH={loggedMenu(rightTabSelected, isMobile, getRoot(local, dev, prod), referral, cartItems > 0, chatItems > 0, orgMenuLinks, isAdmin, validEmail, canReturn, typeAdministrator, typeSubAdministrator)}
          logout={logout}
        />
      </NavAside>
      <div className={logged ? "spaceLogged" : "space"} />
      {contingency && (
        <Banner onClose={(): void => { setCookie(cookieBanner, false, local, dev, prod); setContingency(false); }}>
          <Fragment>
            Estas son las medidas de apoyo a nuestros clientes ante la contingencia del COVID-19.
            <a
              style={{ textDecoration: 'underline', marginLeft: '8px', cursor: 'pointer' }}
              role="presentation"
              onClick={(): void => { toggleContigencyModal(true); }}
            >
              Conócelas aquí
            </a>
          </Fragment>
        </Banner>
      )}
      <Modal
        show={showModal}
        onClose={(): void => { toggleContigencyModal(false); }}
        size="lg"
        imgTop={{
          img: contingencyModal, position: 'center', size: 'cover', color: colors.bgWhite,
        }}
      >
        <div>
          <Text>
            Desde hace 24 años, por empresas como la tuya, es que hoy  somos la bolsa de trabajo en línea líder en México. Has estado con nosotros siempre. Ahora nos toca apoyarte.
          </Text>
          <Text topSmall>
            Es por esto que queremos comunicarte las nuevas y diversas acciones que hemos creado para apoyar a tu compañía en los próximos días:
          </Text>
          <ul>
            <Text topSmall tag="li">
              Nuestros servicios están funcionando al 100% y te atendemos 24/7.
            </Text>
            <Text tag="li">
              Adquiere tus vacantes con hasta 6 meses sin intereses con tarjetas Mastercard y Visa.*
            </Text>
            <Text tag="li">
              Si adquieres nuevos créditos desde nuestro carrito en línea, tendrás 90 días de vigencia para hacer uso de ellos.**
            </Text>
            <Text tag="li">
              Extensión de la visibilidad de vacantes en el sitio por 60 días (el doble de lo habitual).
            </Text>
            <Text tag="li">
              Tips y contenido estratégico para liderar a tu empresa durante la contingencia.
            </Text>
            <Text tag="li">
              Certificación sin costo y 100% en línea sobre el uso de nuestra plataforma.
            </Text>
          </ul>
          <Text topSmall>
            Te invitamos a contactar a tu ejecutivo de cuenta para que juntos, determinemos los apoyos que pueden beneficiar más a tu empresa.
          </Text>
          <Text strong topSmall>
            No te detengas, nosotros no lo hemos hecho.
          </Text>
          <Text strong>
            ¡Continuemos generando empleo y mejores oportunidades a millones de mexicanos, juntos lo vamos a lograr!
          </Text>
          <Text micro topBase low>
            *3 y 6 meses sin intereses disponibles para adquirir desde 2 vacantes hasta 10 vacantes básicas,
            destacadas o premium con tarjeta Visa y Mastercard.
            ** Aplica únicamente en productos adquiridos en línea desde 1 y hasta 10 vacantes. Válido para cualquier tipo de
            vacante: básica, destacada o premium. Vigencia del 1o de julio del 2020 al 31 de diciembre del 2020.
            *** Promoción sujeta a disponibilidad y cambio sin previo aviso.
          </Text>
        </div>
      </Modal>
    </Fragment>
  );
};

export default HeaderOrg;
