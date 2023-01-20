import {
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { urlFor } from '../sanity-client';

export const SearchResultList = ({ titleResult, results }) => {
    if (!results || results?.length === 0) return null
    const navigation = useNavigation()
    return (
        <View className="px-4">
            <Text className="text-xl my-3 font-bold">
                {titleResult}
            </Text>
            <View className="space-y-2 divide-y divide-gray-200">
                {results?.map(({ _id, image, title, rating, short_description,
                    type, dishes, location, _type }) => (
                    <TouchableOpacity
                        key={`result-${_id}-${_type}`}
                        onPress={() => {
                            _type === "restaurant" && navigation.navigate("Restaurant", {
                                id: _id, image, title, rating, type,
                                short_description, dishes, location
                            })
                        }}
                        className="pt-2"
                    >
                        <View className="flex-row space-x-3">
                            <View className="flex-row items-center">
                                <Image
                                    source={{ uri: urlFor(image).url() }}
                                    className="w-20 h-20 rounded-sm bg-gray-300 p-4"
                                />
                            </View>
                            <View className="flex-1 ">
                                <Text className="text-lg mb-1">
                                    {title}
                                </Text>
                                <Text className="text-gray-400 pt-2">
                                    {short_description}
                                </Text>
                                <Text className="text-gray-400 mt-2">
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity >
                ))}
            </View>
        </View>
    )
}