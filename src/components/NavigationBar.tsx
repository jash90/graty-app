import React from 'react';
import { Typography, Toolbar, Box, AppBar} from '@mui/material';
import ButtonLink from './ButtonLink';

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
                <ButtonLink to="/">
                    Strona główna
                </ButtonLink>
                <ButtonLink to="/register" mustBeLogout>
                    Rejestracja
                </ButtonLink>
                <ButtonLink to="/addgame" mustBeRoot>
                    Dodaj Grę
                </ButtonLink>
                <ButtonLink to="/listgames">
                    Lista Gier
                </ButtonLink>
                <ButtonLink to="/loangame" mustBeAuth>
                    Wypożycz Grę
                </ButtonLink>
            </Toolbar>
        </AppBar >
    );
}
