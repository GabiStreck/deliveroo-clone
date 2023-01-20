import { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { currencyFormat } from '../helpers/formats'
import { urlFor } from '../sanity-client'
import { addToCart, removeToCart, getItemFromCart } from '../stores/cart'
import AddToCart from './AddToCart'

const DishRow = ({ title, price, image, description, id }) => {
    const [showAddtoCart, setShowAddtoCart] = useState(false)
    const dispatch = useDispatch()
    const itemFromCart = useSelector((state) => getItemFromCart(state, id))

    function addItemToCart() {
        dispatch(addToCart({ title, price, image, description, id }))
    }

    function removeItemToCart() {
        dispatch(removeToCart({ id }))
    }

    return (
        <TouchableOpacity
            className="bg-white border p-4 border-gray-200"
            onPress={() => setShowAddtoCart(!showAddtoCart)}
            disabled={(itemFromCart?.count > 0)}
        >
            <View className="flex-row">
                <View className="flex-1 pr-4">
                    <Text className="text-lg mb-1">
                        {title}
                    </Text>
                    <Text className="text-gray-400 pt-2">
                        {description}
                    </Text>
                    <Text className="text-gray-400 mt-2">
                        ${currencyFormat(price)}
                    </Text>
                </View>
                <View className="flex-row items-center">
                    <Image
                        source={{ uri: urlFor(image).url() }}
                        className="w-20 h-20 rounded-sm bg-gray-300 p-4"
                    />
                </View>
            </View>
            {(showAddtoCart || itemFromCart) && (
                <View className="bg-white px-4 pt-4">
                    <AddToCart
                        incrementAction={addItemToCart}
                        decrementAction={removeItemToCart}
                        value={itemFromCart?.count || 0}
                    />
                </View>

            )}
        </TouchableOpacity >
    )
}

export default DishRow