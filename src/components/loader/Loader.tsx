import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { FC } from 'react'

interface LoaderProps {
  size?: number
}

const Loader: FC<LoaderProps> = ({ size }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }}
    >
      <CircularProgress size={size} />
    </Box>
  )
}

export default Loader
