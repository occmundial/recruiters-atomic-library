import React, {
  useState, useEffect, useRef, FC, ReactElement,
} from 'react';
import { Text, Icon, colors } from '@occmundial/occ-atomic';
import classNames from 'classnames';
import styles from '../../../styles/ButtonDropDown.module.css';

const ButtonDropDown = ({
  renderComp, buttonText, mobile = false, arrow = false, onClose, arrowWidth = 14, arrowHeight = 14, arrowLeft = 0, noMenu = false,
}) => {
  const [show, toggleShow] = useState<boolean>(false);
  const [scroll, toggleScroll] = useState<boolean>(false);
  const [previousScroll, togglepreviousScroll] = useState<number>(0);
  const [isMounted, toggleisMounted] = useState<boolean>(false);
  const myRef = useRef<HTMLDivElement>(null);

  const rotate = (bol) => {
    toggleShow(!bol);
    if (bol) {
      setTimeout(
        () => {
          toggleisMounted(!bol);
          if (onClose) onClose();
        },
        300,
      );
    } else {
      toggleisMounted(!bol);
    }
  };
  const handleClickOutside = (e) => {
    if (myRef.current && !myRef.current.contains(e.target)) {
      toggleShow(false);
      if (show && onClose) onClose();
      setTimeout(
        () => {
          toggleisMounted(false);
        },
        300,
      );
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
    <div className={styles.divDefault} ref={myRef}>
      <div
        className={styles.divText}
        onClick={() => rotate(show)}
        role="presentation"
      >
        <div className={styles.divFlex}>
          <Text className={styles.buttonText}>{buttonText}</Text>
          {arrow && (
            <Icon
              style={{ marginLeft: arrowLeft }}
              iconName="arrowDown"
              colors={[colors.black]}
              className={show ? styles.iconStyleActive : styles.iconStyleDisable}
              width={arrowWidth}
              height={arrowHeight}
            />
          )}
        </div>
      </div>
      {mobile
        ? (
          <div
            className={
              show ? classNames(
                scroll ? styles.showElementActiveMovScroll : styles.showElementActiveMov,
              ) : classNames(
                scroll ? styles.showElementDisableMovScroll : styles.showElementDisableMov,
              )
            }
          >
            {isMounted || show ? renderComp : null}
          </div>
        )
        : (
          <div className={show ? classNames(noMenu && styles.noMenu, styles.showElementActive) : classNames(noMenu && styles.noMenu, styles.showElementDisable)}>
            {isMounted || show ? renderComp : null}
          </div>
        )
      }
    </div>
  );
};

export default ButtonDropDown;
