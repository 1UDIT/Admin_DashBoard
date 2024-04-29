import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    active: boolean,
    Id: any,
    BackGroundDropBox:boolean
}

const initialStateValue: CounterState = {
    active: false,
    Id: 0,
    BackGroundDropBox:false
}

const TableDropDown = createSlice({
    name: 'tableDownClick',
    initialState: initialStateValue,
    reducers: {
        tableDown: (state, action) => {
            state.active = action.payload;
            // console.log(action.payload, "dispa");
        },
        dropId: (state, action) => {
            state.Id = action.payload;
            // console.log(action.payload, "id");
        },
        tableBackground: (state, action) => {
            state.BackGroundDropBox = action.payload;
            // console.log(action.payload, "BackGroundDropBox");
        }
    }
});

export const { tableDown, dropId, tableBackground } = TableDropDown.actions;
export default TableDropDown.reducer;