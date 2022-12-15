import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from './Drawer';
import Link from 'next/link';
export default function Navbar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Drawer />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            AMsci
                        </Typography>
                        <Link href="/login">
                        <Button color="inherit">Login</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}