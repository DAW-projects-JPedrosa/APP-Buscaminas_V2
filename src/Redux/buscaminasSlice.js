import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getGameData from "../Api/getGameData";
import initializeBoard from "./initializeBoard";

const INITIAL_STATE = {
    playerName: '',
    difficulty: 'EASY',
    isLoading: false,
    error: null,
    gameData: null,
    mines: null,
    gameOver: false,
    board: []
}

export const createGameAsync = createAsyncThunk(
    'buscaminas/createGame',
    async ({playerName, difficulty}) => {
        const URL = 'http://localhost:3000/create-game';
        const body = {player: playerName, difficulty}
        const response = await getGameData(URL, body);
        return response;
    }
)

export const revealCellAsync = createAsyncThunk(
    'buscaminas/revealCellAsync',
    async ({playerName, gameId, row, column}) => {
        const URL = `http://localhost:3000/game/${playerName}/${gameId}`;
        const body = {col: column, row: row};
        const response = await getGameData(URL, body);
        return response;
    }
)

const buscaminas = createSlice({
    name: 'Buscaminas',
    initialState: INITIAL_STATE,
    reducers:{
        setPlayerName(state, action){
            state.playerName = action.payload;
        },

        setDifficulty(state, action){
            state.difficulty = action.payload;
        },

        toggleFlag(state, action) {
            const { row, column } = action.payload;
            const cell = state.board[row][column];
            if (!cell.isFlagged && state.mines > 0) {
                cell.isFlagged = true;
                state.mines -= 1;
            } else if (cell.isFlagged) {
                cell.isFlagged = false;
                state.mines += 1;
            }
        },
    },

    extraReducers(builder){
        builder
        // createGameAync
        .addCase(createGameAsync.pending, (state) => {
            state.isLoading = true
            state.error = null;
        })
        .addCase(createGameAsync.fulfilled, (state, action) => {
            state.isLoading = false
            state.gameData = action.payload
            state.mines = action.payload.mines; 
            state.gameOver = false;
            state.board = initializeBoard(action.payload.height, action.payload.width)
        })
        .addCase(createGameAsync.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        // revealCellAsync
        .addCase(revealCellAsync.pending, (state, action) => {
            const { row, column } = action.meta.arg;
            state.board[row][column].isRevealed = true;
            state.board[row][column].isLoading = true;
        })
        .addCase(revealCellAsync.fulfilled, (state, action) => {
            const { row, column } = action.meta.arg;
            state.board[row][column].content = action.payload.content;
            state.board[row][column].isLoading = false;
            if(action.payload.content === 'M'){
                state.gameOver = true;
            }
        })
        .addCase(revealCellAsync.rejected, (state, action) => {
            const { row, column } = action.meta.arg;
            state.board[row][column].isLoading = false;
            state.board[row][column].isRevealed = false;
            state.error = action.payload
        })
    }
})

export const {
    setPlayerName,
    setDifficulty,
    toggleFlag,
    setGameOver
} = buscaminas.actions;
export const selectPlayerName = state => state.buscaminas.playerName;
export const selectLoading = state => state.buscaminas.isLoading;
export const selectGameData = state => state.buscaminas.gameData;
export const selectMines = state => state.buscaminas.mines;
export const selectDifficulty = state => state.buscaminas.difficulty;
export const selectGameOver = state => state.buscaminas.gameOver;
export const selectBoard = state => state.buscaminas.board;

export default buscaminas.reducer;