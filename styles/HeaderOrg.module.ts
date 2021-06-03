import { spacing, colors } from '@occmundial/occ-atomic';

const { xTiny, tiny, small, gutter, base, large } = spacing;
const { grey200, bgWhite, sec, bgGrey } = colors;
export default {
  verticalSeparator: {
    width: '100%',
    height: '1px',
    backgroundColor: grey200,
    marginBottom: tiny,
  },
  topTiny: {
    marginTop: tiny,
    width: '100%',
  },
  divButtons: {
    display: 'flex',
    backgroundColor: bgWhite,
  },
  leftElement: { width: '100%' },
  cartBtn: { position: 'relative' },
  labelCount: {
    position: 'absolute',
    top: small,
    left: gutter,
    display: 'none',
    borderRadius: `${tiny}px !important`,
    background: sec,
    border: `1px solid ${bgWhite}`,
    width: 'fit-content',
    paddingLeft: xTiny,
    paddingRight: xTiny,
    zIndex: '1',
  },
  labelCountShow: {
    display: 'block'
  },
  tabButton: {
    marginLeft: `${base}px !important`
  },
  cardMenu: {
    right: gutter,
    border: `1px solid ${grey200}`,
    backgroundColor: bgWhite,
    padding: `${base}px !important`
  },
  cardOrgMenu: {
    right: gutter,
    border: `1px solid ${grey200}`,
    backgroundColor: bgWhite,
    padding: `${base}px !important`,
    width: '200px',
  },
  space: {
    width: '100%',
    height: '96px',
    backgroundColor: bgGrey,
    [`@media screen and (max-width:991px)`]: {
      height: '64px',
    },
  },
  spaceLogged: {
    width: '100%',
    height: '64px',
    backgroundColor: bgGrey,
  },
  unread: {
    position: 'absolute',
    borderRadius: tiny,
    width: 'fit-content',
    paddingLeft: xTiny,
    paddingRight: xTiny,
    top: small,
    left: gutter,
    background: sec,
    border: `1px solid ${bgWhite}`,
    cursor: 'pointer',
  },
  notifications: {
    display: 'inline-block',
    position: 'relative',
    marginLeft: base,
    [`@media screen and (max-width:575px)`]: {
      width: large,
      marginLeft: '0',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  logoSpacing: {
    marginRight: base,
  },
  mobileData: {
    marginLeft: tiny
  },
  menuBarSpacing: {
    marginRight: '12px',
  },
  organizationName: {
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
