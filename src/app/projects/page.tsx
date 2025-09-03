import projects from "@/data/Project";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6">
        {projects.map((proj, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{proj.name}</h3>
            <p className="mt-2">{proj.description}</p>
            <div className="mt-3 flex gap-4">
              <Link href={proj.github} target="_blank" className="text-blue-600 underline">
                GitHub
              </Link>
              {proj.demo && (
                <Link href={proj.demo} target="_blank" className="text-green-600 underline">
                  Demo
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
