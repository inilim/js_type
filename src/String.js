export function isString(value) {
    return typeof value === "string" || value instanceof String;
}

export function isNotEmptyString(value) {
    if (isString(value)) {
        return value !== "";
    }
    return false;
}