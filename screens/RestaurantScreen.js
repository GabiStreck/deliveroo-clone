import { useEffect } from 'react'
import { Image, View, TouchableOpacity, Text, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import {
    ArrowLeftIcon,
    ChevronDownIcon,
    MapPinIcon,
    QuestionMarkCircleIcon
} from 'react-native-heroicons/outline'
import BottomBarCart from '../components/BottomBarCart'
import DishRow from '../components/DishRow'
import WidgetDeliveryTime from '../components/WidgetDeliveryTime'
import { urlFor } from '../sanity-client'
import { setRestaurant } from '../stores/restaurants'

const RestaurantScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const { params: { id, image, title, rating, type,
        short_description, dishes, location }
    } = useRoute()
    const restaurant = {
        id, image, title, rating, type, short_description,
        dishes, location
    }

    useEffect(() => {
        dispatch(setRestaurant(restaurant))
    }, [dispatch])

    const addMins = (date, mins) => date.setMinutes(date.getMinutes() + mins)
    return (
        <>
            <ScrollView>
                <View className="bg-white relative pb-6 ">
                    <Image
                        source={{ uri: urlFor(image).url() }}
                        className="w-full h-56 bg-gray-300 p-4"
                    />
                    <View className="absolute bottom-0 right-5 m-auto">
                        <WidgetDeliveryTime
                            arriveTime={addMins(new Date(), 125) / 1000}
                        />
                    </View>
                    <TouchableOpacity
                        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
                        onPress={() => { navigation.goBack() }}
                    >
                        <ArrowLeftIcon color="#00c1b2" size={20} />
                    </TouchableOpacity>
                </View>

                <View className="bg-white">
                    <View className="px-4 pb-4">
                        <Text className="text-3xl font-bold">{title}</Text>
                        <View className="flex-row space-x-1 items-center pb-1 pt-1">
                            <Text className="text-xs text-gray-500 ">
                                <Text className="flex-row  text-[#00c1b2]">
                                    {rating}<Text className="text-md"> ★ </Text>
                                </Text>
                                ・  {type?.title}
                            </Text>
                            <View className="flex-row space-x-1 items-center pl-2">
                                <MapPinIcon size={15} color="gray" opacity={0.5} />
                                <Text className="text-xs text-gray-500">Nearby ・ 120 min</Text>
                            </View>
                        </View>
                        <View className="flex-row space-x-1 items-center ">
                            <Text className="text-xs text-gray-500">{short_description}</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                        <QuestionMarkCircleIcon color="gray" size={20} opacity={.5} />
                        <Text className="text-md font-bold">Have a food allergy?</Text>
                        <ChevronDownIcon color="#00c1b2" size={15} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text className="text-lg font-bold pl-4 py-3 mt-2">{title} Recommends</Text>
                </View>
                <View
                    className="bg-gray-100 pb-28"
                >
                    {dishes?.map(({ title, price, image, short_description, _id }) => (
                        <DishRow
                            id={_id}
                            key={_id}
                            price={price}
                            image={image}
                            title={title}
                            description={short_description}
                        />
                    ))}
                </View>
            </ScrollView >
            <BottomBarCart />
        </>
    )
}

export default RestaurantScreen