import { ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { theme } from '~/styles/app-theme/custom-mui.styles'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  )
}

export default App
