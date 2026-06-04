import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'Mario Hodzelmans',
    },
    {
      name: 'heading',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Use line breaks for visual headline breaks.',
      },
    },
    {
      name: 'intro',
      type: 'textarea',
    },
    {
      name: 'actions',
      type: 'array',
      maxRows: 2,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
