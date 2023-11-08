import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'customers',
  title: 'customers',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});
