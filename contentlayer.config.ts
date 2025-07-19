import { makeSource } from 'contentlayer2/source-files'

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [], // No document types, so no files get processed
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
