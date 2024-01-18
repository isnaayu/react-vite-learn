import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment:(state) => {
            state.counter += 1
        }
    }
})

export const { increment} = counterSlice.actions

const store = configureStore ({
    reducer: {
        increCounter: counterSlice.reducer
    }
})

export default store