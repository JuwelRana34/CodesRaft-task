import { Link, useLocation } from "react-router";

export default function NotFound() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <img
        src="https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7889.jpg?ga=GA1.1.1974322130.1689523785&semt=ais_hybrid&w=740"
        className="mx-auto w-80"
        alt=""
        srcset=""
      />
      <p className="text-2xl text-center text-red-500">404 Not Found!</p>
      <p className="text-lg text-center text-gray-700">
        The page-[ {location.pathname} ] you are looking for does not exist.
      </p>
      <div className="flex justify-center mt-4">
        <Link
          to="/"
          className=" text-center bg-accent text-white p-4 rounded-md shadow-md"
        >
          Go to Home
        </Link>
      </div>
    </>
  );
}
