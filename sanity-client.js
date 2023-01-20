import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const api = sanityClient({
    projectId: 'ciwvzz25',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
})

const builder = imageUrlBuilder(api)
export const urlFor = (source) => builder.image(source)
export default api