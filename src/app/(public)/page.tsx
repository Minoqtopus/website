import { homeCopy } from "@/lib/copy/pages/home";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-blue-600">{homeCopy.hero.title}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
            {homeCopy.hero.tagline}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            {homeCopy.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={homeCopy.hero.cta.primary.href}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {homeCopy.hero.cta.primary.text}
            </a>
            <a
              href={homeCopy.hero.cta.secondary.href}
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              {homeCopy.hero.cta.secondary.text}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
