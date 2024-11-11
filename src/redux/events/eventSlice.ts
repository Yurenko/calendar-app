import { createSlice } from '@reduxjs/toolkit'

import { mockData } from '~/constants/mock-data'
import { MockData } from '~/redux/events/eventTypes'

interface eventState {
  events: MockData
  loading: boolean
}

const initialState: eventState = {
  events: mockData,
  loading: true
}

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {}
})

const { reducer } = eventsSlice

export default reducer
