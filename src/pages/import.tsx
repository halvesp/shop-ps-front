import { useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

export default function ImportProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  const handleImport = async () => {
    try {
      const response = await axios.post<{ products: Product[] }>(
        "http://localhost:8000/api/import-products"
      );
      setProducts(response.data.products);
    } catch (err) {
      setError("Failed to import products");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl mb-6 text-center">Import Products</h1>
        <button
          onClick={handleImport}
          className="w-full py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Import Products
        </button>
        {error && <p className="text-red-500">{error}</p>}
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <h2 className="text-xl">{product.title}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
