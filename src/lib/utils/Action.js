// @flow
import type { Data } from './Data'
import type { Field } from './Field'

export type Action = {
  QB: string,
  display: string,
  getDefaultData: (fields: ?Array<Field>) => Data
}
