import Box from '@mui/material/Box'
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
    return (
        <>
            <Box maxWidth="lg" style={{ position: "fixed", bottom: 0, display: "flex" }}>
                <CopyrightIcon /> Copyright 2022, IT Division, SMCU
            </Box>
        </>
    );
}