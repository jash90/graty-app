import React from 'react';
import { Box, Typography, } from '@mui/material';
import QRCode from 'react-qr-code';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms';



export default function Profile() {
    const user:User = useRecoilValue(userState);
    console.log({ user })
    return (
        <Box sx={{ display: 'flex', margin: 10, flexDirection: 'row' }} >
            <QRCode value={user.email} />
            <Typography>{user.lastname}</Typography>

        </Box>
    );
}
