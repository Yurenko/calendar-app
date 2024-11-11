import { createTheme } from '@mui/material/styles'

import { MuiButton } from '~/styles/app-theme/app.button'
import { MuiChip } from '~/styles/app-theme/app.chip'
import { MuiDivider } from '~/styles/app-theme/app.divider'
import { MuiPaper } from '~/styles/app-theme/app.paper'
import { MuiTooltip } from '~/styles/app-theme/app.tooltip'
import palette from '~/styles/app-theme/app.palette'
import appTypography from '~/styles/app-theme/app.typography'

export const theme = createTheme({
  palette,
  typography: appTypography,
  components: {
    MuiChip,
    MuiDivider,
    MuiPaper,
    MuiButton,
    MuiTooltip
  }
})
