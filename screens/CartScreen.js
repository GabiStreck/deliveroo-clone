

import { useEffect } from 'react'
import { View, TouchableOpacity, Text, ScrollView, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { clearToCart, getCart } from '../stores/cart'
import { getRestaurant } from '../stores/restaurants'
import { currencyFormat } from '../helpers/formats'
import CartItem from '../components/CartItem'
import UserAvatar from '../components/UserAvatar'

const CartScreen = () => {
    const { items, totalAmount } = useSelector(state => getCart(state))
    const dispatch = useDispatch()
    const restaurant = useSelector(state => getRestaurant(state))
    const navigation = useNavigation()

    useEffect(() => {
        if (items.length == 0) {
            navigation.goBack()
        }
    }, [items])

    return (
        <SafeAreaView className="flex-1 bg-white mt-8">
            <View className="flex-1 bg-gray-100 relative">
                <View className="p-3 border-b border-[#00c1b2] bg-white shadow-xs">
                    <View>
                        <Text className="text-lg font-bold text-center">Cart</Text>
                        <Text className="text-center text-gray-400">{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-5 right-5">
                        <XCircleIcon color="#00c1b2" size={40} />
                    </TouchableOpacity>
                </View>

                <View className="bg-white my-5 p-4 flex-row items-center space-x-4">
                    <UserAvatar
                        title="Delivery Man"
                        imgUrl="https://picsum.photos/200/200"
                        styles={{
                            imgSize: 9
                        }}
                    >
                        <TouchableOpacity className=" space-x-2 text-center">
                            <Text className="text-[#00c1b2]">Change</Text>
                        </TouchableOpacity>
                    </UserAvatar>
                </View>

                <ScrollView className="divide-y divide-gray-200 mb-5">
                    {items?.map(({ id, title, image, count, price }) => (
                        <CartItem
                            key={`item-cart-${id}`}
                            id={id}
                            count={count}
                            title={title}
                            price={price}
                            image={image}
                        />
                    ))}
                </ScrollView>

                <View className="bg-white p-4 space-y-4">
                    <View className="flex-row justify-between ">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">${currencyFormat(totalAmount)}</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400">${currencyFormat(9.5)}</Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text className="font-bold-400">Order Total</Text>
                        <Text className="font-extrabold">${currencyFormat(totalAmount + 9.5)}</Text>
                    </View>

                    <TouchableOpacity
                        className="bg-[#00c1b2] p-4 rounded-lg"
                        onPress={() => {
                            dispatch(clearToCart())
                            navigation.navigate("CreateOrder")
                        }}
                    >
                        <Text className="text-white text-center text-lg font-bold">
                            Place Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CartScreen