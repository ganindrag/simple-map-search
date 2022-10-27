import { createSlice } from '@reduxjs/toolkit'

export const mapsSlicer = createSlice({
	name: 'maps',
	initialState: {
		mapInstance: undefined,
		recentSearch: [],
	},
	reducers: {
		SET_STATE: (state, action) => {
			return { ...state, ...action.payload }
		},
	},
})

export const mapsActions = { ...mapsSlicer.actions, SAVE_SEARCH: 'maps/SAVE_SEARCH' }

export default mapsSlicer.reducer
