import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context.jsx";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllUsers() {
  const { authUser } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter users based on the search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Fetch users based on the authUser role
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let response;
        if (authUser.userType === "user") {
          response = await axios.get(
            "http://localhost:4000/api/users/get/alumni"
          );
        } else if (authUser.userType === "alumni") {
          response = await axios.get(
            "http://localhost:4000/api/users/get/student"
          );
        } else {
          console.error("Invalid user role");
          return;
        }

        // Check if response and response.data exist
        if (response && response.data) {
          setUsers(response.data);
        } else {
          console.error("No data found in response");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [authUser]);

  console.log(users);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">
          {authUser.userType === "user" ? "Alumni" : "Students"}
        </h1>
        <div className="flex items-center gap-2">
          <input
            type="search"
            placeholder="Search users..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full max-w-[300px] px-3 py-1.5 text-white rounded-md"
          />
          <button className=" bg-indigo-500 px-3 py-1.5 rounded-md">
            Search
          </button>
        </div>
      </header>
      <div className="grid gap-4">
        {currentUsers.map((user) => (
          <Link
            to={`/user/${user._id}`}
            key={user._id}
            className="p-4 shadow-sm border rounded-md"
          >
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-muted-foreground">{user.email}</p>
                <p className="text-sm text-muted-foreground">
                  {user.description}
                </p>
              </div>
              <Link
                className="bg-indigo-500 px-3 py-1.5 rounded-md text-white"
                to={`/message/${user._id}`}
              >
                Chat
              </Link>
            </div>
          </Link>
        ))}
      </div>
      {/* Pagination controls (if needed) */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1.5 mx-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
