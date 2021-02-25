import React, {
  useState, useEffect, useRef, FC, ReactElement,
} from 'react';
import { Button, Icon, colors } from '@occmundial/occ-atomic';
import classNames from 'classnames';
import './styles.css';

export interface ButtonDropDownProps {
  buttonText: string | ReactElement;
  renderComp: ReactElement;
  type: string;
  mobile?: boolean;
  toggle?: boolean;
  onClose?: Function;
  arrow?: boolean;
  arrowWidth?: number;
  arrowHeight?: number;
  arrowLeft?: number;
  noMenu?: boolean;
  menuWidth?: string;
}

const ButtonDropDown: FC<ButtonDropDownProps> = ({
  toggle = false, renderComp, type, buttonText, mobile = false, arrow = false, onClose, arrowWidth = 14, arrowHeight = 14, arrowLeft = 0, noMenu = false, menuWidth = 'auto',
}: ButtonDropDownProps) => {
  const [show, toggleShow] = useState<boolean>(toggle);
  const [scroll, toggleScroll] = useState<boolean>(false);
  const [previousScroll, togglepreviousScroll] = useState<number>(0);
  const [isMounted, toggleisMounted] = useState<boolean>(toggle);
  const myRef: any = useRef<HTMLDivElement>(null);

  const rotate = (bol: boolean): void => {
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
  const handleClickOutside = (e: Event): void => {
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

  const handleScroll = (): void => {
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
    return (): void => {
      window.removeEventListener('mousedown', handleClickOutside, false);
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, []);

  return (
    <div className="divDefault" ref={myRef}>
      <div
        className={classNames('divText', 'ButtonDropDown')}
        onClick={(): void => rotate(show)}
        role="presentation"
      >
        <div className="divFlex">
          <Button theme={type === 'white' ? 'ghostGrey' : 'tertiaryWhite'} size="sm">{buttonText}</Button>
          {arrow && (
            <Icon
              style={{ marginLeft: arrowLeft }}
              iconName="arrowDown"
              colors={[colors.black]}
              className={show ? 'iconStyleActive' : 'iconStyleDisable'}
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
                scroll ? 'showElementActiveMovScroll' : 'showElementActiveMov',
              ) : classNames(
                scroll ? 'showElementDisableMovScroll' : 'showElementDisableMov',
              )
            }
          >
            {isMounted || show ? renderComp : null}
          </div>
        )
        : (
          <div className={show ? classNames(noMenu && 'noMenu', 'showElementActive') : classNames(noMenu && 'noMenu', 'showElementDisable')} style={{ width: menuWidth }}>
            {isMounted || show ? renderComp : null}
          </div>
        )
      }
    </div>
  );
};

export default ButtonDropDown;
