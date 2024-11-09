import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Events } from '~/redux/events/eventTypes'

interface eventState {
  events: Events[]
  loading: boolean
}

const initialState: eventState = {
  events: [],
  loading: true
}

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents(state, action: PayloadAction<Events[]>) {
      state.events = action.payload
    }
  }
})

const { actions, reducer } = eventsSlice

export const { setEvents } = actions

export default reducer
