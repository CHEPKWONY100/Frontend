# Performance Test Report - March 07, 2025, 10:00 AM EAT

## Test Configuration
- **Tool:** k6 v0.57.0
- **Script:** tests/performance-test.js
- **Virtual Users (VUs):** 10 max
- **Duration:** 30 seconds

## Endpoints Tested
- **GET /users**
  - **Average Response Time:** 7.23s (contributes to overall average)
  - **Success Rate:** 100%
- **GET /albums/1**
  - **Average Response Time:** 7.23s (contributes to overall average)
  - **Success Rate:** 100%
- **GET /photos**
  - **Average Response Time:** 7.23s (contributes to overall average)
  - **Success Rate:** 100%

## Key Metrics
- **Total Requests:** 46 (0.77 requests/s)
- **Average Response Time:** 7.23s
- **Median Response Time:** 3.01s
- **90th Percentile:** 22.91s
- **Maximum Response Time:** 34.87s
- **Data Received:** 16 MB (268 kB/s)
- **Iterations:** 12 (0.20 iterations/s)
- **Failed Requests:** 0.00% (0 out of 46)

## Observations
- All requests completed successfully with no errors.
- The average response time (7.23s) and high percentiles (e.g., 22.91s at P90) suggest significant network latency or rate limiting by the JSONPlaceholder API under the 10 VU load.
- The low request rate (0.77/s) is likely due to the 1-second `sleep` in the script, limiting throughput.
- The large data received (16 MB) reflects the `/photos` endpoint’s large response size.

## Recommendations
- Reduce or remove the `sleep(1)` in the script to increase throughput and better simulate real-world load.
- Monitor the API under higher VUs (e.g., 50) to assess scalability, if allowed by the assignment.