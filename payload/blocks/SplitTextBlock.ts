import type { Block } from 'payload'

export const SplitTextBlock: Block = {
  slug: 'splitText',
  labels: {
    singular: 'Split Text',
    plural: 'Split Text Sections',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
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
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
