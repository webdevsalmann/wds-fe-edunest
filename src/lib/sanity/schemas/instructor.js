import { defineField, defineType } from 'sanity';

export const instructor = defineType({
    name: 'instructor',
    title: 'Instructor',
    type: 'document',
    fields: [
        defineField({
            name: 'instructor_name',
            title: 'Instructor Name',
            type: 'string',
        }),
        defineField({
            name: 'profile_image',
            title: 'Profile Image',
            type: 'image',
        }),
    ],
});