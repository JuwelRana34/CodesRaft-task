import { Link } from "react-router";

export default function NotFound() {
    return (
        <>
            <p className="text-2xl text-center text-red-500">404 Not Found</p>
            <p className="text-lg text-center text-gray-700">The page you are looking for does not exist.</p>
            <div className="flex justify-center mt-4">
                <Link to="/" className="text-blue-500  text-center bg-blue-400 text-white p-4 rounded-md shadow-md">Go to Home</Link>
            </div>
           
        </>
    );
}