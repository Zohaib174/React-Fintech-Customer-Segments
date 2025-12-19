import React from 'react'
import LeftContent from "./leftContent"
import RightContent from "./rightContent"
const page1Content = (props) => {
  return (
    <div className='px-24 pb-16   h-[90vh]  flex gap-10 items-center '>
      
        <LeftContent/>
        <RightContent  user={props.user}/>
    </div>
  )
}

export default page1Content