// @flow

/**
 * E.g., 'is_empty' operator
 */
export type EmptyValue = null

/**
 * Most inputs, e.g., single text input with 'equal' operator
 */
export type SingleValue = string

/**
 * E.g., 1) two number text inputs with 'between' operator
 * E.g., 2) single checkbox input with 0+ boxes checked
 */
export type MultiValue = Array<string>

/**
 * E.g., two number checkbox inputs with 'between' operator
 */
export type NestedMultiValue = Array<MultiValue>

export type NonEmptyValue = SingleValue | MultiValue | NestedMultiValue
export type Value = EmptyValue | NonEmptyValue
