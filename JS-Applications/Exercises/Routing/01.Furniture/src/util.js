export function getUserData() {
  return JSON.parse(sessionStorage.getItem('userData'));
}

export function setUserData(userData) {
  sessionStorage.setItem('userData', JSON.stringify(userData));
}

export function removeUserData() {
  sessionStorage.removeItem('userData');
}