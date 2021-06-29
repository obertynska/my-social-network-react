export const required = value => (value || typeof value === 'number' ? undefined : 'Required')
export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength300 = maxLength(300)



