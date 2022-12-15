import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";

export default function FormRegister() {
    return (
        <div>
            <h1>ยังไม่มีบัญชีผู้ใช้</h1>
            <Stack
                component="form"
                sx={{
                    width: '25ch',
                }}
                spacing={2}
                noValidate
                autoComplete="off"
            >
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password Confirmation"
                    type="password"
                    autoComplete="current-password"
                />
                <Button variant="contained">สร้างบัญชีผู้ใช้</Button>
            </Stack>
        </div >
    );
}