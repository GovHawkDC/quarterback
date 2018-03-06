// @flow
import * as React from 'react'
import type { SelectValue } from './SelectValue'

type Props = {
  index?: number,
  type?: string,
  value?: string,
  values?: Array<SelectValue>,
  handleUpdate: (value: string, index: number) => void
}

export type Field = {
  QBComponent?: React.ComponentType<Props>,
  defaultOperator?: string,
  defaultValue?: string,
  id: string,
  input: string, // TODO: Constrain to set?
  label: string,
  operators?: Array<string>,
  type: string, // TODO: Constrain to set?
  values?: Array<SelectValue>
}
