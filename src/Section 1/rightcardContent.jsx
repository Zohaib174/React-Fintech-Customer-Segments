import React from 'react'

const rightcardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full  p-5 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold">
          {props.id +1} 
        </h2>
        <div>
          <p className=" text-lg leading-relaxed text-white mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita tenetur quam cumque totam veritatis tempore!
          </p>
          <div className="flex justify-between gap-">
            <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full ">
              {props.tag}
            </button>
            <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full ">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>    
  )
}

export default rightcardContent