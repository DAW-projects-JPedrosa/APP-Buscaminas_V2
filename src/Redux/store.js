import {configureStore} from '@reduxjs/toolkit'
import buscaminas from './buscaminasSlice';

export const store = configureStore({
    reducer: {
        buscaminas: buscaminas
    }
})

export default store;