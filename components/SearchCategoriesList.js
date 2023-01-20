import { FlatList } from 'react-native'
import { useCategories } from '../hook/useCategories'
import { CategorySearch } from './Category'

export default function SearchCategoriesList({ onSelectedCategory = () => { } }) {
    const { categories } = useCategories()
    return (
        <FlatList
            numColumns={2}
            data={categories}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
                const { title, image } = item
                return (
                    <CategorySearch
                        title={title}
                        image={image}
                        onSelectedCategory={onSelectedCategory}
                    />
                )
            }}
        />
    )
}