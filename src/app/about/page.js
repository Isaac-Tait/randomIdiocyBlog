import Image from "next/image";

export default function About() {
  return (
    <div className="h-screen">
      <h1 className="text-center text-5xl pb-12">Hi there</h1>
      <Image
        src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1683733036/Random%20Idiocy/IMG_1371_wbquvs.jpg"
        alt="the man himself holding a tasty beverage"
        height={300}
        width={750}
        className="mx-auto rounded-xl"
      />
      <div className="font-sans max-w-6xl bg-slate-300 mx-auto h-1/3 mt-4">
        <p
          className="first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left px-2"
        >
          Hello and welcome to Random Idiocy. Myself and my good friend Greg
          built the Random Idiocy empire from the ground up in the summer of
          1996. Using my parents camcorder we scripted, casted, and shot
          numerous videos. Over the years Random Idiocy grew, morphed, and
          occasionally got left on the wayside. But we never forgot it. So
          please take a moment to poke around. I posted some of the old videos
          too for your viewing pleasure. As well as videos I also share my
          thoughts, movie reviews, musings, music, recipes, poetry - you know
          whatever my mind concocts as I go about my day.{" "}
        </p>
      </div>
    </div>
  );
}
