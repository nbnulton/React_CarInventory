import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        car_color: "Car Color",
        car_make: 'Car Make',
        car_model: "Car Model",
        car_year: "Car Year",
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseCarColor: (state, action) => { state.car_color = action.payload }, // All we're doing is setting the input to the state.name
        chooseCarMake: (state, action) => { state.car_make = action.payload },
        chooseCarModel: (state, action) => { state.car_model = action.payload },
        chooseCarYear: (state, action) => { state.car_year = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseCarColor, chooseCarMake, chooseCarModel, chooseCarYear } = rootSlice.actions