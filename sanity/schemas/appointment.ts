import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'appointment',
  title: 'appointment',
  type: 'document',
  fields: [
    defineField({
      name: 'service',
      title: 'service',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'date',
      type: 'date',
    }),
    defineField({
      name: 'time',
      title: 'time',
      type: 'string',
    }),
    defineField({
      name: 'comments',
      title: 'comments',
      type: 'text',
    }),
  ],
})
