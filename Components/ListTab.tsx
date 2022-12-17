import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ArticleIcon from '@mui/icons-material/Article';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function ListTab() {
    return (
        <>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArticleIcon />
                                </ListItemIcon>
                                <ListItemText primary="กติกาการแข่งขัน" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArticleIcon />
                                </ListItemIcon>
                                <ListItemText primary="ข้อสอบเก่า" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <FacebookIcon />
                                </ListItemIcon>
                                <ListItemText primary="Facebook" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider />
            </Box>
        </>
    );
}