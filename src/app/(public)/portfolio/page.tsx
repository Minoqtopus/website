import { portfolioCopy } from "@/lib/copy/pages/portfolio";

export default function Portfolio() {
  const techColorMap: Record<string, string> = {
    "React": "bg-green-100 text-green-800",
    "Node.js": "bg-green-100 text-green-800",
    "Stripe": "bg-green-100 text-green-800",
    "Next.js": "bg-green-100 text-green-800",
    "PostgreSQL": "bg-green-100 text-green-800",
    "Chart.js": "bg-green-100 text-green-800",
    "React Native": "bg-purple-100 text-purple-800",
    "Firebase": "bg-purple-100 text-purple-800",
    "Redux": "bg-purple-100 text-purple-800",
    "Vue.js": "bg-red-100 text-red-800",
    "Express": "bg-red-100 text-red-800",
    "MongoDB": "bg-red-100 text-red-800"
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {portfolioCopy.header.title}
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {portfolioCopy.header.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {portfolioCopy.projects.map((project, index) => (
            <div key={index} className="bg-gradient-primary-light rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className={`${techColorMap[tech] || "bg-gray-100 text-gray-800"} px-2 py-1 rounded text-sm`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href={portfolioCopy.cta.href}
            className="bg-gradient-brand-primary text-white px-8 py-3 rounded-lg hover:bg-gradient-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {portfolioCopy.cta.text}
          </a>
        </div>
      </main>
    </div>
  );
}