import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from '../reducers/scoreSlice'
export default configureStore({
    reducer: {
        score: scoreReducer
    },
})