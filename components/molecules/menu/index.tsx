import React, { Fragment, FC } from 'react';
import uuid from 'react-uuid';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import { Text, NavItem } from '@occmundial/atomic/components';
import styles from '../../../styles/Menu.module';

const Menu = ({ classes, mobile = false, linksH, logout = () => {} }) => (
  <Fragment>
    {linksH.map((link) => (
      <div key={uuid()} className={link.visible ? classes.cardText : ''}>
        {link.separator && !link.hide && <div key={uuid()} className={mobile ? classes.separatorMobile : classes.separator} />}
        {link.unclickable && (
          <Text key={uuid()} className={classnames(mobile && classes.bottomTiny, link.unclickable && classes.unclickable)}>{link.text}</Text>
        )}
        {link.visible && (
          <NavItem key={uuid()} className={mobile ? classes.bottomTiny : ''} link={link.url || ''} notification={link.alert || false} selected={link.selected}>{link.text || ''}</NavItem>
        )}
      </div>
    ))}
    {logout && (
      <Text secondary className={mobile ? classes.bottomSmall : classes.bottomTiny}>
        <a 
          role="presentation" 
          onClick={() => logout()} 
          className={classes.logout}
          data-testid='header__logout'
        >
          Cerrar sesión
        </a>
      </Text>
    )}
  </Fragment>
);
export default injectSheet(styles)(Menu);
