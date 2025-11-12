import Image from "next/image";
import Hero from '../../public/hero.png'
export default function Home() {
  return (
   <div className="flex md:flex-row flex-col gap-10">
    <div className="basis-1/2 self-center justify-self-center">
    <h1 className="text-6xl font-bold bg-linear-to-b mb-8 from-green-900 to-white bg-clip-text text-transparent">
      Better Design for the digital Products.
    </h1>
    <p className="text-xl mb-8">Turning your idea into Reality. We bring together the teams from the global tech industry.</p>
    <button className="bg-green-700 rounded-lg font-bold px-3 py-5">See Our Works</button>
    </div>
    <div className="basis-1/2 self-center justify-self-center">
      <Image src={Hero} alt={""}></Image>
    </div>
   </div>
  );
}
