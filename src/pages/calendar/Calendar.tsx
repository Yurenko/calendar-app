import { Box, Chip, Divider, Typography } from '@mui/material'
import { ChipPropsColorOverrides } from '@mui/material/Chip/Chip'
import { useState } from 'react'
import { Fragment } from 'react/jsx-runtime'

import Month from '~/components/month/Month'
import { filterColors } from '~/constants/colors'
import { eventTypes } from '~/constants/event-types'
import { useAppSelector } from '~/hooks/use-redux'
import styles from '~/pages/calendar/Calendar.module.scss'
import { selectEventSlice } from '~/redux/events/eventSelectors'
import palette from '~/styles/app-theme/app.palette'
import { getMonthName } from '~/utils/getMonthName'
import { getMonthsFromCurrent } from '~/utils/getMonthsFromCurrent'

const Calendar = () => {
  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>([])

  const { events } = useAppSelector(selectEventSlice)

  const toggleEventType = (type: string) => {
    setSelectedEventTypes((prev) =>
      prev.includes(type)
        ? prev.filter((selectedType) => selectedType !== type)
        : [...prev, type]
    )
  }

  const filteredEventsByMonth = getMonthsFromCurrent.map((monthDate) => {
    const monthKey = getMonthName(monthDate).toLowerCase()
    const monthEvents = events[monthKey] || []

    return {
      monthDate,
      events: selectedEventTypes.length
        ? monthEvents.filter((event) => selectedEventTypes.includes(event.type))
        : monthEvents
    }
  })

  return (
    <Box className={styles.wrapper}>
      <Typography variant='h1'>Calendar</Typography>

      <Box className={styles.filterEvents}>
        {eventTypes.map((item) => (
          <Chip
            key={item.label}
            color={item.color as keyof ChipPropsColorOverrides}
            label={item.label}
            sx={{
              cursor: 'pointer',
              color: selectedEventTypes.includes(item.type)
                ? palette.basic.black
                : null,
              backgroundColor: selectedEventTypes.includes(item.type)
                ? filterColors[item.type]
                : null
            }}
            onClick={() => toggleEventType(item.type)}
          />
        ))}
      </Box>

      <Box className={styles.months}>
        {filteredEventsByMonth.map(({ monthDate, events }, index) => (
          <Fragment key={index}>
            <Month
              events={events}
              selectedEventTypes={selectedEventTypes}
              monthDate={monthDate}
            />
            {index !== getMonthsFromCurrent?.length - 1 && (
              <Divider
                flexItem
                orientation={(index + 1) % 3 === 0 ? 'horizontal' : 'vertical'}
                className={
                  (index + 1) % 3 === 0
                    ? styles.horizontalDivider
                    : styles.verticalDivider
                }
              />
            )}
          </Fragment>
        ))}
      </Box>
    </Box>
  )
}

export default Calendar
