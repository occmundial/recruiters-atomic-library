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
import ButtonDropDown from '../../../molecules/buttonDropDown';
import Menu from '../../../molecules/menu';
import { localRoot, r12links, links } from '../config/links';

const asideMenuUnLogged = (
  classes,
  menuUnlogged = false,
  setMenuUnlogged,
  root = localRoot,
  tabSelected = 0,
  createAccount,
  login
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
        <div className={classes.divButtons}>
          <div className={classes.leftElement}>
            <Button
              theme="ghostGrey"
              size="sm"
              onClick={() => createAccount()}
              testId='sidebar__signup'
            >
              REGÍSTRATE
            </Button>
          </div>
          <Button
            theme="ghostPink"
            size="sm"
            onClick={() => login()}
            testId='sidebar__signin'
          >
            INICIA SESIÓN
          </Button>
        </div>
        <div className={classes.verticalSeparator} />
        <NavItem
          selected={tabSelected === 0}
          className={classes.topTiny}
          link={`${root.home}/`}
        >
          Inicio
        </NavItem>
        <NavItem
          selected={tabSelected === 1}
          className={classes.topTiny}
          link={`${root.home}/${links.sSight}`}
        >
          Precios
        </NavItem>
        <NavItem
          selected={tabSelected === 2}
          className={classes.topTiny}
          link={`${links.buscoEmpleo}`}
        >
          Busco empleo
        </NavItem>
      </div>
    </NavAside>
  </Fragment>
);

const logoContainer = (
  classes,
  width = 146,
  height = 34,
  style: Object,
  iconName: String,
  root
) => (
  <Fragment>
    <div className={classes.logoSpacing}>
      <a href={`${root.r12}/${r12links.sightMainPage}`}>
        <Icon width={width} height={height} style={style} iconName={iconName} />
      </a>
    </div>
  </Fragment>
);

const organizationMenu = (
  classes,
  organization = '',
  team = '',
  MenuMobile = false,
  Menulinks
) => (
  <Fragment>
    {organization && Menulinks.length ? (
      <div>
        <ButtonDropDown
          buttonText={
            team !== '' ? `${organization} / ${team} ` : `${organization} `
          }
          arrow
          arrowWidth={14}
          arrowHeight={14}
          arrowLeft={4}
          noMenu
          testId='header__user-menu'
          renderComp={
            <Fragment>
              <Card raised className={classes.cardOrgMenu}>
                <Menu mobile={MenuMobile} linksH={Menulinks} />
              </Card>
            </Fragment>
          }
        />
      </div>
    ) : null}
    {organization && !Menulinks.length ? (
      <Text className={classes.organizationName}>
        {team !== '' ? `${organization} / ${team} ` : `${organization} `}
      </Text>
    ) : null}
  </Fragment>
);

export const left = (
  classes,
  mobile,
  logged,
  tabSelected = 0,
  root,
  asideMenu,
  setAsideMenu,
  organizationName = '',
  teamName = '',
  orgMenuLinks = [{}],
  createAccount,
  login,
  isId = false
) =>
  mobile
    ? logged
      ? [
          {
            key: 0,
            type: 'custom',
            custom: logoContainer(
              classes,
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
              classes,
              asideMenu,
              setAsideMenu,
              root,
              tabSelected,
              createAccount,
              login
            )
          }
        ]
    : logged
    ? [
        {
          key: 0,
          type: 'custom',
          custom: logoContainer(
            classes,
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
            classes,
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
            <a id={isId? 'homehirers_inicio_headerlogo': ''} href={`${root.home}/`}>
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
          selected: tabSelected === 1,
          id: isId? 'homehirers_inicio_precios': '',
        }
      ];
