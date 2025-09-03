import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-center gap-6">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}

