import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    email: yup
        .string().required('Enter your email')
        .email().required('Enter a valid email')
        .required().required('Email is required'),
    password: yup
        .string().required('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required().required('Password is required'),
});

export default function FormRegister() {
        const formik = useFormik({
            initialValues: {
                email: 'foobar@example.com',
                password: 'foobar',
            },
            validationSchema: validationSchema,
            onSubmit: (values) => {
                alert(JSON.stringify(values, null, 2));
            },
        });
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
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            required
                            id="outlined-required"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            required
                            id="outlined-password-input"
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        {/* <TextField
                        required
                        id="outlined-password-input"
                        label="Password Confirmation"
                        type="password"
                        autoComplete="current-password"
                        /> */}
                    <Button variant="contained" type="submit">สร้างบัญชีผู้ใช้</Button>
                    </form>
                </Stack>
            </div >
        );
    }