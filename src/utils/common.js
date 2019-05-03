export const isEmptyString = (str) => {
    return (!str || 0 === str.length);
}

export const handleInputChange = (event, setValue) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    setValue(value, name)
}