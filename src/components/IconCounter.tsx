import React from 'react';
import { Box, Typography, } from '@mui/material';
import { Casino } from '@mui/icons-material';
import { generateArrayFromNumber } from '../utils/function';

export default function IconCounter({ text, max, count }: { text: string, max: number, count: number }) {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography sx={{ width: 85 }}>{text}</Typography>
            {generateArrayFromNumber(count).map(item =>
                <Casino key={item} />
            )}
            {generateArrayFromNumber(max - count).map(item =>
                <Casino color={'disabled'} key={item} />
            )}
        </Box>
    );
}
