import Image from "next/image";

export default function About() {
  return (
    <div className="h-screen">
      <h1 className="text-center text-5xl pb-12">About Landon Rabago</h1>
      <Image
        src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1683733036/Random%20Idiocy/IMG_1371_wbquvs.jpg"
        alt="the man himself holding a tasty beverage"
        height={300}
        width={750}
        className="mx-auto rounded-xl"
      />
      <div className="font-sans max-w-6xl bg-slate-300 mx-auto h-1/3 mt-4">
        <p className="px-2">Placeholder text</p>
      </div>
    </div>
  );
}
