import React, { Fragment, FC } from 'react';
import uuid from 'react-uuid';
import classnames from 'classnames';
import { Text, NavItem } from '@occmundial/occ-atomic';
import './styles.css';

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

export interface MenuProps {
  mobile?: boolean;
  linksH: Array<link>;
  logout?: Function;
}

const Menu: FC<MenuProps> = ({ mobile = false, linksH, logout }: MenuProps) => (
  <Fragment>
    {linksH.map((link) => (
      <div key={uuid()}>
        {link.separator && !link.hide && <div key={uuid()} className={mobile ? 'separatorMobile' : 'separator'} />}
        {link.unclickable && (
          <Text key={uuid()} className={classnames(mobile && 'bottomTiny', link.unclickable && 'unclickable')}>{link.text}</Text>
        )}
        {link.visible && (
          <NavItem key={uuid()} className={mobile ? 'bottomTiny' : ''} link={link.url || ''} notification={link.alert || false} selected={link.selected}>{link.text || ''}</NavItem>
        )}
      </div>
    ))}
    {logout && (
      <Text secondary className={mobile ? 'bottomSmall' : 'bottomTiny'}>
        <a role="presentation" onClick={(): void => logout()} className="logout">Cerrar sesión</a>
      </Text>
    )}
  </Fragment>
);
export default Menu;
