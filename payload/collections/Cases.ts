import type { CollectionConfig } from 'payload'
import { lexicalHTML } from '@payloadcms/richtext-lexical'

export const Cases: CollectionConfig = {
  slug: 'cases',
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'featured', 'sortOrder', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'excerpt', type: 'textarea' },
    { name: 'featuredImage', type: 'upload', relationTo: 'media' },
    { name: 'category', type: 'text' },
    {
      name: 'services',
      type: 'array',
      fields: [{ name: 'service', type: 'text' }],
    },
    { name: 'year', type: 'text' },
    { name: 'featured', type: 'checkbox', defaultValue: false },
    { name: 'sortOrder', type: 'number', defaultValue: 0 },
    {
      name: 'content',
      type: 'richText',
    },
    lexicalHTML('content', {
      name: 'contentHTML',
      hidden: true,
      storeInDB: true,
    }),
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
      ],
    },
  ],
}
