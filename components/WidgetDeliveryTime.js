import { View, Text } from 'react-native'
import { deliveryArriveIn } from '../helpers/delivery'

export default function WidgetDeliveryTime({ arriveTime }) {
    if (!arriveTime) return
    return (
        <View
            className="bg-white shadow-lg rounded-full px-4 py-1"
        >
            <Text className="font-lg font-extrabold text-center">
                {deliveryArriveIn({
                    timestamp: arriveTime,
                    offset: Math.floor(100 * Math.random())
                })}
            </Text>
            <Text className="text-gray-400  text-center">mins</Text>
        </View>
    )
}