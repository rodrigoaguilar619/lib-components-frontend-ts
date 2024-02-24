
/**
 * Performs a deep clone of the input object using JSON parsing and stringification.
 *
 * @param {any} obj - the object to be deep cloned
 * @return {any} the deep cloned object
 */
export const deepClone = (obj: any) => {
    return JSON.parse(JSON.stringify(obj));
}