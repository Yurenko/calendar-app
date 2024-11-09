import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface appState {
  loading: boolean
}

const initialState: appState = {
  loading: true
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    }
  }
})

const { actions, reducer } = appSlice

export const { setLoading } = actions

export default reducer
