export default function Profile() {
  return (
    <div className="max-w-screen-lg mx-auto mt-10 p6 bg-red-100 rounded-md shadow-md flex items-center">
      <div className="flex-shrink-0">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full w-20 h-20 object-cover"
        />
      </div>
      <div className="ml-4">
        <div className="bg-gray-300 h-5 w-32 rounded mb-2"></div>
        <div className="bg-gray-300 h-4 w-24 rounded mb-2"></div>
        <div className="bg-gray-300 h-4 w-20 rounded"></div>
      </div>
    </div>
  );
}
