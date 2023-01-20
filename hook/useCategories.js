import { useEffect, useState } from "react"
import api from "../sanity-client"
import { GET_ALL_CATEGORIES } from "../queries/categories"

export const useCategories = () => {
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            api.fetch(GET_ALL_CATEGORIES).then((data) => {
                setCategories(data)
            });
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [])

    return { categories, loading, error }
}