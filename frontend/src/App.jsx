import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import axios from "axios";
import Home from "./pages/home";
import Login from "./pages/user/login";
import Register from "./pages/user/register";
import { useContext } from "react";
import { AppContext } from "./context";
import Landing from "./pages/landing";
import LoginAlumni from "./pages/alumni/login";
import RegisterAlumni from "./pages/alumni/register";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  const { authUser } = useContext(AppContext);

  return (
    <div className=" bg-white text-black">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={authUser ? <Layout /> : <Navigate to={"/login"} />}
        >
          <Route index element={<Home />} />
        </Route>
        <Route
          path="/about"
          element={authUser ? <Layout /> : <Navigate to={"/login"} />}
        >
          <Route index element={<h1>About</h1>} />
        </Route>
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/home"} /> : <Login />}
        />
        <Route
          path="/register"
          element={authUser ? <Navigate to={"/home"} /> : <Register />}
        />
        <Route
          path="/loginalumni"
          element={authUser ? <Navigate to={"/home"} /> : <LoginAlumni />}
        />
        <Route
          path="/registeralumni"
          element={authUser ? <Navigate to={"/home"} /> : <RegisterAlumni />}
        />
      </Routes>
    </div>
  );
}

export default App;
