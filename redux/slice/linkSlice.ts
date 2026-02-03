import { createSlice } from "@reduxjs/toolkit";

type initVal = {
    linkPath : string;
}

const initialValue : initVal = {
    linkPath : "",
}

const linkSlice =  createSlice(
    {
        name : "linkPath",
        initialState : initialValue,
        reducers : {
            setLink : (state, action) =>{
                state.linkPath = action.payload;
            }
        }

    }
)

export const {setLink} = linkSlice.actions;
export default linkSlice.reducer;