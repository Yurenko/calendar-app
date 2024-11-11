import { FC, useCallback } from 'react'
import { Events } from '~/redux/events/eventTypes'

interface UseFilteredEventsProps {
  events: Events[]
  selectedEventTypes: string[]
  dotIcon?: boolean
}

const useFilteredEvents = ({
  events,
  selectedEventTypes = [],
  dotIcon = false
}: UseFilteredEventsProps) => {
  return useCallback(
    (date: Date) => {
      const result: Events[] = []

      for (const event of events) {
        const isSameDate =
          new Date(event.date).toDateString() === date.toDateString()
        const isMatchingType =
          selectedEventTypes.length === 0 ||
          selectedEventTypes.includes(event.type)

        if (isSameDate && isMatchingType) {
          if (!dotIcon || !result.some((item) => item.type === event.type)) {
            result.push(event)
          }
        }

        if (result.length >= 4) {
          break
        }
      }
      return result
    },
    [events, selectedEventTypes]
  )
}

export default useFilteredEvents
