import { makeSource } from 'contentlayer2/source-files'
import { Stories } from './schemas/Stories'

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Stories],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
