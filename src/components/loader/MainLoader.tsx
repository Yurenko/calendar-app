import Box from '@mui/material/Box'

import styles from '~/components/loader/MainLoader.module.scss'

const MainLoader = () => {
  return (
    <Box className={styles.wrapper}>
      <Box className={styles.loader} />
    </Box>
  )
}

export default MainLoader
