import Image from "next/image";
import Link from "next/link";

import Footer from "../components/footer";

export default function About() {
  return (
    <div className="h-screen heropattern-random-inherit/10 bg-slate-100 pt-2">
      <header className="flex justify-between px-2 max-w-7xl mx-auto font-serif">
        <Link
          href="/"
          className="text-2xl hover:text-yellow-400 text-white font-semibold bg-slate-600 px-2 rounded-md"
        >
          Home
        </Link>
        <Link
          href="https://publish.obsidian.md/random-idiocy"
          target="__blank"
          className="text-2xl hover:text-yellow-400 text-white font-semibold bg-slate-600 px-2 rounded-md"
        >
          Read the Blog
        </Link>
      </header>
      <h1 className="text-center text-5xl py-16 text-slate-700">Hi there</h1>
      <Image
        src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1683733036/Random%20Idiocy/IMG_1371_wbquvs.jpg"
        alt="the man himself holding a tasty beverage"
        height={300}
        width={750}
        className="mx-auto rounded-xl"
      />
      <div className="font-sans max-w-6xl bg-slate-300 mx-auto py-1 md:py-8 mt-4 rounded-xl shadow-xl">
        <p
          className="first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left px-2 text-slate-800"
        >
          Hello and welcome to Random Idiocy. Myself and my good friend Greg
          built the Random Idiocy empire from the ground up in the summer of
          1996. Using my parents camcorder we scripted, casted, and shot
          numerous videos. Over the years Random Idiocy grew, morphed, and
          occasionally got left on the wayside (but it was never forgotten). So,
          please take a moment to poke around. I posted some of the old videos
          too for your viewing pleasure. As well as the vintage footage I also
          share my thoughts, movie reviews, musings, music, recipes, poetry -
          you know whatever my mind concocts as I go about my day.{" "}
        </p>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
