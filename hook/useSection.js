import { useEffect, useState } from "react"
import api from "../sanity-client"
import { GET_ALL_SECTIONS } from "../queries/section"

export const useSection = () => {
    const [sections, setSections] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            api.fetch(GET_ALL_SECTIONS).then((data) => {
                setSections(data)
            });
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [])

    return { sections, loading, error }
}