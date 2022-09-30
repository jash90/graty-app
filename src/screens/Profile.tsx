import React from 'react';
import {Box, Typography,} from '@mui/material';
import {QRCodeSVG} from 'qrcode.react';
import {useRecoilValue} from 'recoil';
import {userState} from '../atoms';


export default function Profile() {
    const user: any = useRecoilValue(userState);
    console.log({user})
    return (
        <Box sx={{ display: 'flex', margin: 10, flexDirection: 'row' }} >
            <QRCodeSVG value={user.email} />
            <Typography>{user.lastname}</Typography>
        </Box>
    );
}
