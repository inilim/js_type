export function isArray(value) {
    return typeof value === "object" && Array.isArray(value) && value !== null;
}