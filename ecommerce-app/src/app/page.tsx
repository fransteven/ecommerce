import { db } from "@/src/db";
import { products } from "@/src/db/schema";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allProducts = await db.select().from(products);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 ">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 w-full bg-gray-200">
                {product.image && (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">
                    ${(product.price / 100).toFixed(2)}
                  </span>
                  <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
