import Link from "next/link";

const Footer = () => {
  return (
    <div className="md:flex items-center justify-between text-sm px-1 font-sans">
      {/* Copyright */}
      <div className="hidden md:block">
        © {new Date().getFullYear()}, Built with{" "}
        <Link
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-amber-500"
        >
          Next.js
        </Link>{" "}
        &&nbsp;
        <Link
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-amber-500"
        >
          TailwindCSS
        </Link>
        .
      </div>

      {/* mountainTopCoding Plug */}
      <div className="hidden md:block">
        Another&nbsp;
        <Link
          href="https://mountaintopcoding.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-amber-500"
        >
          mountainTopCoding(&#127956;);
        </Link>{" "}
        project
      </div>
    </div>
  );
};

export default Footer;
