import { Text, Image, View, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity-client'
import WidgetDeliveryTime from './WidgetDeliveryTime';

const Card = ({ id, image, title, rating, short_description,
    type, dishes, location }) => {
    const navigation = useNavigation()
    const addMins = (date, mins) => date.setMinutes(date.getMinutes() + mins)
    return (
        <TouchableOpacity
            className="bg-white mr-3 shadow"
            onPress={() => navigation.navigate("Restaurant", {
                id, image, title, rating, short_description,
                type, dishes, location
            })}
        >
            <View className="relative">
                <Image
                    source={{ uri: image ? urlFor(image).url() : "https://picsum.photos/200/200" }}
                    className="w-64 h-36 rounded-sm "
                />
                <View className="absolute -bottom-5 right-5 m-auto">
                    <WidgetDeliveryTime
                        arriveTime={addMins(new Date(), 125) / 1000}
                    />
                </View>
            </View>

            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">
                    {title}
                </Text>
                <View className="flex-row space-x-1 items-center">
                    <Text className="text-xs text-gray-500">
                        <Text className="flex-row  text-[#00c1b2]">
                            {rating}<Text className="text-md">★</Text>
                        </Text>
                        ・ {type?.title}
                    </Text>
                </View>
                <Text className="text-xs text-gray-500">{short_description}</Text>
                <View className="flex-row space-x-1 items-center ">
                    <MapPinIcon size={15} color="gray" opacity={0.5} />
                    <Text className="text-xs text-gray-500">Nearby ・ 120 min</Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}

export default Card