import {createSlice} from '@reduxjs/toolkit'

const ActiveHeader = createSlice({
    name : 'active_header',
    initialState : {
        active_header : false
    },
    reducers:{
        setActiveHeader : (state,action) => {
            state.active_header = action.payload
        }
    }
})

export const ActiveHeaderAction = ActiveHeader.actions;
export default ActiveHeader
