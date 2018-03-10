// @flow
export type EmptyValue = null
export type SingleValue = string
export type MultiValue = Array<string>
export type NestedMultiValue = Array<MultiValue>
export type NonEmptyValue = SingleValue | MultiValue | NestedMultiValue
export type Value = EmptyValue | NonEmptyValue
