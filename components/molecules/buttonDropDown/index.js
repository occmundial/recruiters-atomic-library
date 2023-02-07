import React, { useState, useEffect, useRef, FC, ReactElement } from 'react';
import injectSheet from 'react-jss';
import { Text, Icon, colors } from '@occmundial/occ-atomic';
import classNames from 'classnames';
import styles from '../../../styles/ButtonDropDown.module.ts';

const ButtonDropDown = ({
  classes,
  renderComp,
  buttonText,
  mobile = false,
  arrow = false,
  onClose = false,
  arrowWidth = 14,
  arrowHeight = 14,
  arrowLeft = 0,
  noMenu = false,
  testId = '',
  id=''
}) => {
  const [show, toggleShow] = useState(false);
  const [scroll, toggleScroll] = useState(false);
  const [previousScroll, togglepreviousScroll] = useState(0);
  const [isMounted, toggleisMounted] = useState(false);
  const myRef = useRef(null);

  const rotate = bol => {
    toggleShow(!bol);
    if (bol) {
      setTimeout(() => {
        toggleisMounted(!bol);
        if (onClose) onClose();
      }, 300);
    } else {
      toggleisMounted(!bol);
    }
  };
  const handleClickOutside = e => {
    if (myRef.current && !myRef.current.contains(e.target)) {
      toggleShow(false);
      if (show && onClose) onClose();
      setTimeout(() => {
        toggleisMounted(false);
      }, 300);
    }
  };

  const handleScroll = () => {
    if (window.scrollY === 0) {
      togglepreviousScroll(window.scrollY);
      toggleScroll(false);
    } else {
      togglepreviousScroll(window.scrollY);
      toggleScroll(window.scrollY > previousScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside, false);
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside, false);
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, []);

  return (
    <div className={classes.divDefault} ref={myRef}>
      <div
        className={classes.divText}
        onClick={() => rotate(show)}
        data-testid={testId}
        id={id}
        role="presentation"
      >
        <div className={classes.divFlex}>
          <Text className={classes.buttonText}>{buttonText}</Text>
          {arrow && (
            <Icon
              style={{ marginLeft: arrowLeft }}
              iconName="arrowDown"
              colors={[colors.ink]}
              className={
                show ? classes.iconStyleActive : classes.iconStyleDisable
              }
              width={arrowWidth}
              height={arrowHeight}
            />
          )}
        </div>
      </div>
      {mobile ? (
        <div
          className={
            show
              ? classNames(
                  scroll
                    ? classes.showElementActiveMovScroll
                    : classes.showElementActiveMov
                )
              : classNames(
                  scroll
                    ? classes.showElementDisableMovScroll
                    : classes.showElementDisableMov
                )
          }
        >
          {isMounted || show ? renderComp : null}
        </div>
      ) : (
        <div
          className={
            show
              ? classNames(noMenu && classes.noMenu, classes.showElementActive)
              : classNames(noMenu && classes.noMenu, classes.showElementDisable)
          }
        >
          {isMounted || show ? renderComp : null}
        </div>
      )}
    </div>
  );
};

export default injectSheet(styles)(ButtonDropDown);
