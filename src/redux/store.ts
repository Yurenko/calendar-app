import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'

import eventsSlice from '~/redux/events/eventSlice'
import appSlice from '~/redux/app/appSlice'

export const store = configureStore({
  reducer: {
    eventsSlice,
    appSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
