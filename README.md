## Auth0 `getAccessTokenSilently` performance issue reproducible example


### Steps to reproduce:
1. Clone the repo
   ```sh
   git clone https://github.com/YassinEldeeb/auth0-perf-bug-reproducible
   ```
2. Install the dependencies
   ```sh
   yarn
   ```
3. Run next.js in development
   ```sh
   yarn dev
   ```
4. Open `http://localhost:3000` in your browser
5. Hit the `Login` button.
6. Enter your credentials.
7. Open your browser console and wait for the `getAccessTokenSilently` and `console.time` results
8. It'll take 5-10 seconds to get the result
