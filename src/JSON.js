import {isString} from './String';
import {isObject} from './Object';
import {isArray} from './ObjectArray';

/**
 * @param {string} value 
 */
export function isJSONAsObject(value) {
    try {
        if (!isString(value)) return false;
        return isObject(JSON.parse(value))
    } catch (e) {
        return false;
    }
}

/**
 * @param {string} value 
 */
export function isJSONAsArray(value) {
    try {
        if (!isString(value)) return false;
        return isArray(JSON.parse(value))
    } catch (e) {
        return false;
    }
}

/**
 * @param {string} value 
 */
export function isJSONAsString(value) {
    try {
        if (!isString(value)) return false;
        return isString(JSON.parse(value))
    } catch (e) {
        return false;
    }
}