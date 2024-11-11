import Box from '@mui/material/Box'

import Header from '~/components/header/Header'
import Footer from '~/components/footer/Footer'
import AppMain from '~/containers/layout/app-main/AppMain'
import styles from '~/containers/app-content/AppContent.module.scss'

const AppContent = () => {
  return (
    <Box className={styles.wrapper}>
      <Header />
      <AppMain />
      <Footer />
    </Box>
  )
}

export default AppContent
