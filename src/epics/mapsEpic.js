import { ofType, combineEpics } from 'redux-observable'
import { map } from 'rxjs'
import { mapsActions } from './mapsReducer'

const saveRecentSearchEpic = (action$, state$) =>
	action$.pipe(
		ofType(mapsActions.SAVE_SEARCH),
		map((action) => {
			return {
				type: mapsActions.SET_STATE,
				payload: {
					recentSearch: [...state$.value.maps.recentSearch, action.payload],
				},
			}
		}),
	)

export default combineEpics(saveRecentSearchEpic)
