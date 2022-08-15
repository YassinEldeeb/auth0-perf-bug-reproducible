import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import { useAuth0 } from '@auth0/auth0-react'

const Home: NextPage = () => {
  const {
    loginWithRedirect,
    getAccessTokenSilently,
    logout,
    isLoading,
    isAuthenticated,
  } = useAuth0()

  useEffect(
    () => {
      // TODO: Uncomment this if statement to fix the bug
      // if (!isLoading) {
      const randomNum = Math.floor(Math.random() * 100)
      console.time(`GET_ACCESS_TOKEN_TOOK_${randomNum}`)
      getAccessTokenSilently().then((token) => {
        console.timeEnd(`GET_ACCESS_TOKEN_TOOK_${randomNum}`)
        console.log(token)
      })
      // }
    },
    // TODO: Add `isLoading` to the dependency array to fix the bug
    []
  )

  return (
    <div>
      {!isAuthenticated ? (
        <button
          className='mt-4 inline-flex items-center px-5 py-2 border border-transparent text-xl font-normal rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={loginWithRedirect}
        >
          Login
        </button>
      ) : (
        <button
          className='mt-4 inline-flex items-center px-5 py-2 border border-transparent text-xl font-normal rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={() => logout()}
        >
          Logout
        </button>
      )}
    </div>
  )
}

export default Home
