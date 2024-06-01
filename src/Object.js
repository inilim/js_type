export function isObject(value) {
    return typeof value === "object" && !Array.isArray(value) && value !== null;
}

/**
 * 
 * @param {object} obj
 * @returns {bool}
 */
export function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}