import Image from "next/image";
import Link from "next/link";

import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen heropattern-food-inherit/50 hero bg-slate-100 pt-2">
      <header className="flex justify-between px-2 max-w-7xl mx-auto font-serif">
        <Link
          href="https://publish.obsidian.md/random-idiocy"
          target="__blank"
          className="text-2xl hover:text-yellow-400 text-white font-semibold bg-slate-600 px-2 rounded-md"
        >
          Read the Blog
        </Link>
        <Link
          href="/about"
          className="text-2xl hover:text-yellow-400 text-white font-semibold bg-slate-600 px-2 rounded-md"
        >
          About Me
        </Link>
      </header>
      <main className="flex flex-col items-center justify-between p-24">
        <h1 className="text-7xl pb-12 text-slate-800">Random Idiocy</h1>
        <Image
          src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1683733037/Random%20Idiocy/60935386925__F882B5AA-D665-4191-ADA6-810F2DD09C29_hji6sg.jpg"
          height={500}
          width={750}
          alt="landon rabago - a great photo of..."
          className="rounded-xl"
        />
        <h3 className="font-sans text-lg text-slate-800">A blog by Landon Rabago</h3>
      </main>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
