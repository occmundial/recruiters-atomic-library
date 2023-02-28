import { Grid } from '@occmundial/atomic/components';
import {
  HeaderOrg
} from '../components/index';

const defaultProps = {
  showCenter: true,
  logged: true,
  showBanner: false,
  cartItems: 0,
  chatItems: 0,
  userName: 'Hirer Center User',
  userPhoto: '',
  email: 'irojas@occ.com.mx',
  logout: () => { },
  login: () => { },
  tabSelected: 0,
  organizationTabSelected: 0,
};

export default function Home() {
  return (
    <Grid>
      <HeaderOrg {...defaultProps} showCounts />
    </Grid>
  )
}