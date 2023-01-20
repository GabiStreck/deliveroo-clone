import { useMemo, useState } from "react"
import api from "../sanity-client"
import {
    GET_BY_CATEGORY,
    GET_BY_TITLE,
    GET_BY_TITLE_AND_CATEGORY
} from "../queries/search"

export const useSearch = (query, { category, onlyByCategories } = {
    category: "", onlyByCategories: false
}) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useMemo(() => {
        try {
            if (!query && !category) setData([])
            else {
                let queryParams
                setLoading(true)
                setData([])

                if (onlyByCategories) {
                    queryParams = {
                        schema: GET_BY_CATEGORY,
                        params: {
                            title: category
                        }
                    }
                } else if (query || category) {
                    queryParams = !category ? {
                        schema: GET_BY_TITLE,
                        params: {
                            title: query
                        }
                    } : {
                        schema: GET_BY_TITLE_AND_CATEGORY,
                        params: {
                            title: query,
                            category: category,
                        }
                    }
                }

                api.fetch(queryParams.schema, queryParams.params)
                    .then((res) => {
                        setData(res)
                        setLoading(false)
                    });
            }

        } catch (error) {
            setError(error)
        }
    }, [query, category])

    return { data, loading, error }
}
