import React from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
  return (
    <> 
       <div className="w-full h-full-auto flex items-center gap-1 flex-wrap">
             <Link to="/" className='lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh]h-[25vh]'
             style={{
                backgroundImage: `url("https://source.unsplash.com/random/?adventures")`,
                 backgroundPosition: "center",
                 backgroundSize: "cover",
                 backgroundRepeat: "no-repeat",
                 }}
                 / >
                 <Link to="/" className='lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh]h-[25vh]'
             style={{
                backgroundImage: `url("https://source.unsplash.com/random/?mountains")`,
                 backgroundPosition: "center",
                 backgroundSize: "cover",
                 backgroundRepeat: "no-repeat",
                 }}
                 / >
                 <Link to="/" className='lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh]h-[25vh]'
             style={{
                backgroundImage: `url("https://source.unsplash.com/random/?nature")`,
                 backgroundPosition: "center",
                 backgroundSize: "cover",
                 backgroundRepeat: "no-repeat",
                 }}
                 / >
                 <Link to="/" className='lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh]h-[25vh]'
             style={{
                backgroundImage: `url("https://source.unsplash.com/random/?waterfall")`,
                 backgroundPosition: "center",
                 backgroundSize: "cover",
                 backgroundRepeat: "no-repeat",
                 }}
                 / >
                 <Link to="/" className='lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh]h-[25vh]'
             style={{
                backgroundImage: `url("https://source.unsplash.com/random/?animals")`,
                 backgroundPosition: "center",
                 backgroundSize: "cover",
                 backgroundRepeat: "no-repeat",
                 }}
                 / >
                 <Link to="/" className='lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh]h-[25vh]'
             style={{
                backgroundImage: `url("https://source.unsplash.com/random/?temples")`,
                 backgroundPosition: "center",
                 backgroundSize: "cover",
                 backgroundRepeat: "no-repeat",
                 }}
                 / >
       </div>
    </>
  )
}

export default Posts