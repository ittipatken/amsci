import Container from "@mui/material/Container";
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
    return (
        <>
            <Container style={{ position: "fixed", bottom: 0, display: "flex"}}>
                <CopyrightIcon /> Copyright 2022, IT Division, SMCU
            </Container>
        </>
    );
}