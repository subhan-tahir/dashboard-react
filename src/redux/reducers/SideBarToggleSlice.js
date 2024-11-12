import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   
    value:false,
    overlay:false,
    activeHeader:false,
}
export const sideBartoggleSlice = createSlice({
name:'sidebarToggle',
initialState,
reducers:{
    // toggleHandler: (state)=>{
    //     state.value = 1;
    // },
    // updateBets: (state, action) => {
    //     state.value = action.payload;
    //   },
    toggleHandler: (state, action) => {
        const { device } = action.payload;
        if(device == 'sm'){
        state.overlay = !state.overlay;
        state.activeHeader = !state.activeHeader;
        document.body.classList.toggle('overflow-hidden');
      }
      else {
        state.activeHeader = !state.activeHeader;
      }
      }

}
})

export const {toggleHandler} = sideBartoggleSlice.actions;
// export const selectCount = (state) => state.reducers.value;
export default sideBartoggleSlice.reducer