import { Wrapper as MapsWrapper } from '@googlemaps/react-wrapper'

const googlemapsWrapper = (WrappedComponent) => {
	return ({ children, ...props }) => (
		<MapsWrapper apiKey={process.env.REACT_APP_GoogleAPIKey} libraries={['places']}>
			<WrappedComponent {...props}>{children}</WrappedComponent>
		</MapsWrapper>
	)
}

export default googlemapsWrapper
