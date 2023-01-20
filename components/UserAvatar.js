import { View, Text, Image } from 'react-native'
import React from 'react'

export default function UserAvatar({
    imgUrl = "https://picsum.photos/200/200",
    title,
    subTitle,
    styles = {},
    children
}
) {
    const { imgSize } = styles
    return (
        <View className="flex-row items-center space-x-4">
            <Image
                source={{ uri: imgUrl }}
                className={`w-${imgSize ? imgSize : 12} h-${imgSize ? imgSize : 12} 
                 rounded-full bg-gray-300 p-4`}
            />
            <View className="flex-1">
                {title && <Text className="text-lg">{title}</Text>}
                {subTitle && <Text className="text-gray-400">{subTitle}</Text>}
            </View>
            <View>
                {children}
            </View>
        </View>
    )
}