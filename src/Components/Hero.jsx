export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-lg mb-8">Explore my projects and skills</p>
            <button className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300">
                View Projects
            </button>
        </div>
    );
}