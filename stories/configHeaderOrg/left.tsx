import React, { Fragment } from 'react';
import {
  Icon,
  NavAside,
  Text,
  Flexbox,
  Button,
  NavItem,
  Card
} from '@occmundial/occ-atomic';
import ButtonDropDown from './molecules/buttonDropDown';
import Menu from './molecules/menu';
import { localRoot, r12links, links } from './links';
import '../HeaderOrg.css';

const asideMenuUnLogged = (
  menuUnlogged = false,
  setMenuUnlogged,
  root = localRoot,
  tabSelected = 0,
  createAccount
) => (
  <Fragment>
    <Icon iconName="bars" onClick={() => setMenuUnlogged(true)} />
    <NavAside
      show={menuUnlogged}
      onClose={() => setMenuUnlogged(false)}
      top={
        <Flexbox display="flex" justifyContent="start" alignItems="start">
          <Text heading>Menú</Text>
        </Flexbox>
      }
    >
      <div>
        <div className="divButtons">
          <div className="leftElement">
            <Button
              theme="ghostGrey"
              size="sm"
              onClick={() => createAccount()}
            >
              REGÍSTRATE
            </Button>
          </div>
          <Button
            theme="ghostPink"
            size="sm"
            href={`${root.accounts}/${links.loginPage}`}
          >
            INICIA SESIÓN
          </Button>
        </div>
        <div className="verticalSeparator" />
        <NavItem
          selected={tabSelected === 0}
          className="topTiny"
          link={`${root.home}/`}
        >
          Inicio
        </NavItem>
        <NavItem
          selected={tabSelected === 1}
          className="topTiny"
          link={`${root.home}/${links.sSight}`}
        >
          Precios
        </NavItem>
        <NavItem
          selected={tabSelected === 2}
          className="topTiny"
          link={`${links.buscoEmpleo}`}
        >
          Busco empleo
        </NavItem>
      </div>
    </NavAside>
  </Fragment>
);

const logoContainer = (
  width = 146,
  height = 34,
  style: Object,
  iconName: String,
  root
) => (
  <Fragment>
    <div className="logoSpacing">
      <a href={`${root.r12}/${r12links.sightMainPage}`}>
        <Icon width={width} height={height} style={style} iconName={iconName} />
      </a>
    </div>
  </Fragment>
);

const organizationMenu = (
  menu = false,
  organization = '',
  team = '',
  MenuMobile = false,
  Menulinks
) => (
  <Fragment>
    {organization !== '...' && (
      <div>
        <ButtonDropDown
          toggle={menu}
          buttonText={
            team !== '' ? `${organization} / ${team} ` : `${organization} `
          }
          arrow
          arrowWidth={14}
          arrowHeight={14}
          arrowLeft={4}
          noMenu
          renderComp={
            <Fragment>
              <Card raised className="cardOrgMenu">
                <Menu mobile={MenuMobile} linksH={Menulinks} />
              </Card>
            </Fragment>
          }
        />
      </div>
    )}
  </Fragment>
);

export const left = (
  mobile,
  logged,
  tabSelected = 0,
  root,
  asideMenu,
  setAsideMenu,
  orgMenu = false,
  organizationName = '',
  teamName = '',
  orgMenuLinks = [{}],
  createAccount
) =>
  mobile
    ? logged
      ? [
          {
            key: 0,
            type: 'custom',
            custom: logoContainer(
              146,
              34,
              { backgroundRepeat: 'no-repeat' },
              'occHorizontalGrey',
              root
            )
          }
        ]
      : [
          {
            key: 0,
            type: 'logo',
            logo: asideMenuUnLogged(
              asideMenu,
              setAsideMenu,
              root,
              tabSelected,
              createAccount
            )
          }
        ]
    : logged
    ? [
        {
          key: 0,
          type: 'custom',
          custom: logoContainer(
            146,
            34,
            { backgroundRepeat: 'no-repeat' },
            'occHorizontalGrey',
            root
          )
        },
        {
          key: 1,
          type: 'custom',
          custom: organizationMenu(
            orgMenu,
            organizationName,
            teamName,
            mobile,
            orgMenuLinks
          )
        }
      ]
    : [
        {
          key: 0,
          type: 'logo',
          logo: (
            <a href={`${root.home}/`}>
              <Icon iconName="occHorizontalGrey" />
            </a>
          )
        },
        {
          key: 1,
          type: 'link',
          text: 'Inicio',
          link: `${root.home}/`,
          selected: tabSelected === 0
        },
        {
          key: 2,
          type: 'link',
          text: 'Precios',
          link: `${root.home}/${links.sSight}`,
          selected: tabSelected === 1
        }
      ];
