import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HeaderOrg, { HeaderProps } from './HeaderOrg';
import { dummyOrganizations } from './configHeaderOrg/links';

export default {
  title: 'Organisms/HeaderOrg',
  component: HeaderOrg,
  argTypes: {
    organizationTabSelected: {
      description: 'Determines which organization is selected',
      table: {
        defaultValue: {
          summary: 0
        }
      },
    }
  }
} as Meta;

const Template: Story<HeaderProps> = (args) => <HeaderOrg {...args} />;

const defaultProps = {
  showCenter: true,
  showCounts: true,
  logged: false,
  showContingency: false,
  userName: 'Moises Rojas',
  userPhoto: 'https://i.imgur.com/I80W1Q0.png',
  email: 'irojas@occ.com.mx',
  logout: () => { },
  login: () => { },
  tabSelected: 0,
  organizationTabSelected: 0,
  organizationName: 'NOMBRE DE ORGANIZACIÓN',
  orgMenuLinks: dummyOrganizations(),
};

export const Desktop = Template.bind({});
Desktop.args = defaultProps;
Desktop.parameters = {
  docs: {
    source: {
      type: 'dynamic'
    }
  }
}