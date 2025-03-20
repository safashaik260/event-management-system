import { createSlice } from '@reduxjs/toolkit'
//import { use } from '../../../../server/Routes'

const initialState =
{
    user:{},
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
    reducers: {
    saveAdmin: (state,action) => {
      state.user = action.payload
    
    },
    clearAdmin: (state) => {
      state.user = {}
    }

  },
})


// Action creators are generated for each case reducer function
export const { saveAdmin,clearAdmin } = adminSlice.actions


export default adminSlice.reducer
