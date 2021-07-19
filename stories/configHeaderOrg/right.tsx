import React, { Fragment } from 'react';
import {
  Icon, Avatar, Text, Card, NavIcon,
} from '@occmundial/occ-atomic';
import classNames from 'classnames';
import ButtonDropDown from './molecules/buttonDropDown';
import Menu from './molecules/menu';
import { localRoot, r11links, links } from '../configHeaderOrg/links';
import '../HeaderOrg.css';

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


export const loggedMenu = (tabSelected = 0, mobile = false, root = localRoot, referral = '', cartHasItems = false, chatHasItems = false, organizationLinks = [{}], isAdmin = false, validEmail = false, canReturn = false, typeAdministrator = false, typeSubadministrator = false, showCounts = false) => {
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
      url: ``, text: 'Configuración de tu cuenta', visible: true, selected: tabSelected === 3,
    },
    {
      url: ``, text: 'Buscar trabajo', visible: true, selected: tabSelected === 4,
    },
    { separator: true, hide: false },
    {
      url: ``, text: 'Configuración de organización', visible: true, selected: tabSelected === 5,
    },
    {
      url: ``, text: 'Reportes', visible: isAdmin && typeAdministrator && canReturn, selected: tabSelected === 6,
    },
    { separator: true, hide: false },
    {
      url: ``, text: 'Clasificaciones de CV\'s', visible: true, selected: tabSelected === 7,
    },
    {
      url: `${links.indices}`, text: 'Índices salariales', visible: true, selected: tabSelected === 12,
    },
    { separator: true, hide: false },
    {
      url: `${links.ayuda}`, text: 'Ayuda', visible: true, selected: tabSelected === 13,
    },
  );
  return menu;
};

const buttonMenu = (username = '', userPhoto = '', MenuMobile = true, Menulinks, Menulogout) => (
  <Fragment>
    <div className="tabButton">
      <ButtonDropDown
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

const cart = (cartCount = 0, referral = '', root = localRoot, tabSelected = 0, showCounts = false) => (
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
            "labelCount",
            cartCount > 0 && showCounts && "labelCountShow",
          )}
        >
          {cartCount < 100 ? cartCount : '99+'}
        </Text>
        <NavIcon iconName="cart" selected={tabSelected === 1} showBar={tabSelected === 1} />
      </div>
    </a>
  </Fragment>
);

const getChatItem = (chatItems = 0, root = localRoot, tabSelected = 0, showCounts = false) => {
  const hasChats = chatItems > 0;
  const messagesContent = (
    <Fragment>
      <NavIcon iconName="messages" selected={tabSelected === 2} showBar={tabSelected === 2} />
      {hasChats && showCounts && (
        <span className="unread">
          <Text small white center strong>
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

const menuBars = (setShowMenu) => (
  <div className="menuBarSpacing">
    <Icon iconName="bars" onClick={() => setShowMenu(true)} width={18} height={18}/>
  </div>
);

export const right = (mobile, logged, setShowMenu, userName, userPhoto, menuLinks, logout, login, referral = '', cartItems = 0, chatItems = 0, root = localRoot, tabSelected = 0, showCounts = false) => (
  mobile ? (
    logged ? (
      [
        {
          key: 0,
          type: 'custom',
          custom: menuBars(setShowMenu),
        },
      ]
    ) : (
        [
          {
            key: 0,
            type: 'button',
            text: 'INICIAR SESIÓN',
            theme: 'ghostGrey',
            onClick: () => login()
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
            custom: buttonMenu(userName, userPhoto, mobile, menuLinks, logout),
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
              onClick: () => login()
            },
          ]
        )
    )
);