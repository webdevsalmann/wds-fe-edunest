import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
    apiVersion: '2023-03-24',
})

const builder = imageUrlBuilder(client)

export class sanityService {
    // Fetching
    async getAllCourses() {
        const query = `
        *[_type=="course"]{
            _id,
            thumbnail,
            slug,
            title,
            description,
            price,
          }
        `
        return await client.fetch(query)
    }

    async getCourseById(id) {
        return await client.fetch(`*[_type=="course" && _id == "${id}"]{
            _id,
            title,
            description,
            about,
            _createdAt,
            _updatedAt,
            chapters,
        }`)
    }

    // Others
    getImageUrl(source) {
        return builder.image(source)
    }
}

const SanityService = new sanityService()
export default SanityService