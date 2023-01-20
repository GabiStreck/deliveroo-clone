import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { getCart } from '../stores/cart'
import { currencyFormat } from '../helpers/formats'

const BottomBarCart = () => {
    const { total, totalAmount } = useSelector(state => getCart(state))
    const navigation = useNavigation()
    if (total === 0) return;
    return (
        <View className="absolute bottom-10 z-50 w-full">
            <TouchableOpacity
                className="p-4 rounded-lg mx-5 bg-[#00c1b2] flex-row items-center space-x-1"
                onPress={() => navigation.navigate("Cart")}
            >
                <Text
                    className="text-white font-extrabold text-lg bg-[#01a296] text-center px-2 rounded-lg"
                >
                    {total}
                </Text>
                <Text className="text-white font-extrabold text-lg flex-1 text-center">
                    View Cart Detail
                </Text>
                <Text className="text-white font-extrabold text-lg">${currencyFormat(totalAmount)}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomBarCart