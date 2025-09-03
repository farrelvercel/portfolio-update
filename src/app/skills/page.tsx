import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 size={40} color="#E34F26" />, name: "HTML" },
    { icon: <FaCss3Alt size={40} color="#1572B6" />, name: "CSS" },
    { icon: <FaJs size={40} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FaReact size={40} color="#61DAFB" />, name: "React" },
    { icon: <SiNextdotjs size={40} />, name: "Next.js" },
    { icon: <SiTailwindcss size={40} color="#06B6D4" />, name: "Tailwind CSS" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {skill.icon}
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
