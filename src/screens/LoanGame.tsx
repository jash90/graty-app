import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";
import { gamesState, userState } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { addHours } from "date-fns";

export default function LoanGame() {
  const [game, setGame] = useState();
  const list = useRecoilValue(gamesState);
  const [user, setUser] = useRecoilState(userState);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(addHours(new Date(), 2));

  return (
    <Box sx={{ display: "flex", margin: 10, flexDirection: "row" }}>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          margin: 10,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant='h3'
          sx={{ alignSelf: "center", fontWeight: "bold" }}
        >
          Wypożycz Grę
        </Typography>
        <Autocomplete
          disablePortal
          options={list}
          sx={{ width: 300, padding: 2 }}
          renderInput={(params) => (
            <TextField {...params} label='Gra planszowa' />
          )}
          getOptionLabel={(option) => option.name}
          value={game}
          onChange={(event: any, newValue: any) => {
            setGame(newValue);
          }}
        />
        <Autocomplete
          disablePortal
          options={[]}
          disabled
          sx={{ width: 300, padding: 2 }}
          renderInput={(params) => <TextField {...params} label='Użytkownik' />}
          getOptionLabel={(option) => option.email}
          value={user}
          onChange={(event: any, newValue: any) => {
            setUser(newValue);
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => (
              <TextField {...props} sx={{ width: 300, margin: 2 }} />
            )}
            label='Data rozpoczęcia wypożyczenia'
            value={startDate}
            onChange={(newValue: any) => {
              setStartDate(newValue);
            }}
            disabled
            ampm={false}
          />

          <DateTimePicker
            renderInput={(props) => (
              <TextField {...props} sx={{ width: 300, margin: 2 }} />
            )}
            label='Data zakończenia wypożyczenia'
            value={endDate}
            onChange={(newValue: any) => {
              setEndDate(newValue);
            }}
            ampm={false}
          />
        </LocalizationProvider>
        <Button
          variant='contained'
          sx={{ width: 300, margin: 2 }}
          type={"submit"}
        >
          Wypożycz Grę
        </Button>
      </Box>
    </Box>
  );
}
