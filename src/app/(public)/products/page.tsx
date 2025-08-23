import { productsCopy } from "@/lib/copy/pages/products";

export default function Products() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {productsCopy.header.title}
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {productsCopy.header.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsCopy.products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border">
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {product.description}
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                {product.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}