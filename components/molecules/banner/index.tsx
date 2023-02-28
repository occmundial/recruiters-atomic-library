import React from 'react';
import PropTypes from 'prop-types';
import { Flexbox, Text, Icon } from "@occmundial/atomic/components"
import { grid, colors } from "@occmundial/atomic/tokens"
import useStyles from "./styles"
import windowSize from '../../common/useWindowSize';
import BannerProps from './interface';

const Banner = ({
  id, style, className, children, onClose
}: BannerProps) => {
  const width: number = windowSize();
  const classes = useStyles();
  const isMobile = width < grid.xs;
  return (
    <div id={id} className={className} style={style}>
      <Flexbox display="flex" className={classes.container}>
        <Flexbox flex="1" className={classes.textFlex}>
          <Text white small={isMobile} tag="div" className={classes.textBanner}>
            { children }
          </Text>
        </Flexbox>
        <Flexbox className={classes.iconFlex}>
          <Icon iconName="x-o" color={colors.bgWhite} onClick={onClose} className={classes.icon} />
        </Flexbox>
      </Flexbox>
    </div>
  );
};

Banner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onClose: PropTypes.func,
};

Banner.defaultProps = {
  id: '',
  className: '',
  style: {},
  onClose: () => {}
}
export default Banner
