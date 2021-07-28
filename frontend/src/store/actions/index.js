/**
 * Return action creator Object Type
 * @param {String} type
 * @param {Object} payload
 */

export function request(type, payload) {
    return { type, payload };
}

export function success(type, payload) {
    return { type, payload };
}

export function failure(type, payload) {
    return { type, payload };
}
