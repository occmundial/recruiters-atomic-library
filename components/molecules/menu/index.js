import React, { Fragment, FC } from 'react';
import uuid from 'react-uuid';
import classnames from 'classnames';
import { Text, NavItem } from '@occmundial/occ-atomic';
import styles from '../../../styles/Menu.module.css';

const Menu = ({ mobile = false, linksH, logout }) => (
  <Fragment>
    {linksH.map((link) => (
      <div key={uuid()} className={link.visible ? styles.cardText : ''}>
        {link.separator && !link.hide && <div key={uuid()} className={mobile ? styles.separatorMobile : styles.separator} />}
        {link.unclickable && (
          <Text key={uuid()} className={classnames(mobile && styles.bottomTiny, link.unclickable && styles.unclickable)}>{link.text}</Text>
        )}
        {link.visible && (
          <NavItem key={uuid()} className={mobile ? styles.bottomTiny : ''} link={link.url || ''} notification={link.alert || false} selected={link.selected}>{link.text || ''}</NavItem>
        )}
      </div>
    ))}
    {logout && (
      <Text secondary className={mobile ? styles.bottomSmall : styles.bottomTiny}>
        <a role="presentation" onClick={() => logout()} className={styles.logout}>Cerrar sesión</a>
      </Text>
    )}
  </Fragment>
);
export default Menu;
