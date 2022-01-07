import React from 'react';
import { Typography, Toolbar, Box, AppBar, Button, Link } from '@mui/material';

export default function NavigationBar() {

    return (
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
                <Button variant="text" >
                    <Link href="/" sx={{ color: 'white' }}>
                        Strona główna
                    </Link>
                </Button>
                <Button variant="text">
                    <Link href="/register" sx={{ color: 'white' }}>
                        Rejestracja
                    </Link>
                </Button>
                <Button variant="text">
                    <Link href="/addgame" sx={{ color: 'white' }}>
                        Dodaj Grę
                    </Link>
                </Button>
                <Button variant="text" >
                    <Link href="/listgames" sx={{ color: 'white' }}>
                        Lista Gier
                    </Link>
                </Button>
            </Toolbar>
        </AppBar >
    );
}
