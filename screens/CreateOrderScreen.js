import { useEffect } from 'react'
import { Text, SafeAreaView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Circle } from 'react-native-progress';
import { getRestaurant } from '../stores/restaurants'

const CreateOrderScreen = () => {
    const restaurant = useSelector(state => getRestaurant(state))
    const navigation = useNavigation()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("Delivery")
        }, 7000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <SafeAreaView
            className="bg-[#01ccbd] text-white flex-1 justify-center items-center space-y-3"
        >
            <Image
                source={require('../assets/order-loading.gif')}
                className="w-72 h-72"
            />
            <Text className="text-lg text-white my-10" >
                Waiting for {restaurant.title} to accept your order!
            </Text>
            <Circle size={60} color="white" indeterminate={true} />
        </SafeAreaView >
    )
}

export default CreateOrderScreen