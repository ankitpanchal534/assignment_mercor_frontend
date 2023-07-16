import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Ellipse_20, Ellipse_21, Group_639, HomeIcon, MessageIcon, SettingIcon, TaskIcon, Union_img, UserProfileIcon, add_square, lamp_on, small_logo } from '../assets/images'
import ImageIcon from '../Components/ImageIcon'
import { Divider, Button, IconButton } from '@mui/material'
import { Brightness1 } from '@mui/icons-material'

const styles = {
    container: {
        border: '1px solid whitesmoke',
        height: '100%'
    },
    bottomBox: {
        width: "206px",
        height: "233px",
        position: 'relative'
    },
    bottomBox1: {
        width: "100%",
        height: "100%",
        // objectFit: 'cover',
        position: 'relative'
    },
    fontStyle1: {
        fontSize: "15px",
        fontWeight: 600,
        // fontFamily: 'Inter'
    }
}
const sidebarItems = [
    {
        title: "Home",
        icon: HomeIcon
    },
    {
        title: "Messages",
        icon: MessageIcon
    },
    {
        title: "Tasks",
        icon: TaskIcon
    },
    {
        title: "Members",
        icon: UserProfileIcon
    },
    {
        title: "Settings",
        icon: SettingIcon
    },


]
const sidebarItems2 = [
    {
        title: "Mobile App",
        color: 'green'
    },
    {
        title: "Website Redesign",
        color: 'orange'
    },
    {
        title: "Design System",
        color: 'gray'
    },
    {
        title: "Wireframes",
        color: 'lightblue'
    },



]


export default function Sidebar({ handleSidebar, hideButton }) {


    return (
        <Grid container style={styles.container} alignContent={'start'} >
            <Grid item xs={12} lg={12} md={12} sm={12} p={1} container justifyContent={'space-between'} alignItems={'center'} style={{ height: 64 }}>
                <div item style={{ display: "flex", paddingLeft: '15px' }}>
                    <ImageIcon url={small_logo} size="small" />
                    <Typography fontWeight={600} ml={1} color={'black'}>Project M.</Typography>
                </div >
                {hideButton ? null : <IconButton onClick={handleSidebar}>
                    <ImageIcon url={Group_639} size="small" />
                </IconButton>}
            </Grid>
            <Divider style={{ width: '100%' }} />
            <Grid xs={12} lg={12} md={12} sm={12} item container p={2} >
                {
                    sidebarItems.map((item, id) => <Grid item xs={12} lg={12} key={id} container alignItems="center" p={1} sx={{
                        cursor: 'pointer',
                        ":hover": {
                            color: 'darkviolet',
                            background: '#5030E514',
                            borderRadius: 2
                        }
                    }} >
                        <ImageIcon url={item?.icon} />
                        <Typography ml={2} variant='subtitle2'>{item?.title}</Typography>
                    </Grid>)
                }
            </Grid>
            <Grid xs={12} lg={12} md={12} sm={12} item p={1} gap={2} container >
                <Divider style={{ width: '100%' }} />
                <Grid xs={12} lg={12} md={12} sm={12} p={1} paddingBottom={'0px'} item container justifyContent={'space-between'} alignItems="center">
                    <span style={{ fontWeight: 600, fontSize: 12 }} >MY PROJECTS</span>
                    <ImageIcon url={add_square} size="small" />
                </Grid>
                <Grid xs={12} lg={12} md={12} sm={12} item container gap={1} p={1} >
                    {
                        sidebarItems2.map((item, id) => <Grid item xs={12} lg={12} key={id} container p={1} alignItems="center"
                            sx={{
                                cursor: 'pointer',
                                ":hover": {
                                    backgroundColor: '#5030E514',
                                    borderRadius: 2,
                                }
                            }} >
                            <Brightness1 style={{ color: item?.color, fontSize: "8px" }} />
                            <Typography ml={1} variant='subtitle2'>{item?.title}</Typography>

                        </Grid>)
                    }
                </Grid>
            </Grid>
            <Grid xs={12} lg={12} md={12} sm={12} item p={1} container justifyContent={'center'} >
                <Grid item xs={12} lg={12} md={12} sm={12} style={styles.bottomBox}  >
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="233" viewBox="0 0 206 233" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M136 33C136 14.7746 121.225 0 103 0C84.7746 0 70 14.7746 70 33H16C7.16344 33 0 40.1634 0 49V217C0 225.837 7.16345 233 16 233H190C198.837 233 206 225.837 206 217V49C206 40.1634 198.837 33 190 33H136Z" fill="#F5F5F5" />
                    </svg> */}

                    <img src={Union_img} style={styles.bottomBox1} />
                    <Grid container style={{ position: 'absolute', textAlign: 'center', top: 0, left: 0 }} justifyContent={'center'} p={1} gap={1}>
                        <Grid item xs={12} lg={12} md={12} sm={12} container justifyContent={'center'} mt={-2.5} ml={-0.5}>
                            <img src={Ellipse_21} alt="Ellipse_20" height="70px" width={'70px'} />
                        </Grid>
                        <Typography style={styles.fontStyle1}>Thoughts Time</Typography>
                        <Typography fontSize="14px" lineHeight={1.2} color='gray' >We don’t have any notice for you, till then you can share your thoughts with your peers.</Typography>
                        <Button variant="contained" fullwidth style={{ backgroundColor: 'white', color: 'black', boxShadow: 'none' }}>
                            Write a message
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
