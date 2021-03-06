import React from 'react';
import { Person, Face, Alarm, FlagSharp } from '@mui/icons-material';
import { Card, Typography, Box, Chip } from '@mui/material';
import { Game } from '../models/Game';
import IconCounter from '../components/IconCounter';
import { useRecoilValue } from 'recoil';
import { gamesState } from '../atoms';


export default function ListGames() {
    const list = useRecoilValue(gamesState);

    return (
        <Box sx={{ display: 'flex', margin: 10, flexDirection: 'column' }} >
            <Typography variant="h3" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2 }}>Lista Gier</Typography>
            {list.map((game: Game) => <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'column', lg: 'row' }, alignItems: 'center', marginTop: 1, marginBottom: 1, width: '100%' }} key={game.uid}>
                <img src={game.link} width="200" height="200" alt={game.uid} />
                <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 1.5, width: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, padding: 2, width: '100%' }}>
                        <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <Typography variant="h5" sx={{ paddingBottom: 1, fontWeight: 'bold' }}>{game.name}</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Person sx={{ width: 30 }} />
                                <Typography>{`${game.minGamers}-${game.maxGamers} osób`}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Face sx={{ width: 30 }} />
                                <Typography>{`od ${game.age} lat`}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Alarm sx={{ width: 30 }} />
                                <Typography>{`${game.minTimeGame} - ${game.maxTimeGame} minut`}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <FlagSharp sx={{ width: 30 }} />
                                <Typography>{`wydanie ${game.country}`}</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <Typography variant="h5" sx={{ paddingBottom: 1, fontWeight: 'bold' }}>Rozgrywka</Typography>
                            <IconCounter text={'Losowość: '} count={game.avg} max={5} />
                            <IconCounter text={'Interakcja:'} count={game.integration} max={5} />
                            <IconCounter text={'Złożoność:'} count={game.complexity} max={5} />
                        </Box>
                        <Box sx={{ display: 'flex', flex: 3, flexDirection: 'column', paddingLeft: { xs: 0, md: 2 } }}>
                            <Typography variant="h5" sx={{ paddingBottom: 1, fontWeight: 'bold' }}>Opis</Typography>
                            <Typography sx={{ overflow: 'break-word' }}>{game.description}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ padding: 2 }}>
                        {game?.tags?.map((item: string) => <Chip label={item} variant="outlined" />)}
                    </Box>
                </Box>
            </Card>)}
        </Box>
    );
}
