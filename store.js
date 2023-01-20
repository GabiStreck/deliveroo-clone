import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './stores/cart'
import restaurantReducer from './stores/restaurants'


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        restaurant: restaurantReducer
    },
})