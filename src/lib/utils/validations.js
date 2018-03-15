// function defaultValidateValue (validation, rule, value) {
// const {
//   allowEmptyValue = false,
//   format,
//   formatMap,
//   max,
//   min
// } = validation
//
// const {
//   operator,
//   type
// } = rule
// }

// function defaultValidate (validation, rule) {
// const {
//   value
// } = rule
//
// const values = value == null || typeof value === 'string'
//   ? [value]
//   : value
//
// const validations = values
//   .map(value => defaultValidateValue(validation, rule, value))
//   .filter(result => result !== true)
//
// if (validations.length > 0) {
//   return validations
// }
//
// return true
// }

function validate (validation, rule) {
  // const {
  //   validator,
  //   skipValidation = false
  // } = validation
  //
  // const {
  //   touched
  // } = rule
  //
  // if (skipValidation || touched) {
  //   return true
  // }
}

export {
  validate
}
