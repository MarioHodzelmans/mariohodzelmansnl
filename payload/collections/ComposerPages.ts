import type { CollectionConfig } from 'payload'

import { CardsGridBlock } from '../blocks/CardsGridBlock.ts'
import { CTABlock } from '../blocks/CTABlock.ts'
import { FeaturedArticleBlock } from '../blocks/FeaturedArticleBlock.ts'
import { HeroBlock } from '../blocks/HeroBlock.ts'
import { NumberedListBlock } from '../blocks/NumberedListBlock.ts'
import { SplitTextBlock } from '../blocks/SplitTextBlock.ts'

export const ComposerPages: CollectionConfig = {
  slug: 'composer-pages',
  labels: {
    singular: 'Visual Composer Page',
    plural: 'Visual Composer',
  },
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    description: 'Build standalone pages with reusable visual blocks. Preview at /composer/[slug].',
    group: 'Visual Composer',
    preview: (doc) => `/composer/${doc.slug}`,
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      index: true,
      required: true,
      unique: true,
      admin: {
        description: 'Preview URL: /composer/[slug]',
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        FeaturedArticleBlock,
        SplitTextBlock,
        CardsGridBlock,
        NumberedListBlock,
        CTABlock,
      ],
      required: true,
    },
  ],
}
