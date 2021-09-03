import { Grid } from '@occmundial/occ-atomic';
import {
  HeaderOrg
} from '../components/index';
import { dummyOrganizations } from '../components/organisms/headerOrg/config/links';

const defaultProps = {
  showCenter: true,
  logged: true,
  showBanner: true,
  messageBanner: 'Ejemplo de texto para el banner',
  showBannerCTA: true,
  messageBannerCTA: 'CTA',
  bannerCTA: () => { alert('¡Action!'); },
  cartItems: 0,
  chatItems: 0,
  userName: 'Moises Rojas',
  userPhoto: 'https://i.imgur.com/I80W1Q0.png',
  email: 'irojas@occ.com.mx',
  logout: () => { },
  login: () => { },
  tabSelected: 0,
  organizationTabSelected: 0,
  showConfigTabs: true,
};

export default function Home() {
  return (
    <Grid>
      <HeaderOrg {...defaultProps} cartItems={101} chatItems={101} showCounts organizationName="NOMBRE DE ORGANIZACIÓN" orgMenuLinks={dummyOrganizations()} />
    </Grid>
  )
}