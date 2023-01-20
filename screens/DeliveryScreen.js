import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Bar } from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { getRestaurant } from '../stores/restaurants'
import UserAvatar from '../components/UserAvatar'

export default function DeliveryScreen() {
    const { title, location, short_description } = useSelector(
        state => getRestaurant(state)
    )
    const navigation = useNavigation()
    const mapRegion = {
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    }

    return (
        <View className="bg-[#01ccbd] flex-1">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center px-5 py-2 mt-7">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home")}
                    >
                        <XMarkIcon color="white" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text className=" text-white text-lg font-light">
                            Order Help
                        </Text>
                    </TouchableOpacity>
                </View>

                <View className="bg-white p-6 mx-4 my-2 rounded-lg z-50 shadow-md">
                    <View className="flex-row justify-between space-x-2">
                        <View>
                            <Text className=" text-gray-400 text-lg ">
                                Estimated Arrival
                            </Text>
                            <Text className=" text-3xl font-extrabold">
                                45-50 Minutes
                            </Text>
                        </View>
                        <Image
                            source={require('../assets/delivery.gif')}
                            className="w-20 h-20"
                        />
                    </View>
                    <Bar color="#01ccbd" size={30} indeterminate={true} />
                    <Text className=" text-xs text-gray-400 mt-2">
                        Your order at {title} is being prepared
                    </Text>
                </View>
            </SafeAreaView>
            <MapView
                className="flex-1 z-0 -mt-10"
                mapType='mutedStandard'
                initialRegion={mapRegion}
            >
                <Marker
                    coordinate={{
                        latitude: location.lat,
                        longitude: location.lng,
                    }}
                    title={title}
                    description={short_description}
                    identifier="origin"
                    pinColor='#01ccbd'
                />
            </MapView>
            <SafeAreaView className="bg-white h-20  px-5 flex-row items-center">
                <UserAvatar
                    title="Gabriel Streck"
                    subTitle="Delivery Man"
                    imgUrl="https://picsum.photos/200/200"
                >
                    <Text className="text-lg font-bold text-[#01ccbd]">Call</Text>
                </UserAvatar>
            </SafeAreaView>
        </View>
    )
}