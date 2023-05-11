import Image from "next/image";
import Link from "next/link";

import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen pt-2 heropattern-random-inherit/10 bg-slate-100">
      <header className="flex justify-center px-2 font-serif">
        <Link
          href="https://publish.obsidian.md/random-idiocy"
          target="__blank"
          className="text-2xl hover:text-yellow-400 text-white font-semibold bg-slate-600 px-2 rounded-md mb-12"
        >
          Read the Blog
        </Link>
      </header>
      <main className="flex flex-col">
        <h1 className="text-2xl md:text-7xl py-12 text-slate-800 text-center">
          Random Idiocy
        </h1>
        {/* iPad and Up image */}
        <Image
          src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1683733037/Random%20Idiocy/60935386925__F882B5AA-D665-4191-ADA6-810F2DD09C29_hji6sg.jpg"
          height={500}
          width={750}
          alt="landon rabago - a great photo of..."
          className="mx-auto rounded-xl hidden md:block"
        />
        {/* Mobile Image */}
        <Image
          src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1683733037/Random%20Idiocy/60935386925__F882B5AA-D665-4191-ADA6-810F2DD09C29_hji6sg.jpg"
          height={300}
          width={750}
          alt="landon rabago - a great photo of..."
          className="rounded-xl block md:hidden mb-12"
        />
        <h3 className="font-sans text-lg text-slate-800 text-center">
          By{' '}
          <Link href="/about" className="text-indigo-400 underline">
            Landon Rabago
          </Link>
        </h3>
      </main>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
