/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"

interface ModalState {
    isOpen: boolean
}

const initialState: ModalState = {
    isOpen: false,
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        show: (state) => {
            state.isOpen = false
        },
        hide: (state) => {
            state.isOpen = false
        },
    },
})

export const { show, hide } = modalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectModal = (state: RootState) => state.modal.isOpen

export default modalSlice.reducer
