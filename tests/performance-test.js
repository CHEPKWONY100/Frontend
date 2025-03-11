import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10, // Number of virtual users
  duration: '30s', // Test duration
};

export default function () {
  const baseURL = 'https://jsonplaceholder.typicode.com';

  // Test GET /users
  let res = http.get(`${baseURL}/users`);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response is not empty': (r) => r.json().length > 0,
  });

  // Test GET /albums/1
  res = http.get(`${baseURL}/albums/1`);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response has title': (r) => r.json().hasOwnProperty('title'),
  });

  // Test GET /photos
  res = http.get(`${baseURL}/photos`);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response is not empty': (r) => r.json().length > 0,
  });

  sleep(1); // Add a 1-second pause between iterations
}