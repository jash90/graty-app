import React from 'react';
import { Box, Typography } from '@mui/material';

export default function NotFound() {
    return (
        <Box sx={{ display: 'flex', margin: 10, flexDirection: 'row' }} >
            <Box sx={{ display: 'flex', flex: 1, margin: 10, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h3">Strona nie istnieje.</Typography>
            </Box>
        </Box>
    );
}
