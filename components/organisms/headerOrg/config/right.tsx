import React, { Fragment } from 'react';
import {
  Avatar, Text, Card, NavIcon, 
} from '@occmundial/occ-atomic';
import classNames from 'classnames';
import ButtonDropDown from '../../../molecules/buttonDropDown';
import Menu from '../../../molecules/menu';
import { localRoot, r12links, r11links, links } from '../config/links';
import '../styles.css';

interface link {
  url?: string;
  text?: string;
  separator?: boolean;
  hide?: boolean;
  visible?: boolean;
  alert?: boolean;
  selected?: boolean;
  unclickable?: boolean;
}

const goTo = (url) => {
  window.location.assign(url);
};


export const loggedMenu = (tabSelected = 0, mobile = false, root = localRoot, referral = '', cartHasItems = false, chatHasItems = false, organizationLinks=[{}], isAdmin = false, validEmail = false, canReturn = false, typeAdministrator = false, typeSubadministrator = false, showCounts = false) => {
  const cartLink = `${root.checkout}/${links.checkout}?utm_source=sight&utm_medium=referral&utm_campaign=${referral}`;
  const planLink = `${root.checkout}/${links.quotation}?utm_source=sight&utm_medium=referral&utm_campaign=${referral}`;
  const menu: Array<link> = [
    {
      url: cartHasItems ? cartLink : planLink, text: 'Carrito', visible: mobile, alert: cartHasItems && showCounts, selected: tabSelected === 1,
    },
    {
      url: `${root.r11}/${r11links.chat}`, text: 'Chat', visible: mobile, alert: chatHasItems && showCounts, selected: tabSelected === 2,
    },
    { separator: true, hide: !mobile },
  ];
  if (mobile && organizationLinks.length > 0) {
    menu.push(
      ...organizationLinks,
      { separator: true, hide: !mobile },
    );
  }
  menu.push(
    {
      url: `${root.r11}/${r11links.classifications}`, text: 'Clasificaciones de CV\'s', visible: true, selected: tabSelected === 3,
    },
    {
      url: `${root.r11}/${r11links.notasCV}`, text: 'Notas de CV\'s', visible: true, selected: tabSelected === 4,
    },
    { separator: true, hide: false },
    {
      url: `${root.r11}/${r11links.account}`, text: 'Estado de cuenta', visible: true, selected: tabSelected === 5,
    },
    {
      url: `${root.r11}/${r11links.reports}`, text: 'Reportes de uso de cuenta', visible: isAdmin && typeAdministrator && canReturn, selected: tabSelected === 6,
    },
    { separator: true, hide: false },
    {
      url: `${root.r11}/${r12links.contacto}`, text: 'Datos de contacto', visible: isAdmin && typeAdministrator, selected: tabSelected === 7,
    },
    {
      url: `${root.r11}/${r11links.personalData}`, text: 'Datos personales', visible: !isAdmin || !typeAdministrator, selected: tabSelected === 8,
    },
    {
      url: `${root.r11}/${r11links.changePass}`, text: 'Cambiar contraseña', visible: true, selected: tabSelected === 9,
    },
    {
      url: `${root.r11}/${r11links.users}`, text: 'Administrador de cuenta', visible: validEmail && isAdmin && (typeAdministrator || typeSubadministrator), selected: tabSelected === 10,
    },
    {
      url: `${root.basics}/${links.notes}`, text: 'Administrador de notas', visible: false, selected: tabSelected === 11,
    },
    { separator: true, hide: false },
    {
      url: `${links.indices}`, text: 'Índices salariales', visible: true, selected: tabSelected === 12,
    },
    { separator: true, hide: false },
    {
      url: `${links.ayuda}`, text: 'Ayuda', visible: true, selected: tabSelected === 13,
    },
    { separator: true, hide: false },
  );
  return menu;
};

const buttonMenu = (menu = false, username = '', userPhoto = '', MenuMobile = true, Menulinks, Menulogout) => (
  <Fragment>
    <div className="tabButton">
      <ButtonDropDown
        type="white"
        toggle={menu}
        buttonText={<Avatar name={username} photo={userPhoto && userPhoto} size={32} />}
        arrow
        arrowWidth={24}
        arrowHeight={24}
        renderComp={(
          <Fragment>
            <Card raised className="cardMenu">
              <Menu mobile={MenuMobile} linksH={Menulinks} logout={Menulogout} />
            </Card>
          </Fragment>
        )}
      />
    </div>
  </Fragment>
);

const cart = (cartCount = 0, referral = '', root=localRoot, tabSelected = 0, showCounts = false,) => (
  <Fragment>
    <a
      href={cartCount > 0 ? `${root.checkout}/${links.checkout}?utm_source=sight&utm_medium=referral&utm_campaign=${referral}`
        : `${root.checkout}/${links.quotation}?utm_source=sight&utm_medium=referral&utm_campaign=${referral}`}
      rel="nofollow"
      id="cart"
    >
      <div title="Carrito" className="cartBtn">
        <Text
          small
          white
          center
          strong
          id="lblCartCount"
          className={classNames(
            'labelCount',
            cartCount > 0 && showCounts && 'labelCountShow',
          )}
        >
          {cartCount < 100 ? cartCount : '99'}
        </Text>
        <NavIcon iconName="cart" selected={tabSelected === 1} showBar={tabSelected === 1} />
      </div>
    </a>
  </Fragment>
);

const getChatItem = (chatItems = 0, root=localRoot, tabSelected = 0, showCounts = false) => {
  const hasChats = chatItems > 0;
  const messagesContent = (
    <Fragment>
      <NavIcon iconName="messages" selected={tabSelected === 2} showBar={tabSelected === 2} />
      {hasChats && showCounts && (
        <span className="unread">
          <Text micro white center strong>
            {chatItems > 99 ? '99+' : chatItems}
          </Text>
        </span>
      )}
    </Fragment>
  );
  return (
    <div
      className="notifications"
      onClick={() => goTo(`${root.basics}/${links.chat}`)}
      role="presentation"
    >
      {messagesContent}
    </div>
  );
};

export const right = (mobile, logged, setShowMenu, showMenu, userName, userPhoto, menuLinks, logout, referral = '', cartItems = 0, chatItems = 0, root= localRoot, tabSelected = 0, showCounts = false,) => (
  mobile ? (
    logged ? (
      [
        {
          key: 0,
          type: 'icon',
          iconName: 'bars',
          onClick: () => setShowMenu(true),
        },
      ]
    ) : (
      [
        {
          key: 0,
          type: 'button',
          text: 'INICIAR SESIÓN',
          theme: 'ghostGrey',
          href: `${root.accounts}/${links.loginPage}`,
        },
      ]
    )
  ) : (
    logged ? (
      [
        {
          key: 0,
          type: 'logo',
          logo: cart(cartItems, referral, root, tabSelected, showCounts),
        },
        {
          key: 1,
          type: 'custom',
          custom: getChatItem(chatItems, root, tabSelected, showCounts),
        },
        {
          key: 2,
          type: 'custom',
          custom: buttonMenu(showMenu, userName, userPhoto, mobile, menuLinks, logout),
        },
      ]
    ) : (
      [
        {
          key: 0,
          type: 'button',
          text: 'CREAR CUENTA',
          theme: 'ghostPink',
          href: `${root.accounts}/${links.newAccount}`,
        },
        {
          key: 1,
          type: 'button',
          text: 'INICIAR SESIÓN',
          theme: 'ghostGrey',
          href: `${root.accounts}/${links.loginPage}`,
        },
      ]
    )
  )
);