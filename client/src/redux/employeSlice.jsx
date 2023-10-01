import { createSlice } from "@reduxjs/toolkit";

const employeSlice = createSlice({
    name:"employe",
    initialState: {
        employe: []
    },
    reducers: {
        getEmployer : (state, action) => {
            state.employe = action.payload.map(employe => {
                return {id: employe._id, name: employe.name, phone:employe.phone, typeEmployer: employe.typeEmployer}
            })//the return is inside state.users.users
        },
        addEmployer : (state, action) => {
            state.employe.push(action.payload)
        },
        deleteEmployer: (state, action) => {
            const id = action.payload;
            state.employe = state.employe.filter(u => u.id !== id)
        }
    }
})

export const {getEmployer,addEmployer,deleteEmployer} = employeSlice.actions;
export default employeSlice;