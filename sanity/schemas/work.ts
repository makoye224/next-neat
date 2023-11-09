import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: 'work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'customer',
      title: 'customer',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'location',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'submittedAt',
      title: 'Date Submitted',
      type: 'datetime',
    }),
    defineField({
      name: 'review',
      title: 'review',
      type: 'text',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    }
  },
})
