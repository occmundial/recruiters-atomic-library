import { createUseStyles } from 'react-jss'
import { spacing, colors, grid } from '@occmundial/atomic/tokens';

export default createUseStyles({
  container: { padding: spacing.small, backgroundColor: colors.ink },
  textBanner: { display: 'inline-block' },
  textFlex: {
    textAlign: 'start',
    [`@media screen and (min-width:${grid.xs}px)`]: { textAlign: 'center' },
  },
  iconFlex: { 
      paddingLeft: spacing.small,
      paddingTop: spacing.small,
     [`@media screen and (min-width:${grid.xs}px)`]: { padding: 0 } },
  icon: { cursor: 'pointer' },
});