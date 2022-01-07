import * as React from 'react';
import { AccountCircle } from '@mui/icons-material';
import { Card, Typography, IconButton, Toolbar, Box, AppBar, Button, CardActions, CardContent, TextField, styled } from '@mui/material';

const Line = styled('div')({
    marginTop: 20,
    marginBottom: 20,
    height: 1,
    width: '100%',
    backgroundColor: 'grey'
})

export default function Register() {

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {

    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { sm: 'block' } }}
                    >
                        Graty
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    {/* <Box>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={'primary-search-account-menu'}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box> */}
                </Toolbar>
            </AppBar>
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
        </Box>
    );
}
