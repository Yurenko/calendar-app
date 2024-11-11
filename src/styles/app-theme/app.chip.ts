import palette from '~/styles/app-theme/app.palette'

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    purple: true
    green: true
    yellow: true
    blue: true
  }
}

export const MuiChip = {
  styleOverrides: {
    root: {
      fontWeight: 400,
      fontSize: '16px'
    },
    colorPurple: {
      backgroundColor: palette.basic.redPinkTransparent,
      color: palette.basic.redPink,
      '&:hover': {
        backgroundColor: palette.basic.redPinkHover
      }
    },
    colorGreen: {
      backgroundColor: palette.basic.brightGreenTransparent,
      color: palette.basic.brightGreen,
      '&:hover': {
        backgroundColor: palette.basic.brightGreenHover
      }
    },
    colorYellow: {
      backgroundColor: palette.basic.brightOrangeTransparent,
      color: palette.basic.brightOrange,
      '&:hover': {
        backgroundColor: palette.basic.brightOrangeHover
      }
    },
    colorBlue: {
      backgroundColor: palette.basic.lightBlueTransparent,
      color: palette.basic.lightBlue,
      '&:hover': {
        backgroundColor: palette.basic.lightBlueHover
      }
    }
  }
}
