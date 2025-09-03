import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center py-10">
      <Image
        src="/farrel profile.jpeg"
        alt="Foto Farrel"
        width={150}
        height={150}
        className="rounded-full border-4 border-green-700 shadow-lg"
      />
      <h1 className="mt-4 text-3xl font-bold">Farrel P.R.</h1>
      <p className="text-lg text-gray-600">
        Web Developer | UI/UX Enthusiast
      </p>

      <div className="mt-6 flex gap-4">
        <Link href="/about" className="bg-green-600 text-white px-4 py-2 rounded">
          Tentang Saya
        </Link>
        <Link href="/projects" className="bg-green-600 text-white px-4 py-2 rounded">
          Lihat Projects
        </Link>
      </div>
    </div>
  );
}
