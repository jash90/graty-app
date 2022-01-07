import React from 'react';
import { AccountCircle } from '@mui/icons-material';
import { Card, Typography, IconButton, Toolbar, Box, AppBar, Button, CardActions, CardContent, TextField, styled, InputAdornment } from '@mui/material';
import { useState, useCallback } from 'react';

const Line = styled('div')({
    marginTop: 20,
    marginBottom: 20,
    height: 1,
    width: '100%',
    backgroundColor: 'grey'
})

export default function AddGame() {
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [minGamers, setMinGamers] = useState("1");
    const [maxGamers, setMaxGamers] = useState("2");
    const [minTimeGame, setMinTimeGame] = useState("10");
    const [maxTimeGame, setMaxTimeGame] = useState("60");
    const [age, setAge] = useState("10");
    const [country, setCountry] = useState("Polska");
    const [avg, setAvg] = useState("1");
    const [integration, setIntegration] = useState("1");
    const [complexity, setComplexity] = useState("1");
    const [description, setDescription] = useState("");


    const saveGame = useCallback(() => {
        console.log({ name, minGamers, maxGamers, minTimeGame, maxTimeGame, age, country, avg, integration, complexity, description })

    }, [])


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
            <Box sx={{ display: 'flex', margin: 5, flexDirection: 'column' }} >
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Dodawanie nowej gry</Typography>
                <TextField
                    id="outlined-name"
                    label="Nazwa"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    sx={{ margin: 2 }}
                />
                {/* <TextField
                    id="outlined-name"
                    type="file"
                    value={file}
                    onChange={event => setFile(event.target.value)}
                    sx={{ margin: 2, }}
                /> */}
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Box>
                        <TextField
                            id="outlined-name"
                            label="Min ilość graczy"
                            type="number"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">od</InputAdornment>,
                            }}
                            value={minGamers}
                            onChange={event => setMinGamers(event.target.value)}
                            sx={{ margin: 2, width: 100, }}
                        />
                        <TextField
                            id="outlined-name"
                            label="Max ilość graczy"
                            type="number"
                            value={maxGamers}
                            onChange={event => setMaxGamers(event.target.value)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">do</InputAdornment>,
                            }}
                            sx={{ margin: 2, width: 100, }}
                        />
                    </Box>
                    <Box>
                        <TextField
                            id="outlined-name"
                            label="Min czas gry"
                            type="number"
                            value={minTimeGame}
                            onChange={event => setMinTimeGame(event.target.value)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">od</InputAdornment>,
                                endAdornment: <InputAdornment position="end">min</InputAdornment>,
                            }}
                            sx={{ margin: 2, width: 135, }}
                        />
                        <TextField
                            id="outlined-name"
                            label="Max czas gry"
                            type="number"
                            value={maxTimeGame}
                            onChange={event => setMaxTimeGame(event.target.value)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">do</InputAdornment>,
                                endAdornment: <InputAdornment position="end">min</InputAdornment>,
                            }}
                            sx={{ margin: 2, width: 135, }}
                        />
                    </Box>
                    <TextField
                        id="outlined-name"
                        label="Wiek gracza"
                        type="number"
                        value={age}
                        onChange={event => setAge(event.target.value)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">od</InputAdornment>,
                            endAdornment: <InputAdornment position="end">lat</InputAdornment>,
                        }}
                        sx={{ margin: 2, width: 120, }}
                    />
                </Box>
                <TextField
                    id="outlined-name"
                    label="Wydanie"
                    value={country}
                    onChange={event => setCountry(event.target.value)}
                    sx={{ margin: 2, }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography sx={{ fontWeight: 'bold', margin: 2, width: 100, alignSelf: 'center' }}>Rozgrywka</Typography>
                    <TextField
                        id="outlined-name"
                        label="Losowość"
                        type="number"
                        value={avg}
                        onChange={event => setAvg(event.target.value)}
                        sx={{ margin: 2, width: 120 }}
                    />
                    <TextField
                        id="outlined-name"
                        label="Integracja"
                        type="number"
                        value={integration}
                        onChange={event => setIntegration(event.target.value)}
                        sx={{ margin: 2, width: 120 }}
                    />
                    <TextField
                        id="outlined-name"
                        label="Złożoność"
                        type="number"
                        value={complexity}
                        onChange={event => setComplexity(event.target.value)}
                        sx={{ margin: 2, width: 120 }}
                    />
                </Box>
                <TextField
                    id="outlined-name"
                    label="Opis"
                    sx={{ margin: 2, }}
                    multiline
                    rows={4}
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />

                <Button variant="contained" onClick={saveGame}>
                    Zapisz
                </Button>
            </Box>
        </Box >
    );
}
