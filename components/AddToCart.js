import { View, Text, TouchableOpacity } from 'react-native'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'

const AddToCart = ({ incrementAction, decrementAction, value = 0 }) => {
    return (
        <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity onPress={decrementAction} disabled={!value}>
                <MinusCircleIcon size={40} color={value > 0 ? "#00c1b2" : "gray"} />
            </TouchableOpacity>
            <Text>{value}</Text>
            <TouchableOpacity onPress={incrementAction}>
                <PlusCircleIcon size={40} color="#00c1b2" />
            </TouchableOpacity>
        </View>
    )
}

export default AddToCart