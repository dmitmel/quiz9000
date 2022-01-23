export function map(obj, callback) {
  return Object.keys(obj).map(key => callback(key, obj[key]), {});
}

export function filter(obj, predicate) {
  return Object.keys(obj).filter(key => predicate(key, obj[key]), {});
}
