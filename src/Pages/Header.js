import React from 'react'
import { Grid, Typography, Divider, IconButton } from '@mui/material'
import ImageIcon from '../Components/ImageIcon'
import { Group_639, calender_icon, message_question_icon, notification_icon, search_normal, user_profile_pic } from '../assets/images'

import { IconChevronDown } from '@tabler/icons-react'
import { Menu } from '@mui/icons-material'
const styles = {
    container: {
        height: window.innerWidth > 1000 ? 64.9 : 'auto'
    },

    fontStyle1: {
        fontSize: "15px",
        fontWeight: 600,
        // fontFamily: 'Inter'
    }
}
export default function Header({ handleSidebar, showSidebar }) {
    return (
        <Grid container >
            <Grid container p={2} style={styles.container} alignContent={'start'} flexWrap={'wrap-reverse'} sx={{ gap: { xs: 2, lg: 0, md: 0, sm: 2 } }}>

                <Grid item xs={12} lg={5} md={5} sm={12} container pl={2} alignItems={'center'} pb={1}>

                    <Grid item xs={1} md={1} lg={1} sm={1}>

                        {(showSidebar && window.innerWidth > 780) ? <IconButton onClick={handleSidebar}>
                            <ImageIcon url={Group_639} size="small" />
                        </IconButton> : null}
                    </Grid>
                    <Grid item xs={11} md={10} sm={11} lg={showSidebar && window.innerWidth > 600 ? 10 : 12} ml={1} container gap={2} style={{ borderRadius: 4, backgroundColor: 'whitesmoke' }} p={1}>

                        <ImageIcon url={search_normal} size="small" />
                        <input placeholder='Search for anything...'
                            style={{ outline: 'none', border: 'none', width: '80%', background: 'transparent' }}
                        />
                        {/* <Typography variant="caption" color="gray">Search for anything...</Typography> */}
                    </Grid>

                </Grid>

                <Grid item xs={12} lg={7} md={7} sm={12} container justifyContent={'flex-end'} >

                    <Grid item xs={8} lg={3} md={5} sm={5} container justifyContent={'center'} gap={1} alignItems="center">

                        {(window.innerWidth < 780) ? <IconButton onClick={handleSidebar}>
                            <ImageIcon url={Group_639} size="small" />
                        </IconButton> : null}
                        {[calender_icon, message_question_icon, notification_icon].map((icon, id) =>
                            <IconButton key={id}>
                                <ImageIcon url={icon} size="small" />
                            </IconButton>
                        )}

                    </Grid>
                    <Grid item xs={4} sx={{ display: { xs: "none", md: 'block', lg: 'block', sm: 'block' } }} md={3} lg={3} sm={4} textAlign={'end'} pr={2}>
                        <Typography variant='subtitle2'>Anima Agrawal</Typography>
                        <Typography variant='subtitle2' lineHeight={1}>U.P, India</Typography>
                    </Grid>
                    <Grid item xs={4} md={3} lg={2} sm={3} container alignItems={'center'} justifyContent={'flex-end'}>
                        <ImageIcon url={user_profile_pic} size="large" />
                        <IconButton>
                            <IconChevronDown />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Divider style={{ width: '100%' }} />
        </Grid >
    )
}
