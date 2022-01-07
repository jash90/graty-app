import * as React from 'react';
import { Person, Face, Alarm, FlagSharp, Casino } from '@mui/icons-material';
import { Card, Typography, Box, Chip } from '@mui/material';


export default function ListGames() {

    return (
        <Box sx={{ display: 'flex', margin: 10, flexDirection: 'column' }} >
            <Typography variant="h3" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2 }}>Lista Gier</Typography>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center' }}>
                <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTJWLbLAlTc-uNMrE957GEftv9gWR6Nx2-ckPkX7-8IhPjtXbIYCrQfLrrPfijyxmxA-C81pWs-7roNjAcQ7l26WTattTIp&usqp=CAc" width="200" height="200" alt="scythe" />
                <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 1.5 }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, padding: 2 }}>
                        <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <Typography variant="h5" sx={{ paddingBottom: 1, fontWeight: 'bold' }}>Scythe</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Person sx={{ width: 30 }} />
                                <Typography>1-5 osób</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Face sx={{ width: 30 }} />
                                <Typography>od 14 lat</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Alarm sx={{ width: 30 }} />
                                <Typography>90 - 115 minut</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <FlagSharp sx={{ width: 30 }} />
                                <Typography>wydanie polskie</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                            <Typography variant="h5" sx={{ paddingBottom: 1, fontWeight: 'bold' }}>Rozgrywka</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography sx={{ width: 85 }}>Losowość:</Typography>
                                <Casino />
                                <Casino />
                                <Casino />
                                <Casino />
                                <Casino />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography sx={{ width: 85 }}>Interakcja:</Typography>
                                <Casino />
                                <Casino />
                                <Casino />
                                <Casino />
                                <Casino />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography sx={{ width: 85 }}>Złożoność:</Typography>
                                <Casino />
                                <Casino />
                                <Casino />
                                <Casino />
                                <Casino />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flex: 3, flexDirection: 'column', paddingLeft: { xs: 0, md: 2 } }}>
                            <Typography variant="h5" sx={{ paddingBottom: 1, fontWeight: 'bold' }}>Opis</Typography>
                            <Typography sx={{ overflow: 'break-word' }}>{`Popioły po Wielkiej Wojnie wciąż pokrywają całunem śnieg w Europii roku 1920. Kapitalistyczne miasto-państwo znane po prostu jako „Fabryka”, które było siłą napędową wojny dzięki produkowanym przez siebie mechom, zatrzasnęło swe podwoje, co przyciągnęło uwagę kilku pobliskich krajów... Na małym, choć niezwykle pożądanym terenie zebrali się przedstawiciele pięciu frakcji. Kto zyska chwałę i fortunę, tworząc swoje imperium jako przywódca Wschodniej Europii?`}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ padding: 2 }}>
                        <Chip label="ekonomiczna" variant="outlined" />
                        <Chip label="walka" variant="outlined" />
                        <Chip label="ruch po siatce" variant="outlined" />
                        <Chip label="figurki" variant="outlined" />
                        <Chip label="budowanie obszarów" variant="outlined" />
                        <Chip label="różnicowane moce graczy" variant="outlined" />
                    </Box>
                </Box>
            </Card>
        </Box>
    );
}
