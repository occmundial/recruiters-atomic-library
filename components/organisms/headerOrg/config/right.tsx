import React, { Fragment } from 'react';
import { Avatar, Text, Card, NavIcon, Icon } from '@occmundial/occ-atomic';
import classNames from 'classnames';
import ButtonDropDown from '../../../molecules/buttonDropDown';
import Menu from '../../../molecules/menu';
import { localRoot, r11links, links } from '../config/links';

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

const goTo = url => {
  window.location.assign(url);
};

const currentUrl = typeof window === 'undefined' ? '' : window.location;

export const loggedMenu = (
  tabSelected = 0,
  mobile = false,
  root = localRoot,
  referral = '',
  cartHasItems = false,
  chatHasItems = false,
  organizationLinks = [{}],
  isAdmin = false,
  canReturn = false,
  typeAdministrator = false,
  showCounts = false,
  showConfigTabs = false
) => {
  const cartLink = `${root.checkout}/${links.checkout}?utm_source=sight&utm_medium=referral&utm_campaign=${referral}`;
  const planLink = `${root.checkout}/${links.quotation}?utm_source=sight&utm_medium=referral&utm_campaign=${referral}`;
  const menu: Array<link> = [
    {
      url: cartHasItems ? cartLink : planLink,
      text: 'Carrito',
      visible: mobile,
      alert: cartHasItems && showCounts,
      selected: tabSelected === 1
    },
    {
      url: `${root.r11}/${r11links.chat}`,
      text: 'Chat',
      visible: mobile,
      alert: chatHasItems && showCounts,
      selected: tabSelected === 2
    },
    { separator: true, hide: !mobile }
  ];
  if (mobile && organizationLinks.length > 0) {
    menu.push(...organizationLinks, { separator: true, hide: !mobile });
  }
  menu.push(
    {
      url: `${root.accountConfig}/${
        !mobile ? links.profile : ''
      }?returnurl=${currentUrl}`,
      text: 'Configuración de tu cuenta',
      visible: showConfigTabs,
      selected: tabSelected === 3
    },
    { separator: true, hide: !showConfigTabs },
    {
      url: `${root.organizationConfig}/${links.settings}`,
      text: 'Configuración de organización',
      visible: showConfigTabs,
      selected: tabSelected === 4
    },
    {
      url: `${root.r11}/${r11links.account}`,
      text: 'Estado de cuenta',
      visible: isAdmin && typeAdministrator && canReturn,
      selected: tabSelected === 5
    },
    { separator: true, hide: false },
    {
      url: `${root.r11}/${r11links.classifications}`,
      text: "Clasificaciones de CV's",
      visible: true,
      selected: tabSelected === 6
    },
    {
      url: `${root.basics}/${links.notes}`,
      text: "Notas de CV's",
      visible: true,
      selected: tabSelected === 7
    },
    {
      url: `${links.indices}`,
      text: 'Índices salariales',
      visible: false,
      selected: tabSelected === 12
    },
    { separator: true, hide: false },
    {
      url: `${links.ayuda}`,
      text: 'Ayuda',
      visible: true,
      selected: tabSelected === 13
    }
  );
  return menu;
};

const buttonMenu = (
  classes,
  username = '',
  userPhoto = '',
  MenuMobile = true,
  Menulinks,
  Menulogout
) => (
  <Fragment>
    <div className={classes.tabButton}>
      <ButtonDropDown
        buttonText={
          <Avatar name={username} photo={userPhoto && userPhoto} size={32} />
        }
        arrow
        arrowWidth={16}
        arrowHeight={16}
        arrowLeft={6}
        renderComp={
          <Fragment>
            <Card raised className={classes.cardMenu}>
              <Menu
                mobile={MenuMobile}
                linksH={Menulinks}
                logout={Menulogout}
              />
            </Card>
          </Fragment>
        }
      />
    </div>
  </Fragment>
);

const cart = (
  classes,
  cartCount = 0,
  referral = '',
  root = localRoot,
  tabSelected = 0,
  showCounts = false
) => (
  <Fragment>
    <a
      href={
        cartCount > 0
          ? `${root.checkout}/${links.checkout}?utm_source=sight&utm_medium=referral&utm_campaign=${referral}`
          : `${root.checkout}/${links.quotation}?utm_source=sight&utm_medium=referral&utm_campaign=${referral}`
      }
      rel="nofollow"
      id="cart"
    >
      <div title="Carrito" className={classes.cartBtn}>
        <Text
          small
          white
          center
          strong
          id="lblCartCount"
          className={classNames(
            classes.labelCount,
            cartCount > 0 && showCounts && classes.labelCountShow
          )}
        >
          {cartCount < 100 ? cartCount : '99+'}
        </Text>
        <NavIcon
          iconName="cart"
          selected={tabSelected === 1}
          showBar={tabSelected === 1}
        />
      </div>
    </a>
  </Fragment>
);

const getChatItem = (
  classes,
  chatItems = 0,
  root = localRoot,
  tabSelected = 0,
  showCounts = false
) => {
  const hasChats = chatItems > 0;
  const messagesContent = (
    <Fragment>
      <NavIcon
        iconName="messages"
        selected={tabSelected === 2}
        showBar={tabSelected === 2}
      />
      {hasChats && showCounts && (
        <span className={classes.unread}>
          <Text small white center strong>
            {chatItems > 99 ? '99+' : chatItems}
          </Text>
        </span>
      )}
    </Fragment>
  );
  return (
    <div
      className={classes.notifications}
      onClick={() => goTo(`${root.basics}/${links.chat}`)}
      role="presentation"
    >
      {messagesContent}
    </div>
  );
};

const menuBars = (classes, setShowMenu) => (
  <div className={classes.menuBarSpacing}>
    <Icon
      iconName="bars"
      onClick={() => setShowMenu(true)}
      width={18}
      height={18}
    />
  </div>
);

const searchJob = (classes) => (
  <Fragment>
    <div className={classes.separatorSearchJob}>
      <a href={links.buscoEmpleo} className={classes.linkSearchJob}>
        <Text>Busco empleo</Text>
      </a>
    </div>
  </Fragment>
);

export const right = (
  classes,
  mobile,
  logged,
  setShowMenu,
  userName,
  userPhoto,
  menuLinks,
  logout,
  login,
  referral = '',
  cartItems = 0,
  chatItems = 0,
  root = localRoot,
  tabSelected = 0,
  showCounts = false,
  createAccount
) =>
  mobile
    ? logged
      ? [
          {
            key: 0,
            type: 'custom',
            custom: menuBars(classes, setShowMenu)
          }
        ]
      : [
          {
            key: 0,
            type: 'button',
            text: 'INICIA SESIÓN',
            theme: 'ghostGrey',
            onClick: () => login()
          }
        ]
    : logged
    ? [
        {
          key: 0,
          type: 'logo',
          logo: cart(
            classes,
            cartItems,
            referral,
            root,
            tabSelected,
            showCounts
          )
        },
        {
          key: 1,
          type: 'custom',
          custom: getChatItem(classes, chatItems, root, tabSelected, showCounts)
        },
        {
          key: 2,
          type: 'custom',
          custom: buttonMenu(
            classes,
            userName,
            userPhoto,
            mobile,
            menuLinks,
            logout
          )
        }
      ]
    : [
        {
          key: 0,
          type: 'button',
          text: 'REGÍSTRATE',
          theme: 'ghostGrey',
          onClick: () => createAccount()
        },
        {
          key: 1,
          type: 'button',
          text: 'INICIA SESIÓN',
          theme: 'ghostPink',
          onClick: () => login()
        },
        {
          key: 2,
          type: 'custom',
          custom: searchJob(classes)
        }
      ];
