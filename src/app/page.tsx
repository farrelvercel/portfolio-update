import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="text-center bg-green-700 text-white py-10">
        <div className="flex flex-col items-center">
          <Image
            src="/farrel profile.jpeg"
            alt="Foto Farrel"
            width={150}
            height={150}
            className="rounded-full border-4 border-white shadow-lg object-cover"
          />
          <h1 className="mt-4 text-3xl font-bold">Farrel P.R.</h1>
          <p className="text-lg">Portofolio</p>
        </div>
      </header>

      {/* Tentang Saya */}
      <section className="bg-white max-w-3xl mx-auto p-6 my-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Tentang Saya</h2>
        <p>
          Halo! Saya Farrel P.R., seorang pelajar yang aktif dan berprestasi
          dalam kegiatan paskibra dan organisasi lainnya.
        </p>
      </section>

      {/* Skill */}
      <section className="bg-white max-w-3xl mx-auto p-6 my-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Skill</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <Image src="/html.png" alt="HTML" width={50} height={50} />
            <p className="mt-2">HTML</p>
          </div>
          <div>
            <Image src="/css.png" alt="CSS" width={50} height={50} />
            <p className="mt-2">CSS</p>
          </div>
          <div>
            <Image src="/js.png" alt="JavaScript" width={50} height={50} />
            <p className="mt-2">JavaScript</p>
          </div>
          <div>
            <Image src="/next.png" alt="Next.js" width={50} height={50} />
            <p className="mt-2">Next.js</p>
          </div>
        </div>
      </section>

      {/* Project */}
      <section className="bg-white max-w-3xl mx-auto p-6 my-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Proyek Unggulan</h2>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-md">
          <Image
            src="/farrel bina.jpeg"
            alt="Dokumentasi Juara Paski Bina 2"
            width={800}
            height={400}
            className="rounded-md mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold">
            Juara Paski Bina 2 Surawiraaji
          </h3>
          <p className="mt-2">
            Prestasi dalam ajang paskibra tingkat daerah yang diselenggarakan di
            Pasuruan, Malang. Menampilkan kedisiplinan, kekompakan, dan semangat
            tim.
          </p>
        </div>
      </section>

      {/* Link ke Halaman Kontak */}
      <div className="text-center mb-6">
        <Link
          href="/contact"
          className="bg-green-600 hover:bg-green-800 text-white px-6 py-3 rounded-md shadow-md"
        >
          Hubungi Saya
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white text-center py-4 mt-auto">
        <p>© 2025 Farrel P.R. | All rights reserved</p>
      </footer>
    </div>
  );
}
