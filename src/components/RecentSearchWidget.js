import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { useSelector } from 'react-redux'

const RecentSearchWidget = () => {
	const { mapInstance, recentSearch } = useSelector(({ maps }) => maps)

	if (recentSearch.length === 0) {
		return null
	}

	return (
		<Card sx={{ mt: 2, alignItems: 'center', width: '100%' }}>
			<CardHeader
				title="Recent Search"
				titleTypographyProps={{ typography: 'subtitle2' }}
				sx={{ p: '10px 16px' }}
			/>
			<CardContent sx={{ p: 0 }}>
				<nav aria-label="recent search">
					<List disablePadding sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
						{recentSearch.map(({ address, location }, index) => (
							<ListItem disablePadding key={address + index}>
								<ListItemButton onClick={() => mapInstance.setCenter(location)}>
									<ListItemIcon>
										<AccessTimeIcon />
									</ListItemIcon>
									<ListItemText
										primary={address}
										primaryTypographyProps={{
											typography: 'body2',
											noWrap: true,
										}}
									/>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</nav>
			</CardContent>
		</Card>
	)
}

export default RecentSearchWidget
