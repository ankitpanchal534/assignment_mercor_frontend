import React, { useState } from 'react'
import { IconButton, Grid, Typography, Button, MenuItem, Select } from '@mui/material'
import ImageIcon from '../Components/ImageIcon'
import { UserProfileIcon, add_square_2, avatars_group, calendar_2, edit_icon, filter_icon, link_url, view_type_icon } from '../assets/images'
import { IconChevronDown } from '@tabler/icons-react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



export default function Toolbar() {
    const [selectedFilter, setSelectedFilter] = useState((1))
    const [selectedFilter1, setSelectedFilter1] = useState((1))

    return (
        <Grid container p={2}>
            <Grid item xs={12} lg={6} md={6} sm={12} container alignItems="center" p={1}>
                <Typography id="edit_text_mobile" sx={{ fontSize: { xs: 30, lg: 50, md: 40, sm: 30 }, maxWidth: '80%', textOverflow: 'hidden', overflow: 'hidden' }} fontWeight={600} >Mobile App</Typography>
                <IconButton title='Edit text' onClick={() => {
                    document.getElementById('edit_text_mobile').contentEditable = true
                    document.getElementById('edit_text_mobile').focus()
                }}><ImageIcon url={edit_icon} size="medium" /></IconButton>
                <IconButton><ImageIcon url={link_url} size="medium" /></IconButton>
            </Grid>
            <Grid item xs={12} lg={6} md={6} sm={12} container justifyContent={'flex-end'} alignItems="center" p={2} gap={1}>
                <Button variant="text" style={{ textTransform: 'capitalize', color: '#5030E5' }}><ImageIcon url={add_square_2} size="small" />&nbsp;Invite</Button>
                <img src={avatars_group} style={{ height: 38, width: 120, objectFit: 'contain' }} />
            </Grid>
            <Grid item xs={6} lg={6} md={6} sm={6} container alignItems="center" p={2} gap={2}>

                <div>
                    <Select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} size="small"
                        style={{ borderRadius: 8 }}
                        IconComponent={KeyboardArrowDownIcon}
                    >
                        <MenuItem value={1}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <ImageIcon url={filter_icon} size="small" /> &nbsp;Filter&nbsp;
                            </div>
                        </MenuItem>
                        <MenuItem value={2}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <ImageIcon url={filter_icon} size="small" /> &nbsp;Filter 2&nbsp;
                            </div>
                        </MenuItem>
                        <MenuItem value={3}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <ImageIcon url={filter_icon} size="small" /> &nbsp;Filter 3&nbsp;
                            </div>
                        </MenuItem>
                    </Select>
                </div>
                <div>
                    <Select size="small"
                        style={{ borderRadius: 8 }}
                        value={selectedFilter1} onChange={(e) => setSelectedFilter1(e.target.value)}
                        IconComponent={KeyboardArrowDownIcon}
                    >
                        <MenuItem value={1}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <ImageIcon url={calendar_2} size="small" /> &nbsp;Today&nbsp;
                            </div>
                        </MenuItem>
                        <MenuItem value={2}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <ImageIcon url={calendar_2} size="small" /> &nbsp;This Week&nbsp;
                            </div>
                        </MenuItem>
                        <MenuItem value={3}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <ImageIcon url={calendar_2} size="small" /> &nbsp;This Month&nbsp;
                            </div>
                        </MenuItem>
                    </Select>
                </div>
            </Grid>
            <Grid item xs={6} lg={6} md={6} sm={6} container justifyContent={'flex-end'} alignItems="center" p={2} gap={2}>
                <Button variant='outlined' color='inherit' style={{ textTransform: 'capitalize' }}>
                    <ImageIcon url={UserProfileIcon} size="small" />
                    &nbsp; Share
                </Button>
                <div style={{ borderLeft: '2px solid gray', height: '60%' }}>
                </div>
                <img src={view_type_icon} style={{ height: 38, width: 70, objectFit: 'contain', cursor: 'pointer' }} />
            </Grid>
        </Grid>
    )
}
