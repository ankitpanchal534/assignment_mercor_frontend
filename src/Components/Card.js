import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Chip, Grid, IconButton, Typography } from '@mui/material';
import ImageIcon from './ImageIcon';
import { folder_2_hpqniu, message_mkdi8x } from '../assets/images';

const CustomChip = (props) => {
    const { chipType } = props;
    const colors = {
        Completed: "#83C29D33",
        High: "#D8727D1A",
        Low: '#DFA87433',
    }
    const colors1 = {
        Completed: "success",
        High: "error",
        Low: 'warning',
    }
    return (<Chip style={{ borderRadius: '4px', background: colors[chipType], border: 'none' }} variant='outlined' color={colors1[chipType]} size='small' label={chipType} />)
}
let userImages = [
    'https://res.cloudinary.com/dfegprdja/image/upload/v1687070958/kanban-clone/Ellipse_12_ioshbq.png',
    'https://res.cloudinary.com/dfegprdja/image/upload/v1687071064/kanban-clone/Ellipse_14_yvjn5y.png',
    'https://res.cloudinary.com/dfegprdja/image/upload/v1687071065/kanban-clone/Ellipse_15_vskmol.png',
    'https://res.cloudinary.com/dfegprdja/image/upload/v1687071065/kanban-clone/Ellipse_13_dguqst.png'
]

const Card = ({ item, index }) => {
    return (
        <Grid container style={{ color: 'black' }}>
            <Grid item container xs={12} md={12} justifyContent={'space-between'} alignItems={'center'}>
                <CustomChip chipType={item.chip} />
                <IconButton size='small' style={{ fontWeight: 'bold', color: 'black' }} >...</IconButton >
            </Grid>
            <Grid item container xs={12} md={12}>
                <Grid item container>
                    <Typography fontWeight={600} fontSize={20} >{item?.head}</Typography>
                </Grid>
                {item?.taskImage ?
                    <Grid>
                        <img alt="task" src={item?.taskImage} width={'100%'} style={{ objectFit: 'contain', borderRadius: 12 }} />
                    </Grid>
                    : <Grid>
                        <Typography variant='caption' fontSize={13} lineHeight={1} color={'gray'}>{item?.Task}</Typography>
                    </Grid>}
            </Grid>
            <Grid container>
                <Grid item xs={12} md={12} sm={12} lg={12} container justifyContent={'space-between'} alignItems={'center'} pt={2}>
                    <Grid item xs={3} lg={3} md={3} container alignItems={'center'}  >
                        <AvatarGroup>
                            {
                                item?.images?.map((item, index) => {
                                    return (
                                        <Avatar sx={{ width: 24, height: 24 }} alt="Avatar" src={userImages[item]} />
                                    )
                                })
                            }
                        </AvatarGroup>
                    </Grid>

                    <Grid item xs={9} lg={9} md={9} container alignItems={'center'} gap={1} justifyContent={'flex-end'}>
                        <Grid item xs={6} lg={6} md={6} container alignItems={'center'} >
                            <ImageIcon url={message_mkdi8x} size="small" />
                            &nbsp;<Typography variant='caption' fontSize={11}>{item?.comments} comments</Typography>

                        </Grid>
                        <Grid item xs={4} lg={4} md={4} container alignItems={'center'} >
                            <ImageIcon url={folder_2_hpqniu} size="small" />
                            &nbsp;<Typography variant='caption' fontSize={11}>{item?.files} files</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid >
    );
};

export default Card;
