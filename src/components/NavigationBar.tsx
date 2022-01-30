import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Toolbar, Box, AppBar } from '@mui/material';
import NavigationButtonLink from './NavigationButtonLink';
import { logout } from '../services/firebase';
import { useSetRecoilState } from 'recoil';
import { userState } from '../atoms';

export default function NavigationBar() {
    const setUser = useSetRecoilState(userState);
    const navigate = useNavigate();
    const signOut = useCallback(async () => {
        const { error } = await logout();
        if (!error) {
            setUser(null);
            navigate("")
        }
    }, [setUser, navigate])

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
                <NavigationButtonLink to="/">
                    Strona główna
                </NavigationButtonLink>
                <NavigationButtonLink to="/register" mustBeLogout>
                    Rejestracja
                </NavigationButtonLink>
                <NavigationButtonLink to="/addgame" mustBeRoot>
                    Dodaj Grę
                </NavigationButtonLink>
                <NavigationButtonLink to="/listgames">
                    Lista Gier
                </NavigationButtonLink>
                <NavigationButtonLink to="/loangame" mustBeRoot>
                    Wypożycz Grę
                </NavigationButtonLink>
                <NavigationButtonLink to="/profile" mustBeAuth>
                    Profil
                </NavigationButtonLink>
                <NavigationButtonLink onClick={signOut} mustBeAuth>
                    Wyloguj się
                </NavigationButtonLink>
            </Toolbar>
        </AppBar >
    );
}
