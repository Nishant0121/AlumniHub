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
import Profile from "./pages/profile";
import AllUsers from "./pages/allusers";
import IndividualProfile from "./pages/individualprofile";
import Connections from "./pages/connections";
import Meet from "./components/meet";
import Messages from "./pages/messages";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  const { authUser } = useContext(AppContext);

  return (
    <div className=" bg-white text-black">
      <Routes>
        <Route path="/" element={authUser ? <Layout /> : <Landing />}>
          <Route index element={<Home />} />
        </Route>
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
          path="/meet"
          element={authUser ? <Layout /> : <Navigate to={"/login"} />}
        >
          <Route index element={<Meet />} />
        </Route>
        <Route
          path="/profile"
          element={authUser ? <Layout /> : <Navigate to={"/login"} />}
        >
          <Route index element={<Profile />} />
        </Route>
        <Route
          path="/allusers"
          element={authUser ? <Layout /> : <Navigate to={"/login"} />}
        >
          <Route index element={<AllUsers />} />
        </Route>
        <Route
          path="/user/:userID"
          element={authUser ? <Layout /> : <Navigate to={"/login"} />}
        >
          <Route index element={<IndividualProfile />} />
        </Route>
        <Route
          path="/message/:receiverID"
          element={authUser ? <Layout /> : <Navigate to={"/login"} />}
        >
          <Route index element={<Messages />} />
        </Route>
        <Route
          path="/myconnections"
          element={authUser ? <Layout /> : <Navigate to={"/login"} />}
        >
          <Route index element={<Connections />} />
        </Route>
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/profile"} /> : <Login />}
        />
        <Route
          path="/register"
          element={authUser ? <Navigate to={"/profile"} /> : <Register />}
        />
        <Route
          path="/loginalumni"
          element={authUser ? <Navigate to={"/profile"} /> : <LoginAlumni />}
        />
        <Route
          path="/registeralumni"
          element={authUser ? <Navigate to={"/profile"} /> : <RegisterAlumni />}
        />
      </Routes>
    </div>
  );
}

export default App;
