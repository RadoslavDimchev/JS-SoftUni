export function getUserData() {
  return JSON.parse(sessionStorage.getItem('userData'));
}

export function setUserData(data) {
  sessionStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData() {
  sessionStorage.removeItem('userData');
}

export function createSubmitHendler(callback, ...fieldNames) {
  return function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const result = fieldNames.reduce((a, c) => Object.assign({ [c]: formData.get(c).trim() }, a), {});
    callback(result);
  };
}

export function parseQuerystring(string) {
  return string
  .split('&')
  .map(p => p.split('='))
  .reduce((a, [k, v]) => Object.assign(a, {[k]: v}), {});
}