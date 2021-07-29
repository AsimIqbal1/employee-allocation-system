export function validateInput(obj){
    const validObj = Object.values(obj).filter((item) => item.toString().length === 0)
    return !validObj.length;
}