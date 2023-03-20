import { createSlice } from '@reduxjs/toolkit';
import HappyWizzard from "../images/happy-wizzard.png";
import SadWizzard from "../images/sad-wizzard.png";
import PlayWizzard from "../images/play-wizzard.png";

export const scoreSlice = createSlice({
    name: 'message',
    initialState: {
        message: "Guess a number between 0 and 100",
        isWin: false,
        Image: PlayWizzard
    },
    reducers: {
        toHigh: (state) => {
            state.message = "Try again! Your guess was too high!"
            state.Image = SadWizzard
        },
        toLow: (state) => {
            state.message = "Try again! Your guess was too low!"
            state.Image = SadWizzard
        },
        win: (state) => {
            state.message = "Winner Winner Chicken Dinner!"
            state.isWin = true
            state.Image = HappyWizzard
        },
        reset: (state) => {
            state.message = "Guess a number between 0 and 100"
            state.isWin = false
            state.Image = PlayWizzard
        }
    },
})
export const { toHigh, toLow, win, reset } = scoreSlice.actions
export default scoreSlice.reducer