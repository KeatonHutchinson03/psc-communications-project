import { defineDocumentType } from 'contentlayer2/source-files'

export const Stories = defineDocumentType(() => ({
  name: 'Stories',
  filePathPattern: 'stories.json',
  contentType: 'data',
  fields: {
    id: { type: 'number', required: true },
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    researcher: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
  },
}))
