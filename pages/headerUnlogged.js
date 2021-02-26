import {
  Grid,
} from '@occmundial/occ-atomic';
import {
  HeaderOrg
} from '../components/index';

const defaultProps = {
  showCenter: true,
  showCounts: true,
  logged: false,
  showContingency: false,
  userName: 'Moises Rojas',
  email: 'irojas@occ.com.mx',
  logout: () => { },
};

export default function Home() {
  return (
    <Grid>
      <HeaderOrg {...defaultProps} />
    </Grid>
  )
}