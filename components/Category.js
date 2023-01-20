import { Text, Image, View, TouchableOpacity } from 'react-native'
import { urlFor } from '../sanity-client'

const Category = ({ image, title, onSelectedCategory = () => { } }) => {
    return (
        <TouchableOpacity
            className="mr-2"
            onPress={() => onSelectedCategory(title)}
        >
            <View >
                <Image
                    source={{ uri: urlFor(image).url() }}
                    className={`w-20 h-20 rounded-lg`}
                />
                <Text className="text-white absolute bottom-1 left-1 font-bold">
                    {title}
                </Text>
            </View >
        </TouchableOpacity>
    )
}

export const CategorySearch = ({ image, title, onSelectedCategory = () => { } }) => {
    return (
        <TouchableOpacity
            className="w-1/2 p-1"
            onPress={() => onSelectedCategory(title)}
        >
            <View>
                <Image
                    source={{ uri: urlFor(image).url() }}
                    className={`w-full h-32 rounded-lg`}
                />
                <Text className="text-white absolute bottom-1 left-1 font-bold">
                    {title}
                </Text>
            </View >
        </TouchableOpacity>
    )
}
export default Category