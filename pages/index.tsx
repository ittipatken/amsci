import Navbar from './Navbar'
import Footer from './Footer'

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
