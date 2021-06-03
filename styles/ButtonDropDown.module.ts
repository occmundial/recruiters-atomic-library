import { spacing } from '@occmundial/occ-atomic';

const { gutter } = spacing;
export default {
  divDefault: { width: 'fit-content' },
  divText: {
    cursor: 'pointer',
    width: 'fit-content',
  },
  noMenu: {
    right: 'auto !important'
  },
  showElementActive: {
    height: 'auto',
    maxHeight: '2000px',
    margin: '8px 0px 0px -46px',
    padding: '0px 0px 46px 56px',
    width: 'fit-content',
    transition: 'all .6s ease, margin-top .8s',
    position: 'absolute',
    right: '0',
    zIndex: '9999',
    transform: 'translateZ(0)',
    overflow: 'visible',
  },
  showElementDisable: {
    height: 'auto',
    maxHeight: '0px',
    margin: '0px 0px 0px -16px',
    padding: '0px 0px 46px 26px',
    overflow: 'visible',
    width: 'auto',
    transition: 'all .3s ease, margin-top .5s',
    position: 'absolute',
    right: '0',
    zIndex: '9999',
  },
  divDefaultMov: { width: '100%' },
  showElementActiveMov: {
    height: 'auto',
    maxHeight: '1000px',
    marginTop: '8px',
    width: '100%',
    maxWidth: '540px',
    transition: 'all .3s ease',
    position: 'fixed',
    right: '0',
    zIndex: '9999',
  },
  showElementActiveMovScroll: {
    height: 'auto',
    maxHeight: '1000px',
    maxWidth: '540px',
    width: '100%',
    transition: 'all .3s ease',
    top: '0px',
    position: 'fixed',
    right: '0px',
    zIndex: '9999',
  },
  showElementDisableMov: {
    height: 'auto',
    maxHeight: '0px',
    marginTop: '0px',
    maxWidth: '540px',
    overflow: 'hidden',
    width: '100%',
    transition: 'all .3s ease',
    position: 'fixed',
    right: '0px',
    zIndex: '9999',
  },
  showElementDisableMovScroll: {
    height: 'auto',
    maxHeight: '0px',
    top: '0px',
    marginTop: '0px',
    maxWidth: '540px',
    overflow: 'hidden',
    width: '100%',
    transition: 'all .3s ease',
    position: 'fixed',
    right: '0px',
    zIndex: '9999',
  },
  divFlex: {
    display: 'flex',
    cursor: 'pointer',
    width: 'auto',
    alignItems: 'center',
  },
  iconStyleActive: {
    transition: 'transform 200ms ease',
    transform: 'rotate(180deg)',
  },
  iconStyleDisable: {
    transition: 'transform 200ms ease',
  },
  buttonText: {
    flexGrow: '0 !important',
    fontFamily: 'HK Grotesk, sans-serif !important',
    fontSize: `${gutter}px !important`,
    fontWeight: '600 !important',
    fontStretch: 'normal !important',
    fontStyle: 'normal !important',
    lineHeight: '2px !important',
    letterSpacing: '0.86px !important',
    textAlign: 'left !important',
    color: '#222222 !important',
  },
};
