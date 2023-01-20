import { ScrollView } from 'react-native'
import { useCategories } from '../hook/useCategories'
import Category from './Category'

export default function Categories({ onSelectedCategory = () => { } }) {
    const { categories } = useCategories()
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {categories?.map(category => (
                <Category
                    key={`category-${category._id}`}
                    image={category.image}
                    title={category.title}
                    onSelectedCategory={onSelectedCategory}
                />
            ))}
        </ScrollView>
    )
}