## Auth0 `getAccessTokenSilently` performance issue reproducible example


### Steps to reproduce:
1. Hit the `Login` button.
2. Enter your credentials.
3. Open your browser console and wait for the `getAccessTokenSilently` and `console.time` results
4. It'll take 5-10 seconds to get the result
