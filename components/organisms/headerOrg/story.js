import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Header from '.';
import { dummyOrganizationsAndTeams, dummyOrganizations } from '../headerOrg/config/links';
import styles from '../../../styles/HeaderOrg.module.css';

const defaultProps = {
  showCenter: true,
  showCounts: true,
  logged: false,
  showContingency: false,
  userName: 'Moises Rojas',
  email: 'irojas@occ.com.mx',
  logout: () => { },
};

storiesOf('Header/Unlogged/Desktop', module)
  .add('UnLogged', () => {
    return <Header {...defaultProps} />;
  })
  .add('UnLogged Contingency', () => {
    return <Header {...defaultProps} showContingency={true} />;
  })
  .add('UnLogged TabSelected', () => {
    return <Header {...defaultProps} tabSelected={2} />;
  });

  storiesOf('Header/Unlogged/Mobile', module)
  .add('UnLogged Mobile', () => {
    return <Header {...defaultProps} isMobile/>;
  })
  .add('UnLogged Mobile Contingency', () => {
    return <Header {...defaultProps} isMobile showContingency={true} />;
  })
  .add('UnLogged TabSelected Mobile', () => {
    return <Header {...defaultProps} tabSelected={2} isMobile />;
  });

const defaultPropsLogged = {
  showCenter: true,
  logged: true,
  showContingency: false,
  cartItems: 0,
  chatItems: 0,
  userName: 'Moises Rojas',
  userPhoto: '',
  email: 'irojas@occ.com.mx',
  logout: () => { },
  tabSelected: 0,
  organizationTabSelected: 0,
};

const defaultPropsLoggedOrganization = {
  showCenter: true,
  logged: true,
  showContingency: false,
  cartItems: 0,
  chatItems: 0,
  userName: 'Moises Rojas',
  userPhoto: '',
  email: 'irojas@occ.com.mx',
  logout: () => { },
  tabSelected: 0,
  organizationTabSelected: 0,
  organizationName: 'NOMBRE DE ORGANIZACIÓN',
  orgMenuLinks: dummyOrganizations(),
};

storiesOf('Header/Logged/Desktop', module)
  .add('Logged No organization Name', () => {
    return <Header {...defaultPropsLogged} />;
  })
  .add('Logged organization Name', () => {
    return <Header {...defaultPropsLoggedOrganization} />;
  })
  .add('Logged Selected Organization', () => {
    return <Header {...defaultPropsLoggedOrganization} orgMenuLinks={dummyOrganizations(1)} />;
  })
  .add('Logged Team', () => {
    return <Header {...defaultPropsLoggedOrganization} teamName='Equipo 1' orgMenuLinks={dummyOrganizationsAndTeams()} />;
  })
  .add('Logged Selected Team', () => {
    return <Header {...defaultPropsLoggedOrganization} teamName='Equipo 1' orgMenuLinks={dummyOrganizationsAndTeams(1)} />;
  })
  .add('Logged Cart and Chat Items', () => {
    return <Header {...defaultPropsLoggedOrganization} teamName='Equipo 1' orgMenuLinks={dummyOrganizationsAndTeams()} cartItems={2} chatItems={2} />;
  })
  .add('Logged Cart and Chat Items showCounts', () => {
    return <Header {...defaultPropsLoggedOrganization} teamName='Equipo 1' orgMenuLinks={dummyOrganizationsAndTeams()} cartItems={2} chatItems={2} showCounts />;
  })
  .add('Logged Select Center Menu', () => {
    return <Header {...defaultPropsLoggedOrganization} tabSelected={1} teamName='Equipo 1' orgMenuLinks={dummyOrganizationsAndTeams()} />;
  })
  .add('Logged Select User Menu', () => {
    return <Header {...defaultPropsLoggedOrganization} teamName='Equipo 1' orgMenuLinks={dummyOrganizationsAndTeams()} rightTabSelected={4} />;
  })
  .add('Logged Select Right', () => {
    return <Header {...defaultPropsLoggedOrganization} teamName='Equipo 1' orgMenuLinks={dummyOrganizationsAndTeams()} rightTabSelected={2} />;
  })
  .add('Logged Photo', () => {
    return <Header {...defaultPropsLoggedOrganization} teamName='Equipo 1' orgMenuLinks={dummyOrganizationsAndTeams()} userPhoto='https://i.imgur.com/I80W1Q0.png' />;
  })
  .add('Logged Admin', () => {
    return <Header {...defaultPropsLoggedOrganization} teamName='Equipo 1' orgMenuLinks={dummyOrganizationsAndTeams()} isAdmin typeAdministrator />;
  })
  .add('Logged CanReturn', () => {
    return <Header {...defaultPropsLoggedOrganization} teamName='Equipo 1' orgMenuLinks={dummyOrganizationsAndTeams()} isAdmin typeAdministrator canReturn />;
  })
  .add('Logged validEmail', () => {
    return <Header {...defaultPropsLoggedOrganization} teamName='Equipo 1' orgMenuLinks={dummyOrganizationsAndTeams()} isAdmin typeAdministrator canReturn validEmail />;
  })
  .add('Logged Contigency', () => {
    return <Header {...defaultPropsLoggedOrganization} showContingency={true} />;
  });

storiesOf('Header/Logged/Mobile', module)
  .add('Logged Mobile No organization Name', () => {
    return <Header {...defaultPropsLogged} isMobile />;
  })
  .add('Logged Mobile Organization Name', () => {
    return <Header {...defaultPropsLoggedOrganization} isMobile />;
  })
  .add('Logged Mobile User Photo', () => {
    return <Header {...defaultPropsLoggedOrganization} isMobile userPhoto='https://i.imgur.com/I80W1Q0.png' />;
  })
  .add('Logged Mobile Menu Selection', () => {
    return <Header {...defaultPropsLoggedOrganization} isMobile rightTabSelected={4} />;
  })
  .add('Logged Mobile Organization Selection', () => {
    return <Header {...defaultPropsLoggedOrganization} isMobile orgMenuLinks={dummyOrganizations(1)} />;
  })
  .add('Logged Mobile Organization/Team', () => {
    return <Header {...defaultPropsLoggedOrganization} isMobile orgMenuLinks={dummyOrganizationsAndTeams(1)} />;
  })
  .add('Logged Mobile Organization/Team Selection', () => {
    return <Header {...defaultPropsLoggedOrganization} isMobile orgMenuLinks={dummyOrganizationsAndTeams(1)} />;
  })
  .add('Logged Mobile Chat and Cart items', () => {
    return <Header {...defaultPropsLoggedOrganization} isMobile cartItems={2} chatItems={2} />;
  })
  .add('Logged Mobile Chat and Cart items showCounts', () => {
    return <Header {...defaultPropsLoggedOrganization} isMobile cartItems={2} chatItems={2} showCounts />;
  })
  .add('Logged Mobile Center Selected', () => {
    return <Header {...defaultPropsLoggedOrganization} isMobile tabSelected={2} />;
  })
  .add('Logged Mobile Contigency', () => {
    return <Header {...defaultPropsLoggedOrganization} isMobile showContingency={true} />;
  });
