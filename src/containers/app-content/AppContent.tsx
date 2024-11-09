import Box from '@mui/material/Box'

import Header from '~/components/header/Header'
import Footer from '~/components/footer/Footer'
import AppMain from '~/containers/layout/app-main/AppMain'

const AppContent = () => {
  return (
    <Box>
      <Header />
      <AppMain />
      <Footer />
    </Box>
  )
}

export default AppContent
