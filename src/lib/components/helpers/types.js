// @flow
export type Action = {
  QB: string,
  action: string
}

export type Condition = {
  display: string,
  value: string
}

export type Data = {
  QB: string,
  condition: string,
  rules: Array // The elements can vary
}

// TODO: Might not need to be shared...
export type QBProps = {
  QB: string,
  action: string, // Might not need...
  actions: Array<Action>,
  conditions: Array<Condition>,
  data: Data,
  fields: Array, // Spec out Field type
  handleCreate: (QB: string) => void,
  handleDelete: () => void, // TODO:
  handleUpdate: () => void, // TODO:
  index: number,
  title: string,
  types: Array<QBProps> // TODO
}
