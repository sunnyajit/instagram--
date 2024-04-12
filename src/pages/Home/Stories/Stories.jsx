import React from 'react'
import { Link } from 'react-router-dom'
import storiesData from './StoriesData/StoriesData'
import TextEllipse from './TextEllipse/TextEllipse'
const Stories = () => {
    // 
  return (
    <> 
          <div className="lg:max-w-[41vw] md:mx-w-[70vw] sm:max-w-full max-w-full w-full h-auto flex items-center gap-x-3 overflow-x-scroll">
            <Link
               to="/"
                key="1"
                 className="flex items-center justify-center flex-col flex-sharing-0">
             <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-green-600">
                <img 
                src="https://source.unsplash.com/random/?flower" 
                alt="story img"
                className="rounded-full w-full h-full object-cover p-[2.5px] bg-black" />
             </div>
             <TextEllipse username="beautyofnature" maxLength={8}/>
            </Link>
          {storiesData.map((story) => (
                <Link 
                to="/" 
                 key={story.id}
                className="flex items-center justify-center flex-col flex-shring-0">
                 <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
                 <img 
                   src={story.imageUrl}
                   alt="story img"
                  className="rounded-full w-full h-full object-cover p-[2.5px] bg-black" />
            </div>
            <TextEllipse username={story.username} maxLength={8}/>
         </Link>
          ))}
       </div>
    </>
  )
}

export default Stories