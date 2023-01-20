import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalAmount: 0,
    total: 0
}

export const cartStore = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, actions) => {
            const id = actions.payload.id
            state.totalAmount += actions.payload.price
            state.total += 1
            let isAdded = false
            state.items = state.items.map(item => {
                if (item.id === id) {
                    isAdded = true
                    return { ...item, count: item.count + 1 }
                }
                return item
            })
            if (!isAdded) state.items = [...state.items, { ...actions.payload, count: 1 }]

        },
        removeToCart: (state, actions) => {
            if (state.items.length > 0) {
                const id = actions.payload.id
                let items = []
                for (let item of state.items) {
                    if (item.id !== id) items.push(item)
                    else {
                        state.totalAmount -= item.price
                        state.total -= 1
                        if (item.count - 1 > 0) {
                            items.push({ ...item, count: item.count - 1 })
                        }
                    }
                }
                state.items = items
            }
        },
        clearToCart: (state, actions) => {
            state = initialState
        }
    },
})

export const { addToCart, removeToCart, clearToCart } = cartStore.actions

export const getAllItemsFromCart = state => state.cart.items

export const getItemFromCart = (state, id) => state.cart.items.find(ele => ele?.id === id)

export const getCart = (state) => state.cart

export default cartStore.reducer