// @flow
import * as React from 'react'

export type Field = {
  component?: React.ComponentType<>, // TODO: Props
  id: string,
  input: string, // TODO: Constrain to set?
  label: string,
  type: string // TODO: Constrain to set?
}
