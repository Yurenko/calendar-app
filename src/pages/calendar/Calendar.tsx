import { Box, Chip, Typography } from '@mui/material'
import { ChipPropsColorOverrides } from '@mui/material/Chip/Chip'

import styles from '~/pages/calendar/Calendar.module.scss'

const eventTypes = [
  { label: 'Meeting with an expert', color: 'purple' },
  { label: 'Question-answer', color: 'green' },
  { label: 'Conference', color: 'yellow' },
  { label: 'Webinar', color: 'blue' }
]

const Calendar = () => {
  return (
    <Box className={styles.wrapper}>
      <Typography variant='h1'>Calendar</Typography>
      <Box className={styles.filterEvents}>
        {eventTypes.map((item) => (
          <Chip
            key={item.label}
            color={item.color as keyof ChipPropsColorOverrides}
            label={item.label}
            sx={{ cursor: 'pointer' }}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Calendar
