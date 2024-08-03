import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Next.js App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Button for Products Page */}
        <Link href="/Product/allProducts" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition">
          Go to Products
        </Link>

        {/* Button for a Single Product Page (example with dynamic ID) */}
        <Link href="/Product" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition">
          Go to Product 1
        </Link>

        {/* Button for another page */}
        <Link href="/Users/hitgetAllUsers" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition">
          Get Users
        </Link>

        {/* Add more buttons as needed */}
        {/* <Link href="/your-route" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition">
          Go to Your Route
        </Link> */}
      </div>
    </div>
  );
};

export default HomePage;
