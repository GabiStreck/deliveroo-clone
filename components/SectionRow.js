import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import Card from './Card'

const SectionRow = ({ title, restaurants, description }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">
                    {title}
                </Text>
                <ArrowRightIcon size={25} color="#00c1b2" />
            </View>
            {description && (
                <Text className="text-xs text-gray-500 px-4">
                    {description}
                </Text>)
            }
            <View>
                <ScrollView
                    contentContainerStyle={{
                        paddingHorizontal: 15
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="pt-4"
                >
                    {restaurants?.map((item) => (
                        <Card
                            id={item?._id}
                            key={`restaurant-${item?._id}`}
                            image={item?.image}
                            title={item?.title}
                            rating={item?.rating}
                            type={item?.type}
                            short_description={item?.short_description}
                            location={item?.location}
                            dishes={item?.dishes}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

export default SectionRow