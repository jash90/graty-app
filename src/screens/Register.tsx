import React from 'react';
import { Typography, Box, Button, TextField, styled } from '@mui/material';

const Line = styled('div')({
    marginTop: 20,
    marginBottom: 20,
    height: 1,
    width: '100%',
    backgroundColor: 'grey'
})

export default function Register() {

    return (
            <Box sx={{ display: 'flex', margin: 20, flexDirection: 'row' }} >
                <Box sx={{ display: 'flex', flex: 1, margin: 10, flexDirection: 'column', alignSelf: 'center' }}>
                    <Typography variant="h2" sx={{ fontWeight: 'bold' }}>GraTy</Typography>
                    <Typography variant="h4" >Blogerzy, youtuberzy, streamerzy i organizatorzy eventów z grami planszowymi, miejskimi oraz terenowymi.</Typography>
                </Box>
                <Box sx={{ display: 'flex', flex: 1, margin: 10, flexDirection: 'column', alignSelf: 'center' }}>
                    <Typography variant="h3" sx={{ alignSelf: 'center', fontWeight: 'bold' }}>Zarejestruj się</Typography>
                    <TextField
                        id="outlined-name"
                        label="Email"
                        sx={{ marginTop: 2, marginBottom: 2 }}
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Password"
                        type="password"
                        sx={{ marginTop: 2, marginBottom: 2 }}
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Repeat Password"
                        type="password"
                        sx={{ marginTop: 2, marginBottom: 2 }}
                    />
                    <Button variant="contained" sx={{ marginTop: 2, marginBottom: 2 }}>
                        Zarejestruj
                    </Button>
                    <Line />
                    <Typography sx={{ alignSelf: 'center', }}>Logując się na stronie akceptujesz regulamin.</Typography>
                </Box>
            </Box>
    );
}
