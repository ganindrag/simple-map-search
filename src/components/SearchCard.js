import { useEffect, useRef } from 'react'
import Card from '@mui/material/Card'
import InputBase from '@mui/material/InputBase'

const SearchCard = ({ mapInstance }) => {
	const inputRef = useRef()

	useEffect(() => {
		const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {})
		autocomplete.addListener('place_changed', () => {
			const place = autocomplete.getPlace()
			mapInstance.setCenter(place.geometry.location)
			mapInstance.setZoom(15)
		})
	})
	return (
		<Card
			sx={{
				display: 'flex',
			}}
		>
			<InputBase
				sx={{ flex: 1, input: { p: '9px 10px 10px 16px' } }}
				placeholder="Search Google Maps"
				inputProps={{ 'aria-label': 'search google maps' }}
				inputRef={inputRef}
			/>
		</Card>
	)
}

export default SearchCard
