import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";
import { Link } from "react-router-dom";

export default function Connections() {
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authUser } = useContext(AppContext);

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/users/get/user/connection/${authUser._id}`
        );
        setConnections(response.data);
      } catch (error) {
        setError("Error fetching connections");
        console.error("Error fetching connections:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConnections();
  }, [authUser._id]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Connections</h1>

      {loading && <p className="text-gray-500">Loading...</p>}

      {connections.length === 0 && !loading && !error && (
        <p className="text-gray-500">No connections found.</p>
      )}

      <ul className="space-y-4">
        {connections.map((connection) => (
          <li key={connection._id}>
            <Link
              to={`/user/${connection._id}`}
              className="block bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:bg-gray-100 transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {connection.name}
              </h2>
              <p className="text-gray-600">{connection.email}</p>
              <p className="text-gray-600">
                Institution: {connection.institution}
              </p>
              {/* Add other details as needed */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
