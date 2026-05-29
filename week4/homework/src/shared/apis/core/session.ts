import { USER_ID_KEY } from './constants';

export function getStoredUserId() {
  const userId = localStorage.getItem(USER_ID_KEY);

  return userId ? Number(userId) : null;
}

export function setStoredUserId(userId: number) {
  localStorage.setItem(USER_ID_KEY, String(userId));
}

export function clearStoredUserId() {
  localStorage.removeItem(USER_ID_KEY);
}
