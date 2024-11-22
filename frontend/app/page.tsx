export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">careTree</div>
          <div className="flex space-x-4">
            <button className="text-gray-700 hover:text-blue-500">Profile</button>
            <button className="text-gray-700 hover:text-blue-500">Feedback</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-10 p-4">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Welcome to careTree
        </h1>
      </main>
    </div>
  );
}
