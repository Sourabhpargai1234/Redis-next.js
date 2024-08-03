export default function Custom404() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-200">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-red-600 animate-bounce">404</h1>
          <p className="text-2xl font-medium text-gray-700">Oops! Page not found</p>
          <div className="mt-4 text-5xl text-red-600 animate-pulse">😔</div>
          <a
            href="/"
            className="mt-6 inline-block px-6 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    )
  }
  