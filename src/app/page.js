import Image from "next/image";
import Link from "next/link";

import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="flex justify-between px-2 max-w-7xl mx-auto bg-slate-600 rounded-xl font-serif">
        <Link
          href="https://publish.obsidian.md/random-idiocy"
          target="__blank"
          className="text-2xl"
        >
          Read the Blog
        </Link>
        <Link href="/about" target="__blank" className="text-2xl">
          About
        </Link>
      </header>
      <main className="flex flex-col items-center justify-between p-24">
        <h1 className="text-7xl pb-12">Random Idiocy</h1>
        <Image
          src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1683733037/Random%20Idiocy/60935386925__F882B5AA-D665-4191-ADA6-810F2DD09C29_hji6sg.jpg"
          height={500}
          width={750}
          alt="landon rabago - a great photo of..."
        />
        <h3 className="font-sans">A blog by Landon Rabago</h3>
      </main>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
