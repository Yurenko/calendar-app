import palette from '~/styles/app-theme/app.pallete'

export const MuiButton = {
  styleOverrides: {
    root: {
      backgroundColor: palette.basic.redPink,
      color: palette.basic.black,
      padding: '8px 16px',
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '24px',
      '&:hover': {
        backgroundColor: palette.basic.redPinkHover
      }
    }
  }
}
