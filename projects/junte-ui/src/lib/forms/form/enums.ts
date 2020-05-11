export enum ValidationTypeError {
  required = 'required',
  minLength = 'minlength',
  maxLength = 'maxlength',
  min = 'min',
  max = 'max',
  email = 'email',
  pattern = 'pattern'
}

export enum FormState {
  loading = 'loading',
  error = 'error'
}
