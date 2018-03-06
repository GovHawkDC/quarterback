function insertAt (items: Array<mixed>, index: number, item: mixed): Array<mixed> {
  return [
    ...items.slice(0, index),
    item,
    ...items.slice(index + 1)
  ]
}

function removeAt (items: Array<mixed>, index: number): Array<mixed> {
  return items.filter((...args) => args[1] !== index)
}

export {
  insertAt,
  removeAt
}
