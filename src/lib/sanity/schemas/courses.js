import { defineField, defineType } from 'sanity'

export const courses = defineType({
    name: 'courses',
    title: 'Courses',
    type: 'document',
    fields: [
        // Thumbnail
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            validation: (Rule) => Rule.required(),
        }),
        // Title
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        // Slug
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
            },
            validation: (Rule) => Rule.required(),
        }),
        // Description
        defineField({
            name: 'description',
            title: 'Short Description (upto 350 character)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        // About
        defineField({
            name: 'about',
            title: 'About',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        }),
        // Tags
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        // Instructor
        defineField({
            name: 'instructor_details',
            title: 'Instructor Details',
            type: 'reference',
            to: [{ type: 'instructor' }],
        }),
        // Chapters
        defineField({
            name: 'chapters',
            title: 'Chapters',
            type: 'array',
            of: [{ type: 'chapter' }],
            validation: (Rule) => Rule.required(),
        }),
        // Duration
        defineField({
            name: 'duration',
            title: 'Total Duration',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        // Pricing
        defineField({
            name: 'pricing',
            title: 'Pricing For the course',
            type: 'object',
            fields: [
                defineField({
                    name: 'free',
                    title: 'Free',
                    type: 'boolean',
                    initialValue: false
                }),
                defineField({
                    name: 'price',
                    title: 'Price',
                    type: 'number',
                    hidden: ({ document }) => document?.pricing?.free
                }),
                defineField({
                    name: 'discoutn_price',
                    title: 'Discount Price (Opitonal)',
                    type: 'number',
                    hidden: ({ document }) => document?.pricing?.free
                }),
                defineField({
                    name: 'benefits',
                    title: 'Benefits',
                    type: 'array',
                    of: [{ type: 'string' }],
                    validation: (Rule) => Rule.required(),
                }),
            ]
        }),
        // TODO
        // defineField({
        //     name: 'enrollment',
        //     title: 'Enrollment',
        //     type: 'number',
        // }),
        // // TODO
        // defineField({
        //     name: 'reviews',
        //     title: 'Reviews',
        //     type: 'number',
        // }),
        defineField({
            name: 'attachment',
            title: 'Attachment (Optional)',
            type: 'file',
        }),
    ],
})