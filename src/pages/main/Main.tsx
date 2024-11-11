import { Box, Typography } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

import styles from '~/pages/main/Main.module.scss'
import palette from '~/styles/app-theme/app.palette'

const Main = () => {
  return (
    <Box className={styles.wrapper}>
      <Box className={styles.clickHere}>
        <ArrowUpwardIcon
          sx={{ color: palette.basic.redPink, width: '40px', height: '40px' }}
          className={styles.arrow}
        />
        <Typography variant='h4'>Click here!</Typography>
      </Box>
      <Box className={styles.title}>
        <Typography variant='h1'>Welcome to the calendar app!</Typography>
        <Typography variant='body1'>
          This is the main page, it will be developed in the future.
        </Typography>
      </Box>
    </Box>
  )
}

export default Main
