import {
  Box,
  Button,
  Chip,
  ChipPropsColorOverrides,
  Divider,
  Typography
} from '@mui/material'
import { FC } from 'react'

import styles from '~/components/events-information-for-pop-up/EventsInformationForPopUp.module.scss'
import { Events } from '~/redux/events/eventTypes'
import palette from '~/styles/app-theme/app.pallete'
import { filterColors } from '~/constants/colors'
import { eventTypes } from '~/constants/event-types'
import Edit from '~/assets/Edit.svg'
import { formatDateWithTime } from '~/utils/formatDateWithTime'

interface EventsInformationForPopUpProps {
  dayEvents: Events[]
}

const EventsInformationForPopUp: FC<EventsInformationForPopUpProps> = ({
  dayEvents
}) => {
  const eventTypeMap = eventTypes.reduce((acc, item) => {
    acc[item.type] = item
    return acc
  }, {} as Record<string, { color: string; label: string }>)

  return (
    <Box className={styles.wrapper}>
      <Typography variant='h2'>Events:</Typography>

      <Box className={styles.listEvents}>
        <Divider flexItem />
        {dayEvents.map((event, index) => (
          <Box key={index}>
            <Box className={styles.information}>
              <Box className={styles.titleBlock}>
                <Typography variant='h4' className={styles.titleEvent}>
                  {event.title}
                </Typography>
                <Box
                  component='img'
                  src={Edit}
                  alt='Edit'
                  sx={{ cursor: 'pointer' }}
                />
              </Box>
              <Typography variant='body2'>{event.description}</Typography>
              <Typography variant='body1' sx={{ color: palette.basic.grey }}>
                {event.location}
              </Typography>
              <Box className={styles.date}>
                <Typography sx={{ color: `${filterColors[event.type]}` }}>
                  {formatDateWithTime(event.date, event.startTime)}
                </Typography>
                <Chip
                  color={
                    eventTypeMap[event.type]
                      ?.color as keyof ChipPropsColorOverrides
                  }
                  className={styles.chip}
                  sx={{
                    padding: '4px 8px',
                    fontSize: '14px',
                    '&:hover': {
                      backgroundColor:
                        'color-mix(in srgb, currentColor 16%, transparent)'
                    }
                  }}
                  label={eventTypeMap[event.type]?.label}
                />
              </Box>
            </Box>
            <Divider flexItem />
          </Box>
        ))}
      </Box>
      <Button sx={{ marginLeft: 'auto' }}>Add event</Button>
    </Box>
  )
}

export default EventsInformationForPopUp
