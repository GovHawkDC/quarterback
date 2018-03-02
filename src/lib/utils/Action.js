// @flow
import type { Data } from './Data'

export type Action = {
  QB: string,
  display: string,
  getDefaultData: () => Data
}
