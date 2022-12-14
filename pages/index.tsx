import Grid from '@mui/material/Unstable_Grid2'
import ListTab from './ListTab'
import Navbar from './Navbar'
import Footer from './Footer'
import { BottomNavigation, BottomNavigationAction, Button } from '@mui/material'
import Drawer from './Drawer';


export default function Home() {
  return (
    <div>
      <Navbar />
      การแข่งขันตอบปัญหาวิชาการชีววิทยาและวิทยาศาสตร์การแพทย์ เนื่องในงานสัปดาห์วันอานันทมหิดล ประจำปี 2565
      {/* <Grid container justifyContent="center">
        <Grid xs={6}>
          <ListTab />
        </Grid>
      </Grid> */}
      <Footer />
    </div>
  );
}
