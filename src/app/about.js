import Image from "next/image";

export default function About() {
  return (
    <div>
      <h1>About Landon Rabago</h1>
      <Image
        src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1683733036/Random%20Idiocy/IMG_1371_wbquvs.jpg"
        alt="the man himself holding a tasty beverage"
        height={500}
        width={750}
      />
      <p>Placeholder text</p>
    </div>
  );
}
