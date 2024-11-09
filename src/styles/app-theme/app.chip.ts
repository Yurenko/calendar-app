import palette from '~/styles/app-theme/app.pallete'

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
      backgroundColor: palette.basic.redPink,
      color: palette.basic.black
    },
    colorGreen: {
      backgroundColor: palette.basic.brightGreenTransparent,
      color: palette.basic.brightGreen
    },
    colorYellow: {
      backgroundColor: palette.basic.brightOrange,
      color: palette.basic.black
    },
    colorBlue: {
      backgroundColor: palette.basic.lightBlueTransparent,
      color: palette.basic.lightBlue
    }
  }
}
