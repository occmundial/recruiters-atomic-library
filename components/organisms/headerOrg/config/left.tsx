import React, { Fragment } from 'react';
import {
  Icon, NavAside, Text, Flexbox, Button, NavItem, Card,
} from '@occmundial/occ-atomic';
import ButtonDropDown from '../../../molecules/buttonDropDown';
import Menu from '../../../molecules/menu';
import { localRoot, r12links, links } from '../config/links';
import '../styles.css';

const asideMenuUnLogged = (menuUnlogged = false, setMenuUnlogged, root = localRoot, tabSelected = 0) => (
  <Fragment>
    <Icon iconName="bars" onClick={() => setMenuUnlogged(true)} />
    <NavAside
      show={menuUnlogged}
      onClose={() => setMenuUnlogged(false)}
      top={(
        <Flexbox display="flex" justifyContent="start" alignItems="start">
          <Text heading>Menú</Text>
        </Flexbox>
      )}
    >
      <div>
        <div className="divButtons">
          <div className="leftElement">
            <Button theme="ghostPink" size="sm" href={`${root.accounts}/${links.newAccount}`}>CREAR CUENTA</Button>
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
        <NavItem selected={tabSelected === 0} className="topTiny" link={`${root.home}/`}>Inicio</NavItem>
        <NavItem selected={tabSelected === 1} className="topTiny" link={`${root.home}/${links.sSight}`}>Productos</NavItem>
        <NavItem selected={tabSelected === 2} className="topTiny" link={`${root.home}/${links.prices}`}>Precios y paquetes</NavItem>
        <NavItem selected={tabSelected === 3} className="topTiny" link={`${root.home}/${links.aboutUs}`}>Acerca de OCCMundial</NavItem>
        <NavItem selected={tabSelected === 4} className="topTiny" link={`${root.home}/${links.faqs}`}>Preguntas Frecuentes</NavItem>
        <NavItem selected={tabSelected === 5} className="topTiny" link={`${links.buscoEmpleo}`}>Busco Empleo</NavItem>
      </div>
    </NavAside>
  </Fragment>
);

const organizationMenu = (menu = false, organization = '', team = '', MenuMobile = false, Menulinks) => (
  <Fragment>
    {organization !== '' && (
      <div>
        <ButtonDropDown
          type="white"
          toggle={menu}
          buttonText={team !== '' ? `${organization} / ${team} ` : `${organization} `}
          arrow
          arrowWidth={14}
          arrowHeight={14}
          arrowLeft={4}
          menuWidth="264px"
          noMenu
          renderComp={(
            <Fragment>
              <Card raised className="cardMenu">
                <Menu mobile={MenuMobile} linksH={Menulinks} />
              </Card>
            </Fragment>
          )}
        />
      </div>
    )}
  </Fragment>
);

export const left = (mobile, logged, tabSelected = 0, root, asideMenu, setAsideMenu, orgMenu = false, organizationName = '', teamName = '', orgMenuLinks = [{}]) => (
  mobile ? (
    logged ? (
      [
        {
          key: 0,
          type: 'logo',
          logo: (
            <a href={`${root.r12}/${r12links.sightMainPage}`}>
              <Icon iconName="occHorizontalGrey" />
            </a>
          ),
        },
      ]
    ) : (
        [
          {
            key: 0,
            type: 'logo',
            logo: (
              asideMenuUnLogged(asideMenu, setAsideMenu, root, tabSelected)
            ),
          },
        ]
      )
  ) : (
      logged ? (
        [
          {
            key: 0,
            type: 'logo',
            logo: (
              <a href={`${root.r12}/${r12links.sightMainPage}`}>
                <Icon iconName="occHorizontalGrey" />
              </a>
            ),
          },
          {
            key: 1,
            type: 'custom',
            custom: organizationMenu(orgMenu, organizationName, teamName, mobile, orgMenuLinks),
          },
        ]
      ) : (
          [
            {
              key: 0,
              type: 'logo',
              logo: (
                <a href={`${root.home}/`}>
                  <Icon iconName="occHorizontalGrey" />
                </a>
              ),
            },
            {
              key: 1,
              type: 'link',
              text: 'Productos',
              link: `${root.home}/${links.sSight}`,
              selected: tabSelected === 1,
            },
            {
              key: 2,
              type: 'link',
              text: 'Precios y paquetes',
              link: `${root.home}/${links.prices}`,
              selected: tabSelected === 2,
            },
            {
              key: 3,
              type: 'link',
              text: 'Acerca de OCCMundial',
              link: `${root.home}/${links.aboutUs}`,
              selected: tabSelected === 3,
            },
            {
              key: 4,
              type: 'link',
              text: 'Preguntas frecuentes',
              link: `${root.home}/${links.faqs}`,
              selected: tabSelected === 4,
            },
          ]
        )
    )
);
