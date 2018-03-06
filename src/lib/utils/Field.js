// @flow
import * as React from 'react'
import type { SelectValue } from './SelectValue'

export type Field = {
  QBComponent?: React.ComponentType<>, // TODO: Props
  defaultOperator?: string,
  defaultValue?: string,
  id: string,
  input: string, // TODO: Constrain to set?
  label: string,
  operators?: Array<string>,
  type: string, // TODO: Constrain to set?
  values?: Array<SelectValue>
}
