import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import workHistory from './workHistory'
import blog from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, workHistory, blog],
}
