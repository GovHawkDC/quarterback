import type { Type } from './Type'

function getTypeByQB (types: Array<Type>, QB: string): ?Type {
  return types.find(type => type.QB === QB)
}

export {
  getTypeByQB
}
