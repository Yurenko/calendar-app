import { FC, ReactNode } from 'react'
import { Popover } from '@mui/material'

interface EventsPopUpProps {
  anchorEl: HTMLElement | null
  handleClose: () => void
  children: ReactNode
}

const EventsPopUp: FC<EventsPopUpProps> = ({
  anchorEl,
  handleClose,
  children
}) => (
  <Popover
    open={Boolean(anchorEl)}
    anchorEl={anchorEl}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left'
    }}
  >
    {children}
  </Popover>
)

export default EventsPopUp
