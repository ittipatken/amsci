import Grid from '@mui/material/Unstable_Grid2';
import Navbar from '../Navbar';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';

export default function Login() {
    return (
        <>
            <Navbar />
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid xs={6} md={4}>
                    <h1>สมัครเข้าร่วมการแข่งขัน</h1>
                    <p>โปรดสมัครบัญชืผู้ใช้ใหม่ หรือเข้าสู่ระบบ</p>
                    <p>เปิดรับสมัครวันที่ 29 ก.ย. 2565 ท่านสามารถใช้บัญชีผู้ใช้ในการแข่งขันปีที่แล้วได้ หากท่านลืมรหัสผ่าน กรุณาติดต่อคณะกรรมการฯ ผ่าน Facebook page ของการแข่งขัน พร้อมทั้งแจ้ง Email address ที่ใช้</p>
                </Grid>
                <Grid xs={6} md={8}>
                    <FormLogin />
                    <FormRegister />
                </Grid>
            </Grid>
        </>
    );
}