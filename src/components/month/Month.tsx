import { Box, Typography } from '@mui/material'
import { FC, useState } from 'react'
import Calendar from 'react-calendar'
import EventsPopUp from '~/components/events-pop-up/EventsPopUp'

import useFilteredEvents from '~/hooks/useFilteredEvents'
import { Events } from '~/redux/events/eventTypes'
import styles from '~/components/month/Month.module.scss'
import EventsInformationForPopUp from '~/components/events-information-for-pop-up/EventsInformationForPopUp'
import { isSameMonthAndYear } from '~/utils/isTheSameMonthAndYear'
import { getMonthName } from '~/utils/getMonthName'

interface MonthProps {
  events: Events[]
  selectedEventTypes: string[]
  monthDate: any
}

const Month: FC<MonthProps> = ({ monthDate, events, selectedEventTypes }) => {
  const [activeStartDate, setActiveStartDate] = useState(monthDate)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [dayEvents, setDayEvents] = useState<Events[]>([])

  const monthName = getMonthName(monthDate)
  const getEventsForDay = useFilteredEvents({ events, selectedEventTypes })
  const getEventsDotsForDay = useFilteredEvents({
    events,
    selectedEventTypes,
    dotIcon: true
  })

  const handleDayClick = (date: Date, event: React.MouseEvent<HTMLElement>) => {
    const eventsForDay = getEventsForDay(date)

    if (eventsForDay.length > 0) {
      setAnchorEl(event.currentTarget)
      setDayEvents(eventsForDay)
    } else {
      setAnchorEl(null)
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const dayEvents = getEventsDotsForDay(date)

      if (dayEvents.length > 0 && isSameMonthAndYear(date, activeStartDate)) {
        return (
          <Box className={styles.eventDots}>
            {dayEvents.map((event: Events, index: number) => (
              <Box
                key={index}
                component='span'
                className={`${styles.eventDot} ${event.type}`}
              />
            ))}
          </Box>
        )
      }
    }
    return <Box className={styles.eventDots} />
  }

  return (
    <Box className={styles.wrapper}>
      <Typography variant='h2'>{monthName}</Typography>

      <Calendar
        tileContent={tileContent}
        calendarType='gregory'
        showNavigation={false}
        className={`${styles.month} ${!!anchorEl ? styles.selectedDay : ''}`}
        tileDisabled={({ date, view }) =>
          view === 'month' && !isSameMonthAndYear(date, activeStartDate)
        }
        activeStartDate={activeStartDate}
        onClickDay={(date, event) => handleDayClick(date, event)}
        onActiveStartDateChange={({ activeStartDate }) =>
          setActiveStartDate(activeStartDate || new Date())
        }
      />

      {!!anchorEl && (
        <EventsPopUp anchorEl={anchorEl} handleClose={handleClose}>
          <EventsInformationForPopUp dayEvents={dayEvents} />
        </EventsPopUp>
      )}
    </Box>
  )
}

export default Month
