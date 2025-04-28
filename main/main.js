import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 10, // 10 virtual users
  duration: '30s', // run the test for 30 seconds
};

export default function () {
  const res = http.get('https://test-api.example.com/api/data');

  check(res, {
    // 'status is 200': (r) => r.status === 200,
    "response time < 500ms": (r) => r.timings.duration < 500,
  });
}
