import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    errors: null,
    cerForUpdate: null,
    loading: false
};

const getAll = createAsyncThunk(
    "carSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const create = createAsyncThunk(
    "carSlice/create",
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const deleteCar = createAsyncThunk(
    "carSlice/deleteById",
    async ({id}, {rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            return id;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    "carSlice/updateById",
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.updateById(id, car);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.setCarForUpdate = action.payload;
        }
    },
    extraReducer: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
                state.errors = null;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload);
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                const carIndex = state.cars.findIndex(value => value.id === action.payload);
                state.cars.splice(carIndex,1)
            })
            .addCase(updateById.fulfilled, (state, action) => {
                const findCar = state.cars.find(value => value.id === action.payload.id);
                Object.assign(findCar, action.payload)
            })

});

const {reducer:carReducer, actions:{setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    create,
    deleteCar,
    updateById,
    setCarForUpdate
};

export {
    carReducer,
    carActions
}
