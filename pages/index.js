import styles from '../styles/Home.module.css'
import {
  Grid, Text,
} from '@occmundial/occ-atomic';

export default function Home() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Col>
          <div className={styles.main}>
            <Text subheading>
              Repo: <a href="https://github.com/occmundial/recruiters-atomic-library/">Recruiters-Atomic-Library</a>
            </Text>
            <Text subheading>
              <a href="/headerUnlogged">Header Unlogged</a>
            </Text>
            <Text subheading>
              <a href="/headerLogged">Header Logged</a>
            </Text>
          </div>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  )
}
