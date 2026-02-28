import React from 'react'
import { Link } from 'react-router-dom';

const HomePageCard = ({title, img, link, author, isBook, id}) => {
  if (isBook) {
    return (
      <Link to={`/product/${id}`} className="h-[420px] bg-white z-30 m-3 block hover:shadow-lg transition-shadow">
        <div className="text-lg xl:text-xl font-semibold ml-4 mt-4">
            {title}
        </div>
        {author && <div className="text-sm text-gray-600 ml-4">{author}</div>}
        <div className="h-[300px] m-4">
           <img className="h-[100%] w-[100%] object-contain" src={img} alt={title}/> 
        </div>
        <div className="text-xs xl:text-sm text-blue-400 ml-4">
            {link}
        </div>
      </Link>
    );
  }

  return (
    <div className="h-[420px] bg-white z-30 m-3">
        <div className="text-lg xl:text-xl font-semibold ml-4 mt-4">
            {title}
        </div>
        <div className="h-[300px] m-4">
           <img className="h-[100%] w-[100%] object-cover" src={img} alt={title}/> 
        </div>
        <div className="text-xs xl:text-sm text-blue-400 ml-4">
            {link}
        </div>
    </div>
  )
}

export default HomePageCard