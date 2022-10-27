import React, { useRef, useEffect } from 'react'
import googlemapsWrapper from 'hocs/googlemapsWrapper'
import SearchWidget from 'components/SearchWidget'
import RecentSearchWidget from 'components/RecentSearchWidget'
import { useDispatch } from 'react-redux'
import { mapsActions } from 'epics/mapsReducer'

const Maps = () => {
	const mapContainerRef = useRef()
	const controlsRef = useRef()
	const dispatch = useDispatch()

	useEffect(() => {
		const map = new window.google.maps.Map(mapContainerRef.current, {
			center: { lat: -7.472613, lng: 112.667542 },
			zoom: 13,
			disableDefaultUI: true,
		})
		dispatch({
			type: mapsActions.SET_STATE,
			payload: { mapInstance: map },
		})
		map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(controlsRef.current)
	}, [dispatch])

	return (
		<>
			<div style={{ padding: 10, width: 400 }} ref={controlsRef}>
				<SearchWidget />
				<RecentSearchWidget />
			</div>
			<div ref={mapContainerRef} id="map" style={{ width: '100vw', height: '100vh' }}></div>
		</>
	)
}

export default googlemapsWrapper(Maps)
