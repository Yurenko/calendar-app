import { TypographyOptions } from '@mui/material/styles/createTypography'
import palette from '~/styles/app-theme/app.pallete'

const appTypography: TypographyOptions = {
  fontFamily: 'Lexend',

  h1: {
    fontWeight: 250,
    fontSize: '40px',
    lineHeight: '40px',
    color: palette.primary.main
  },

  h2: {
    fontWeight: 250,
    fontSize: '32px',
    lineHeight: '32px',
    color: palette.primary.main
  },

  h3: {
    fontWeight: 250,
    fontSize: '20px',
    lineHeight: '20px',
    color: palette.primary.main
  },
  h4: {
    fontWeight: 250,
    fontSize: '20px',
    lineHeight: '28px',
    color: palette.primary.main
  },

  body1: {
    fontWeight: 250,
    fontSize: '16px',
    lineHeight: '20px',
    color: palette.primary.main
  },

  body2: {
    fontWeight: 250,
    fontSize: '14px',
    lineHeight: '20px',
    color: palette.primary.main
  },

  caption: {
    fontWeight: 250,
    fontSize: '14px',
    lineHeight: '14px',
    color: palette.primary.main
  },

  button: {
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '24px',
    textTransform: 'initial',
    color: palette.primary.main
  }
}

export default appTypography
