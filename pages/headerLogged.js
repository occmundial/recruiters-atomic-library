import {
  Grid,
} from '@occmundial/occ-atomic';
import {
  HeaderOrg
} from '../components/index';

const defaultProps = {
  showCenter: true,
  logged: true,
  showContingency: false,
  cartItems: 0,
  chatItems: 0,
  userName: 'Moises Rojas',
  userPhoto: '',
  email: 'irojas@occ.com.mx',
  logout: () => { },
  tabSelected: 0,
  organizationTabSelected: 0,
};

export default function Home() {
  return (
    <Grid>
      <HeaderOrg {...defaultProps} cartItems={2} chatItems={2} showCounts />
    </Grid>
  )
}