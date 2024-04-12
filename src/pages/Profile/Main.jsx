import React from 'react'
import Profile from './Profile/Profile'
import MobileProfile from './MobileProfile/MobileProfile'

const Main = () => {
  return (
    <>
      <lg:w className="md:w- sm:w-full w-full min-h-screen lg:py-10 md:py-6 sm:py-4 py-4 lg:px-14 md:px-12 sm:px-7 px-2">
        {/* Profile for large screen */}
          <Profile />
        {/* Profile  for small screen */}
          <MobileProfile />
      </lg:w>
    </>
  )
}

export default Main
