import { atom } from "recoil";
import { Game } from "../models/Game";

export const userState = atom({
  key: "user",
  default: null as any,
});

export const gamesState = atom({
  key: "games",
  default: [] as Game[],
});
