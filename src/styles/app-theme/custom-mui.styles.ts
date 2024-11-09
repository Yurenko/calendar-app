import { createTheme } from '@mui/material/styles'
import { MuiChip } from '~/styles/app-theme/app.chip'

import palette from '~/styles/app-theme/app.pallete'
import appTypography from '~/styles/app-theme/app.typography'

export const theme = createTheme({
  palette,
  typography: appTypography,
  components: {
    MuiChip
  }
})
