import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurant: {
        id: null,
        image: null,
        title: null,
        rating: null,
        type: null,
        short_description: null,
        dishes: null,
        location: null
    }
}

export const restStore = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, actions) => {
            state.restaurant = actions.payload
        }
    },
})

export const { setRestaurant } = restStore.actions

export const getRestaurant = (state) => state.restaurant.restaurant

export default restStore.reducer