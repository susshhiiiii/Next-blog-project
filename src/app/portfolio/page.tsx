import Image from "next/image";
import Illustrations from "../../../public/illustration.png";
import Apps from "../../../public/apps.jpg";
import Websites from "../../../public/websites.jpg";
function Portfolio() {
  return (
    <div>
      <h1 className="text-8xl font-bold mb-5">Our Works</h1>
      <h1 className="text-3xl mb-5 font-bold">Choose a gallery</h1>
      <div className="flex gap-4">
        <div className="basis-1/4 relative">
          <Image
            className="h-96 w-72 border-4 object-cover  border-gray-300 "
            src={Illustrations}
            alt={""}
          ></Image>
           <p className="absolute text-4xl font-extrabold right-12 bottom-3 z-10">Illustrations</p>
        </div>
        <div className="basis-1/4 relative">
          <Image
            className="h-96 w-72 border-4 object-cover object-left border-gray-300  "
            src={Websites}
            alt={""}
          ></Image>
          <p className="absolute text-4xl font-extrabold right-12 bottom-3 z-10">Websites</p>
        </div>
        <div className="basis-1/4 relative">
          <Image
            className="h-96 w-72 border-4 z-0 object-left object-cover border-gray-300 "
            src={Apps}
            alt={""}
          ></Image>
          <p className="absolute text-4xl font-extrabold right-12 bottom-3 z-10">Applications</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
