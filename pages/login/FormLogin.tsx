import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";

export default function FormLogin() {
    return (
        <div>
            <h1>มีบัญชีผู้ใช้แล้ว</h1>
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
                <Button variant="contained">เข้าสู่ระบบ</Button>
            </Stack>
        </div >
    );
}