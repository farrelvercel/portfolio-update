export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Kontak Saya</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nama"
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            required
          />
          <textarea
            placeholder="Pesan"
            rows={4}
            className="border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}
