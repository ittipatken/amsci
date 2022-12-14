import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Grid from '@mui/material/Unstable_Grid2'
import ListTab from './ListTab'
import Navbar from './Navbar'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';


export default function Home() {
  return (
    <div>
      <Navbar />
      การแข่งขันตอบปัญหาวิชาการชีววิทยาและวิทยาศาสตร์การแพทย์ เนื่องในงานสัปดาห์วันอานันทมหิดล ประจำปี 2565
      <Grid container justifyContent="center">
        <Grid xs={6}>
          <ListTab/>
        </Grid>
      </Grid>
      <BottomNavigation showLabels>
      <BottomNavigationAction label="Copyright 2022, IT Division, SMCU" icon={<CopyrightIcon />} />
      </BottomNavigation>
    </div>
  );
}
