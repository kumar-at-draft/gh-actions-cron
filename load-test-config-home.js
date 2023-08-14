import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  duration: '1m',
  vus: 50,
  thresholds: {
    http_req_failed: ['rate<0.01'], // to check that http errors are less than 1%
    http_req_duration: ['p(95)<500'], // to check that 95 percent of response times are below 500ms
  },
};

export default function () {
  const res = http.get('https://gh-actions-cron.onrender.com/');   // <================ Enter your deployed app's URL here
  sleep(1);
}
