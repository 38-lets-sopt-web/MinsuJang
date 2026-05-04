import ky from 'ky';
import { API_PREFIX_URL, API_TIMEOUT } from './constants';

export const api = ky.create({
  ...(API_PREFIX_URL ? { prefix: API_PREFIX_URL } : {}),
  timeout: API_TIMEOUT,
  retry: 0,
  hooks: {
    beforeRequest: [
      ({ request }) => {
        request.headers.set('Accept', 'application/json');
      },
    ],
  },
});
