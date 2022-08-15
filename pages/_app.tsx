import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth0Provider } from '@auth0/auth0-react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      // refresh tokens makes it less risky for the frontend to save accessToken in localStorage,
      // cause it generates them with very short lifetimes and renews them before they expire
      useRefreshTokens={true}
      // cacheLocation must be set to `localstorage` to persist authenticated users
      cacheLocation='localstorage'
      domain='spantree-auth0-reference.us.auth0.com'
      clientId='SJbdfhzjMhpqhYpoAzVIhdb9L8DID7NA'
      redirectUri='http://localhost:3000'
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}

export default MyApp
