import React from "react";
import Image from "next/image";
function About() {
  return (
    <>
      <div className="relative">
        <Image
          className="w-full h-72 z-0 bg-amber-50 filter grayscale object-cover"
          src={
            "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          width={400}
          height={1024}
          alt={""}
        ></Image>
        <div className="absolute px-2 py-1 bottom-6 left-4 font-extrabold bg-green-400 text-white">
          <h1 className="text-4xl">Digital Storytellers</h1>
          <h2 className="text-2xl">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className="flex gap-20">
        <div className="basis-1/2">
          <h1 className="text-4xl font-extrabold mt-8">Who Are We?</h1>
          <p className="mt-8 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            laudantium hic cupiditate error atque tempora dolorem eum provident
            ex voluptates itaque a molestias temporibus aut aliquid natus dolor
            tenetur aperiam? Lorem ipsum dolor sit amet consectetur adipisicing
            <br />
            <br />
            elit. Eaque corporis non, vel illo totam sequi doloremque magni
            obcaecati minus perspiciatis, expedita dolor amet? Culpa iste rerum
            dicta cumque sit repellendus?
          </p>
        </div>
        <div className="basis-1/2">
          <h1 className="text-4xl mt-8">What We Do?</h1>
          <p className="text-lg mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            similique culpa autem, ducimus esse fugit dicta veritatis est cumque
            consectetur enim dolorum eum nihil quo cupiditate aspernatur
            praesentium quibusdam repellat?
          </p>
          <br />
          <p>- Dynamic Websites</p>
          <br />
          <p>- Fast and Handy</p>
          <br />
          <p>- Movile Apps</p>
          <br />
          <button className="text-white bg-green-500 px-3 py-3 rounded-lg">Contact</button>
        </div>
      </div>
    </>
  );
}

export default About;
