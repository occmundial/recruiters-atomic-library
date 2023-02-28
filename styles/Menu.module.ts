import { spacing, colors } from '@occmundial/atomic/tokens';

const { tiny, small } = spacing;
const { ink, sec } = colors;
export default {
  separator:  {
    height: '1px',
    background: '#DDDDDD',
    marginBottom: small,
    marginTop: '15px',
  },
  separatorMobile: {
    height: '1px',
    background: '#DDDDDD',
    marginBottom: small,
  },
  link: {
    textDecoration: 'none !important',
    color: `${ink} !important`,
  },
  logout: {
    textDecoration: 'none !important',
    cursor: 'pointer !important',
    color: sec,
  },
  bottomSmall: {
    marginBottom: `${small} !important`
  },
  bottomTiny: {
    marginBottom: `${tiny} !important`,
  },
  unclickable: {
    textDecoration: 'none !important',
    cursor: 'default !important',
    opacity: '0.6 !important',
    '&:hover': {
      textDecoration: 'none !important',
      cursor: 'default !important',
      opacity: '0.6 !important',
    }
  },
  cardText: {
    marginBottom: tiny,
    lineHeight: '1.6',
    letterSpacing: 'normal',
  }
};
