// @flow
import * as React from 'react'

export type Field = {
  component?: React.ComponentType<>, // TODO: Props
  id: string,
  input: string, // TODO: Constrain to set?
  label: string,
  operators?: Array<string>,
  type: string, // TODO: Constrain to set?
  // values: // TODO:
}
