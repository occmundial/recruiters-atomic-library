import styles from '../styles/Home.module.css'
import {
  Grid, Text,
} from '@occmundial/atomic/components';
import Link from 'next/link';

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
              <Link href="/headerUnlogged">Header Unlogged</Link>
            </Text>
            <Text subheading>
              <Link href="/headerLogged">Header Logged</Link>
            </Text>
            <Text subheading>
              <Link href="/headerLoggedComplete">Header Logged Complete</Link>
            </Text>
            <Text subheading>
              <Link href="/headerR11">Header Logged R11</Link>
            </Text>
          </div>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  )
}
