// @flow
import * as React from 'react'

export type FieldValue = {
  label: string,
  value: string
}

type Props = {
  index?: number,
  type?: string,
  value?: string,
  values?: Array<FieldValue>,
  handleUpdate: (value: string, index: number) => void
}

export type Field = {
  QBComponent?: React.ComponentType<Props>,
  defaultOperator?: string,
  defaultValue?: string,
  id: string,
  input: string, // TODO: Constrain to set?
  label: string,
  multiple?: boolean,
  operators?: Array<string>,
  placeholder?: string,
  type: string, // TODO: Constrain to set?
  values?: Array<FieldValue>
}
