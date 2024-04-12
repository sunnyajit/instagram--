import React from 'react';
import { Link } from 'react-router-dom'
import Settings from "../../../components/Icons/Settings/Settings";
import LinkIcon from "../../../components/Icons/LinkIcon/LinkIcon"
import highlightData from '../HighlightsData';
import Tab from './Tab/Tab';
import PostIcon from "../../../components/Icons/Post/post.png";
// import ReelIcon from "../../../components/Icons/Reel/reel.png"
// import TagIcon from "../../../components/Icons/Tag/tag.png";
import Posts from './Posts/Posts';
import Reels from './Reels/Reels';


const Profile = () => {
    // const [activeTab, setActiveTab] = useState("posts");
    // const [isContentVisible, setContentVisible] = useState(true);

    // const handleTabClick = (tab) => {
    //     setContentVisible(false);


    //     // delay animation
    //     setTimeout(() =>{
    //         setActiveTab(tab);
    //         setContentVisible(true);
    //     }, 300);
    // };
  return (
    <>
       <div className="lg:w-[88%] md:w-[88%] sm:w-full w-full h-auto lg:block md:block sm:hidden hidden">
         {/* Your info section */}
           <div className="w-full h-auto flex items-center lg:gap-x-20
           sm:gap-x-12 md:gap-x-12 gap-x-8 justify-center mb-10">
               <img 
               src="https://source.unsplash.com/random/?climber" 
               alt="profile img"
               className="rounded-full lg:w-44 md:w-44 sm:w-36 w-32:lg:h-44 md:h-44 sm:h-36 h-36 object-cover" />
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
           {/* Highlight Section */}
            <div className="w-full h auto flex items-center gap-x-9 mb-10">
                 <div className="max-w-[61vw] w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
                 {highlightData.map((data)  =>(
                    <Link to="/" key={data.id} className='flex-items-center justify-between flex-col flex-shrink-0'>
                      <div className="w-28 h-28 ronded-full object-cover p-[2px] bg-gradient-to-r from-[#1d1d1d] to-[#1d1d1d]">
                         <img 
                           src={data.img} 
                           alt={data.name}
                           className="rounded-full h-full w-full  object-cover p-[2.5px] bg-black" />
                        </div>
                        <p className="text-white text-sm mt-1 hidden">
                         {data.name}
                      </p>
                    </Link>
                    ))}
                 </div>
            </div>
            {/*  Post, Reels, Tagged  section */}
              
        </div>
    </>
  )
}

export default Profile