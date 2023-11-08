import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import appointment from './schemas/appointment'
import work from './schemas/work'
import customer from './schemas/customer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [work, customer, appointment, blockContent],
}
