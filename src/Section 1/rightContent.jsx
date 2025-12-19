import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCard from "./rightCard";
const rightContent = (props) => {
  return (
    <div  id="right" className="h-full w-2/3 p-4 flex flex-nowrap gap-6 overflow-x-auto rounded-4xl">
      {props.user.map(function (elem,idx) {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  );
};

export default rightContent;
