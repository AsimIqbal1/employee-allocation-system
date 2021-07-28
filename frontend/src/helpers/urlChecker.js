export function isCompleteUrl(url = '') {
    let val = url.indexOf('https://') > -1 || url.indexOf('http://') > -1;
    return val;
}