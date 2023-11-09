import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'contact',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'fullname',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Date Submitted',
      type: 'datetime',
    }),
    defineField({
      name: 'message',
      title: 'message',
      type: 'text',
    }),
  ],
})
