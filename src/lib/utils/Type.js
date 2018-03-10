// @flow
import * as React from 'react'
import type { Action } from './Action'
import type { Condition } from './Condition'
import type { Field } from './Field'
import type { EmptyProps } from './Props'

export type Type = {
  QB?: string,
  QBComponent?: React.ComponentType<>, // TODO: Props
  action: Action,
  actionAddClass?: string,
  actionIcon?: React.ComponentType<EmptyProps>,
  conditions?: Array<Condition>,
  fields?: Array<Field>,
  title?: string,
  types?: Array<Type>,
}
