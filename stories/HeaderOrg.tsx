import React, {
  Fragment, FC, useEffect, useState,
} from 'react';
import {
  NavTab, NavAside, Text, grid, Modal, Banner, colors, Avatar, Flexbox,
} from '@occmundial/occ-atomic';
import './HeaderOrg.css';
import { left } from './configHeaderOrg/left';
import { getRoot } from './configHeaderOrg/links';
import { getCookie, setCookie, cookieBanner } from './configHeaderOrg/cookies';
import { top } from './configHeaderOrg/top';
import { center, centerMobile } from './configHeaderOrg/center';
import { right, loggedMenu } from './configHeaderOrg/right';
import Proptypes from 'prop-types';

import windowSize from '../components/common/useWindowSize';
import HeaderMenu from '../components/molecules/menu';

const contingencyModal: string = 'https://cdn-shop.occ.com.mx/recruiters-home-page/img/contingencyModal.png';
export interface HeaderProps {
  /**
   * Shows Cart or Chat counts
   */
  showCounts?: boolean;
  /**
   * Shows middle navigation menu
   */
  showCenter?: boolean;
  /**
   * user is logged or not
   */
  logged?: boolean;
  /**
   * Shows Covid contingency banner
   */
  showContingency?: boolean;
  /**
   * Determines what to do when a user is logged out
   */
  logout: Function;
  /**
   * The number of cart items to be displayed
   */
  cartItems?: number;
  /**
   * The number of chat items to be displayed
   */
  chatItems?: number;
  /**
   * user's userName
   */
  userName?: string;
  /**
   * user's photo
   */
  userPhoto?: string;
  /**
   * user's email
   */
  email?: string;
  /**
   * Determines if header should be displayed for a mobile viewport
   */
  isMobile?: boolean;
  /**
   * Determines which tab is selected in the left/center navigation menu
   */
  tabSelected?: number;
  /**
   * Determines which tab is selected in the right navigation menu
   */
  rightTabSelected?: number;
  /**
   * Determines if the env is local for links
   */
  local?: boolean;
  /**
   * Determines if the env is dev for links
   */
  dev?: boolean;
  /**
   * Determines if the env is prod for links
   */
  prod?: boolean;
  /**
   * External toggle for the orgMenu
   */
  orgMenu?: boolean;
  /**
   * Determines name of the organization
   */
  organizationName?: string;
  /**
   * Determines name of the team
   */
  teamName?: string;
  /**
   * Determines links of the organization menu
   */
  orgMenuLinks?: Array<object>;
  /**
   * Determines referral name for the checkout analytics
   */
  referral?: string;
  /**
   * Determines if the account is an admin
   */
  isAdmin?: boolean;
  /**
   * Determines if the account has a valid email
   */
  validEmail?: boolean;
  /**
   * Determines if the account can return to R11 sections
   */
  canReturn?: boolean;
  /**
   * Determines if the levelAccount is an admin
   */
  typeAdministrator?: boolean;
  /**
   * Determines if the levelAccount is a subAdmin
   */
  typeSubAdministrator?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const HeaderOrg: FC<HeaderProps> = ({
  showCenter = false,
  showCounts = false,
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
    } else {
      setContingency(false);
    }
  }, [showContingency]);

  return (
    <Fragment>
      <NavTab
        top={scroll || logged ? undefined : top(isMobile, getRoot(local, dev, prod))}
        left={left(isMobile, logged, tabSelected, getRoot(local, dev, prod), asideMenu, setAsideMenu, orgMenu, `${organizationName.substr(0,19)}...`, teamName, orgMenuLinks)}
        center={showCenter && center(isMobile, logged, getRoot(local, dev, prod), tabSelected)}
        right={right(
          isMobile,
          logged,
          setShowMenu,
          showMenu,
          userName,
          userPhoto,
          loggedMenu(rightTabSelected, isMobile, getRoot(local, dev, prod), referral, cartItems > 0, chatItems > 0, orgMenuLinks, isAdmin, validEmail, canReturn, typeAdministrator, typeSubAdministrator, showCounts),
          logout,
          referral,
          cartItems,
          chatItems,
          getRoot(local, dev, prod),
          rightTabSelected,
          showCounts,
        )}
        // fixed
        hideOnScroll
      />
      {isMobile && logged && (
        <NavTab
          flexCenter={centerMobile(getRoot(local, dev, prod), tabSelected)}
          // fixed
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
          linksH={loggedMenu(rightTabSelected, isMobile, getRoot(local, dev, prod), referral, cartItems > 0, chatItems > 0, orgMenuLinks, isAdmin, validEmail, canReturn, typeAdministrator, typeSubAdministrator, showCounts)}
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

HeaderOrg.propTypes = {
  /** Shows Cart or Chat counts */
  showCounts: Proptypes.bool,
  /** Shows middle navigation menu */
  showCenter: Proptypes.bool,
  /** user is logged or not */
  logged: Proptypes.bool,
  /** Shows Covid contingency banner */
  showContingency: Proptypes.bool,
  /** Shows Covid contingency banner */
  logout: Proptypes.func.isRequired,
  /** Determines cart items */
  cartItems: Proptypes.number,
  /** Determines chat items */
  chatItems: Proptypes.number,
  /** user's userName  */
  userName: Proptypes.string,
  /** user's photo  */
  userPhoto: Proptypes.string,
   /** user's email  */
  email: Proptypes.string,
  /** Determines if isMobile */
  isMobile: Proptypes.bool,
  /** Determines which tab is selected in the left/center navigation */
  tabSelected: Proptypes.number,
  /** Determines which tab is selected in the right navigation */
  rightTabSelected: Proptypes.number,
  /** Determines if the env is local for links */
  local: Proptypes.bool,
  /** Determines if the env is dev for links */
  dev: Proptypes.bool,
  /** Determines if the env is prod for links */
  prod: Proptypes.bool,
  /** External toggle for the orgMenu */
  orgMenu: Proptypes.bool,
  /** Determines name of the organization */
  organizationName: Proptypes.string,
  /** Determines name of the team */
  teamName: Proptypes.string,
  /** Determines links of the organization menu */
  orgMenuLinks: Proptypes.array,
  /** Determines referral name for the checkout analytics */
  referral: Proptypes.string,
  /** Determines if the account is an admin */
  isAdmin: Proptypes.bool,
  /** Determines if the account has a valid email */
  validEmail: Proptypes.bool,
  /** Determines if the account can return to R11 sections */
  canReturn: Proptypes.bool,
  /** Determines if the levelAccount is an admin*/
  typeAdministrator: Proptypes.bool,
  /** Determines if the levelAccount is a subAdmin*/
  typeSubAdministrator: Proptypes.bool,
};

/**
 * Primary UI component for user interaction
 */
export default HeaderOrg;
