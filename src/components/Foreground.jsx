import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null)
  const data = [
    {
      desc: "This is change Now.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true,
         tagTitle: "Download Now",
          tagColor: "blue" 
        },
    },
    {
      desc: "This is change Now.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true,
         tagTitle: "Uploud ",
          tagColor: "green" 
        },
    },
    {
      desc: "This is change Now.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false,
         tagTitle: "Download Now",
          tagColor: "blue" 
        },
    },
  ];

  return (
    <>
      <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-10">
       {data.map((item,index)=>(
        <Card data={item} refrence={ref}/>
       ))}
      </div>
    </>
  );
};

export default Foreground;
