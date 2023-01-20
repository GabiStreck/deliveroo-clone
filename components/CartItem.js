import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { urlFor } from '../sanity-client'
import { currencyFormat } from '../helpers/formats'
import { removeToCart } from '../stores/cart'

const CartItem = ({ id, title, image, count, price }) => {
    const dispatch = useDispatch()

    return (
        <View className="bg-white px-4 py-2 flex-row items-center space-x-4">
            <Text>{count}x</Text>
            <Image
                source={{ uri: urlFor(image).url() }}
                className="w-12 h-12 bg-gray-300 rounded-full"
            />
            <Text className="flex-1">{title}</Text>
            <Text className="text-gray-600">${currencyFormat(price)}</Text>

            <TouchableOpacity
                className=" space-x-2 text-center"
                onPress={() => dispatch(removeToCart({ id: id }))}
            >
                <Text className="text-[#00c1b2]">remove</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartItem