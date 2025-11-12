import Image from "next/image";
import Illustrations from "../../../public/illustration.png";
import Apps from "../../../public/apps.jpg";
import Websites from "../../../public/websites.jpg";
import Link from "next/link";
function Portfolio() {
  return (
    <div>
      <h1 className="text-3xl mb-5 font-bold">Choose a gallery</h1>
      <div className="flex gap-4">
        <Link className="basis-1/4 relative group" href={"/portfolio/Illustrations"}>
          <Image
            className="h-96 w-72 border-4 object-cover border-gray-300 "
            src={Illustrations}
            alt={""}
          ></Image>
           <p className="absolute text-4xl font-extrabold group-hover:text-green-400 right-12 bottom-3 z-10">Illustrations</p>
        </Link>
        <Link className="basis-1/4 relative group" href={"/portfolio/Websites"}>
          <Image
            className="h-96 w-72 border-4 object-cover object-left border-gray-300  "
            src={Websites}
            alt={""}
          ></Image>
          <p className="absolute text-4xl font-extrabold group-hover:text-green-400 right-12 bottom-3 z-10">Websites</p>
        </Link>
        <Link className="basis-1/4 relative group" href={"/portfolio/Apps"}>
          <Image
            className="h-96 w-72 border-4 z-0 object-left object-cover border-gray-300 "
            src={Apps}
            alt={""}
          ></Image>
          <p className="absolute text-4xl font-extrabold group-hover:text-green-400 right-12 bottom-3 z-10">Applications</p>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
