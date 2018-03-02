// @flow
export type Action = {
  QB: string,
  action: string,
  // NOTE: Idea...
  // for basic rule -> { field: '', value: null } QB(inherited + merged)
  // for basic group -> { condition: '', rules: [ {BASIC_RULE} ] } QB(inherited + merged)
  defaultData: Object // Maybe a func that takes QB...
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



  // I think this belongs to separate...
  handleCreate: (QB: string) => void,
  handleDelete: () => void, // TODO:
  handleUpdate: () => void, // TODO:
  index: number
}

export type QuarterBackProps = {
  QB: string,
  // NOTE: Way to allow custom component to be injected by user
  QBComponent: React.ComponentType<QBProps>, // TODO: ...
  actions: Array<Action>,
  conditions: Array<Condition>,
  data: Data,
  fields: Array, // Spec out Field type
  title: string,
  types: Array<QuarterBackProps>, // TODO
}
