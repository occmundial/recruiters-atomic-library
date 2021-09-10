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
import { IEnviroments, getCreateAccountUrl } from '../../scripts/common';

const asideMenuUnLogged = (
  menuUnlogged = false,
  setMenuUnlogged,
  root = localRoot,
  tabSelected = 0,
  enviroments: IEnviroments = { local: true }
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
              theme="ghostPink"
              size="sm"
              href={`${root.accounts}/${links.newAccount}${getCreateAccountUrl(
                enviroments
              )}`}
            >
              CREAR CUENTA
            </Button>
          </div>
          <Button
            theme="ghostGrey"
            size="sm"
            href={`${root.accounts}/${links.loginPage}`}
          >
            INICIAR SESIÓN
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
          Productos
        </NavItem>
        <NavItem
          selected={tabSelected === 2}
          className="topTiny"
          link={`${root.home}/${links.aboutUs}`}
        >
          Acerca de OCCMundial
        </NavItem>
        <NavItem
          selected={tabSelected === 3}
          className="topTiny"
          link={`${root.home}/${links.faqs}`}
        >
          Preguntas Frecuentes
        </NavItem>
        <NavItem
          selected={tabSelected === 4}
          className="topTiny"
          link={`${links.buscoEmpleo}`}
        >
          Busco Empleo
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
  enviroments: IEnviroments = { local: true }
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
              enviroments
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
          text: 'Productos',
          link: `${root.home}/${links.sSight}`,
          selected: tabSelected === 1
        },
        {
          key: 2,
          type: 'link',
          text: 'Acerca de OCCMundial',
          link: `${root.home}/${links.aboutUs}`,
          selected: tabSelected === 2
        },
        {
          key: 3,
          type: 'link',
          text: 'Preguntas frecuentes',
          link: `${root.home}/${links.faqs}`,
          selected: tabSelected === 3
        }
      ];
