export function validateJson(_:any, value:any) {
    try {
        JSON.parse(value);
        return Promise.resolve();
    } catch(e) {
        return Promise.reject(new Error('Invalid JSON'));
    }
}