import { defineField, defineType } from 'sanity';

export const chapter = defineType({
  name: 'chapter',
  title: 'Chapter',
  type: 'document',
  fields: [
    defineField({
      name: 'video_url',
      title: 'Video Url',
      type: 'url',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'attachment',
      title: 'Attachment',
      type: 'file',
    }),
    defineField({
      name: 'free_preview',
      title: 'Free Preview',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
  ],
});