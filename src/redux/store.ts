import { configureStore } from "@reduxjs/toolkit"

import modal from "./slices/modal"

export const store = configureStore({
    reducer: {
        modal,
    },
})

// Infer RootState
export type RootState = ReturnType<typeof store.getState>
// Infer type for all reducers
export type AppDispatch = typeof store.dispatch
