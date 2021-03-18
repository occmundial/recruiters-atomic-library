import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HeaderOrg, { HeaderProps } from './HeaderOrg';
import { dummyOrganizations } from './configHeaderOrg/links';

export default {
  title: 'Organisms/HeaderOrg',
  component: HeaderOrg,
} as Meta;

const Template: Story<HeaderProps> = (args) => <HeaderOrg {...args} />;

const defaultProps = {
  showCenter: true,
  showCounts: true,
  logged: false,
  showContingency: false,
  userName: 'Moises Rojas',
  email: 'irojas@occ.com.mx',
  logout: () => { },
  tabSelected: 0,
  organizationTabSelected: 0,
  organizationName: 'Nombre de la organización',
  orgMenuLinks: dummyOrganizations(),
};

export const Desktop = Template.bind({});
Desktop.args = defaultProps;