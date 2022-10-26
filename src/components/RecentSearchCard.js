import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const RecentSearchCard = () => {
	return (
		<Card sx={{ mt: 2, alignItems: 'center', width: '100%' }}>
			<CardHeader
				title="Recent Search"
				titleTypographyProps={{ typography: 'subtitle2' }}
				sx={{ p: '10px 16px' }}
			/>
			<CardContent sx={{ p: 0 }}>
				<nav aria-label="recent search">
					<List disablePadding>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<AccessTimeIcon />
								</ListItemIcon>
								<ListItemText
									primary="sidoarjo"
									primaryTypographyProps={{ typography: 'body2' }}
								/>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<AccessTimeIcon />
								</ListItemIcon>
								<ListItemText
									primary="buduran"
									primaryTypographyProps={{ typography: 'body2' }}
								/>
							</ListItemButton>
						</ListItem>
					</List>
				</nav>
			</CardContent>
		</Card>
	)
}

export default RecentSearchCard
