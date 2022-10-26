import React, { useRef, useEffect, useState } from 'react'
import SearchCard from 'components/SearchCard'
import RecentSearchCard from 'components/RecentSearchCard'

const Maps = () => {
	const divMapRef = useRef()
	const cardsRef = useRef()
	const [mapInstance, setMapInstance] = useState()

	useEffect(() => {
		const map = new window.google.maps.Map(divMapRef.current, {
			center: { lat: -7.472613, lng: 112.667542 },
			zoom: 13,
			disableDefaultUI: true,
		})
		setMapInstance(map)
		map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(cardsRef.current)
	}, [])

	return (
		<>
			<div style={{ padding: 10, width: 400 }} ref={cardsRef}>
				<SearchCard mapInstance={mapInstance} />
				<RecentSearchCard />
			</div>
			<div ref={divMapRef} id="map" style={{ width: '100vw', height: '100vh' }}></div>
		</>
	)
}

export default Maps
