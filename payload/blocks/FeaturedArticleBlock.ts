import type { Block } from 'payload'

export const FeaturedArticleBlock: Block = {
  slug: 'featuredArticle',
  labels: {
    singular: 'Featured Article',
    plural: 'Featured Articles',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'Featured Article',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'body',
      type: 'textarea',
      admin: {
        description: 'Separate paragraphs with blank lines.',
      },
    },
    {
      name: 'link',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'href',
          type: 'text',
        },
      ],
    },
  ],
}
