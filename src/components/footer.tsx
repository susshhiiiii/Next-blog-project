import React from "react";
import Facebook from "../../public/1.png";
import Insta from "../../public/2.png";
import Twitter from "../../public/3.png";
import Youtube from "../../public/4.png";
import Image from "next/image";
const data = [
  { id:1,src: Facebook },
  { id: 2,src: Insta },
  { id: 3,src: Twitter },
  { id: 4,src: Youtube },
];

function Footer() {
  return (
    <div className="flex justify-between">
      <div>
        ©2023 <span className="text-green-300">Lamamia.</span> All rights
        reserved.
      </div>
      <div className="flex gap-2">
        {data.map(item=>(<Image key={item.id} src={item.src} className="h-4 w-4" alt={"image"}/>))}
      </div>
    </div>
  );
}

export default Footer;
