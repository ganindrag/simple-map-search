import { useEffect, useRef } from 'react'
import Card from '@mui/material/Card'
import InputBase from '@mui/material/InputBase'
import { useDispatch, useSelector } from 'react-redux'
import { mapsActions } from 'epics/mapsReducer'

const SearchWidget = () => {
	const inputRef = useRef()
	const dispatch = useDispatch()
	const { mapInstance } = useSelector(({ maps }) => maps)

	useEffect(() => {
		const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {})
		if (mapInstance) {
			autocomplete.addListener('place_changed', () => {
				const place = autocomplete.getPlace()

				mapInstance.setCenter(place.geometry.location)
				mapInstance.setZoom(15)

				dispatch({
					type: mapsActions.SAVE_SEARCH,
					payload: {
						address: place.name,
						location: place.geometry.location,
					},
				})
			})
		}
	}, [mapInstance, dispatch])

	return (
		<Card sx={{ display: 'flex' }}>
			<InputBase
				sx={{ flex: 1, input: { p: '9px 10px 10px 16px' } }}
				placeholder="Search Google Maps"
				inputProps={{ 'aria-label': 'search google maps' }}
				inputRef={inputRef}
			/>
		</Card>
	)
}

export default SearchWidget
