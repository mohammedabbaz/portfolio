import { type SchemaTypeDefinition } from 'sanity'
import { Skills } from './Schemas/Skills'
import { Projects } from './Schemas/Projects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Skills,
    Projects,
  ],
}
