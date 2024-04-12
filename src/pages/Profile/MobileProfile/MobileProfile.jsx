import React from 'react'
import { Link } from 'react-router-dom'
import Settings from '../../../components/Icons/Settings/Settings'
import LinkIcon from '../../../components/Icons/LinkIcon/LinkIcon'

const MobileProfile = () => {
  return (
    <>
      <div className="w-full h-auto lg:hidden md:hidden sm:block block text-white">
        {/* Your info section */}
      <div className="w-full h-auto flex items-center  
         gap-x-8 justify-center mb-10">
          <img 
          src="https://source.unsplash.com/random/?climber" 
          alt="profile img"
          className="rounded-full w-20 h-20 object-cover" />
                <div className="flex items-start flex-col gap-y-3">
                 
              {/*   username  */}

              <Link to="/profile"
              className="text-lg text-gray-200 font-normal">mountain.men
              </Link>

               {/* Buttons */}
               <div className="flex-items-center gap-x-2">
               <button className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
               Edit Profile
               </button>
               <button className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
               View Archive
               </button>
                </div>
                </div>
                  {/* For  reference only..*/}
               <div className="flex items-start flex-col">
                  <div className="flex items-center gap-x-5 mb-4">
                   <Link to="/profile"
                 className="text-lg text-gray-200 font-normal">mountain.men</Link>
                   <div className="flex-items-center gap-x-2">
                     <button className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
                     Edit Profile
                     </button>
                     <button className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
                     View Archive
                     </button>
                   </div>
                   <Settings />
             </div>
             {/* post, follower, following */}
             <div className="flex items-center gap-x-6 mb-4">
                <h6 className="text-base text-gray-100 font-normal">109 Posts</h6>
                <Link to="/" className="text-base text-gray-100 font-normal">503K followers</Link>
                <Link to="/" className="text-base text-gray-100 font-normal">200 following</Link>
             </div>
             {/* fullname */}
             <p className="text-base text-gray-100 font-normal">
               Mountain men </p>
               {/*  Bio */} 
               <p className='text-base text-gray-100 font-normal'>
               Smith <br />
               Professional Account <br />
               Web/App development <br/ >
               Graphics Deginner
               </p>
               {/* Link */}
               <p className='text-gray-100 font-normal flex items-center gap-x-2'>
                 <LinkIcon />
                   <Link to="/" className="text-blue-500 hover: underline font-medius">
                   www.mountain.com
                   </Link>
               </p>
            </div>      
         </div>
      </div>
    </>
  )
}

export default MobileProfile
