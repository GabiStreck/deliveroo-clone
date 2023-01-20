import { useCallback, useRef, useState } from 'react';
import {
    SafeAreaView,
    Text,
    Image,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Keyboard,
    ActivityIndicator
} from 'react-native'
import {
    ChevronDownIcon,
    UserIcon,
    AdjustmentsVerticalIcon,
    MagnifyingGlassIcon,
    ArrowLeftIcon
} from "react-native-heroicons/outline";
import {
    XCircleIcon
} from "react-native-heroicons/solid";
import Categories from '../components/Categories';
import SearchCategoriesList from '../components/SearchCategoriesList';
import { SearchResultList } from '../components/SearchResultList';
import { SectionsHome } from '../components/SectionsHome';
import { useSearch } from '../hook/useSearch';

const FILTERS = {
    category: '',
    onlyByCategories: false
}

const HomeScreen = () => {
    const [query, setQuery] = useState('')
    const [filters, setFilters] = useState(FILTERS)
    const inputRef = useRef()
    const [showTopBar, setShowTopBar] = useState(true)
    const { data: { dishes, restaurants }, loading } = useSearch(query, filters)

    const toggleSearch = () => {
        setShowTopBar(!showTopBar)
        if (!showTopBar) {
            setQuery("")
            setFilters(FILTERS)
            Keyboard.dismiss()
            return
        }
        inputRef.current.focus()
    }

    const onOnlyByCategories = useCallback((catTitle) => {
        if (showTopBar) setShowTopBar(!showTopBar)
        if (query) setQuery("")
        setFilters({
            category: catTitle,
            onlyByCategories: true
        })
    }, [])

    const onSearching = (text) => {
        if (filters.onlyByCategories) setFilters(FILTERS)
        setQuery(text)
    }

    return (
        <View className="bg-white pt-9">
            <SafeAreaView className="h-full">
                {showTopBar &&
                    <View className="flex-row pb-2  px-4 items-center space-x-2">
                        <Image
                            source="https://picsum.photos/200/200"
                            className="w-9 h-9 bg-gray-300 p-4 rounded-full"
                        />
                        <View className="flex-1">
                            <Text className="text-gray-400 text-xs">
                                Deliver
                            </Text>
                            <Text className="font-bold text-xl">
                                Current location
                                <ChevronDownIcon size={15} color="#00c1b2" />
                            </Text>
                        </View>
                        <UserIcon size={28} color="#00c1b2" />
                    </View>
                }

                <TouchableOpacity
                    onPress={() => toggleSearch()}
                    className="flex-row items-center space-x-2 pb-2 mx-4"
                >
                    <View
                        className="flex-row flex-1 space-x-3 bg-gray-100 items-center pl-2"
                    >
                        {showTopBar ?
                            <MagnifyingGlassIcon size={15} color="gray" />
                            :
                            <ArrowLeftIcon size={15} color="#00c1b2" />
                        }
                        <TextInput
                            placeholder='Restaurants and Cuisines'
                            keyboardType='default'
                            className="flex-1 p-2 focus:outline-0"
                            onChangeText={onSearching}
                            value={query}
                            ref={inputRef}
                            onPressIn={() => showTopBar && setShowTopBar(!showTopBar)}
                        />
                    </View>
                    {showTopBar ?
                        <AdjustmentsVerticalIcon size={20} color="#00c1b2" />
                        :
                        <XCircleIcon size={20} color="gray" />
                    }
                </TouchableOpacity>
                <ScrollView
                    contentContainerStyle={{
                        paddingBottom: showTopBar ? 40 : 0
                    }}
                >
                    {(!showTopBar && loading) ? (
                        <ActivityIndicator className="mt-40" size={60} />
                    ) : showTopBar ? (
                        <>
                            <Categories onSelectedCategory={onOnlyByCategories} />
                            <SectionsHome />
                        </>
                    ) : (!loading && (dishes?.length > 0 || restaurants?.length > 0)) ?
                        (
                            <>
                                <SearchResultList
                                    results={restaurants}
                                    titleResult="Restaurants"
                                />
                                <SearchResultList
                                    results={dishes}
                                    titleResult="Dishes"
                                />
                            </>
                        ) : (!loading && query) && (
                            <View className="my-7">
                                <Text className="text-center text-md">
                                    We couldn't find anything for {query}
                                </Text>
                                <Text className="text-center text-md">
                                    Try a diferent search
                                </Text>
                            </View>
                        )}
                </ScrollView>
                {(query && !showTopBar && !loading) && (
                    <View className="px-2 my-4 flex-1">
                        <Text className="text-lg font-extrabold py-4 pl-1">Browse by category</Text>
                        <SearchCategoriesList onSelectedCategory={onOnlyByCategories} />
                    </View>
                )}

            </SafeAreaView >
        </View >


    )
}

export default HomeScreen