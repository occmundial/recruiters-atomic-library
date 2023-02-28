import { Grid } from '@occmundial/atomic';
import { HeaderOrg } from '../components/index';

const defaultProps = {
  showCenter: true,
  showCounts: true,
  logged: false,
  showBanner: false,
  userName: 'Hirer Center User',
  email: 'irojas@occ.com.mx',
  dev: true,
  logout: () => {},
  login: () => {}
};

export default function Home() {
  return (
    <Grid>
      <HeaderOrg {...defaultProps} />
    </Grid>
  );
}
