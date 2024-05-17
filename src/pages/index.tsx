import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl mb-6 text-center text-red-400">
          Welcome to Next.js
        </h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/import">Import Products</Link>
            </li>
            <li>
              <Link href="/csv">CSV Management</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
