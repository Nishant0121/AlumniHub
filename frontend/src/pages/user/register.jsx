import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    institution: "",
    fieldOfStudy: "",
    expectedOrActualGraduationYear: "",
    interests: "",
    socialAccounts: "",
    profilePic: "",
    achievements: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
      mobile: inputs.phoneNumber,
      institution: inputs.institution,
      degreePursuing: inputs.fieldOfStudy,
      expectedOrActualGraduationYear: parseInt(
        inputs.expectedOrActualGraduationYear,
        10
      ),
      interests: inputs.interests.split(",").map((interest) => interest.trim()),
      socialAccounts: inputs.socialAccounts,
      profilePic: inputs.profilePic || "",
      achievements: inputs.achievements
        .split(",")
        .map((achievement) => achievement.trim()),
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/register/user",
        userData
      );
      console.log("Success:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="mx-auto w-fit px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-fit">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Get started today
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Please fill out the form below to create a new Student account.
        </p>

        <p className="text-center text-lg font-medium">Register</p>
        <form
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 text-white rounded-lg p-4 md:min-w-[70vw] m-auto shadow-lg sm:p-6 lg:p-8"
        >
          <div className="flex flex-col m-0 items-start justify-center">
            <label htmlFor="name" className="text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col m-0 items-start justify-center">
            <label htmlFor="email" className="text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col m-0 items-start justify-center">
            <label htmlFor="password" className="text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex flex-col m-0 items-start justify-center">
            <label htmlFor="phoneNumber" className="text-black">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={inputs.phoneNumber}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="flex flex-col m-0 items-start justify-center">
            <label htmlFor="institution" className="text-black">
              Institution Name
            </label>
            <input
              type="text"
              id="institution"
              name="institution"
              value={inputs.institution}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter your institution name"
              required
            />
          </div>

          <div className="flex flex-col m-0 items-start justify-center">
            <label htmlFor="fieldOfStudy" className="text-black">
              Field of Study
            </label>
            <select
              id="fieldOfStudy"
              name="fieldOfStudy"
              value={inputs.fieldOfStudy}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              required
            >
              <option value="" disabled>
                Select your field of study
              </option>
              <option value="Computer Science">Computer Science</option>
              <option value="Engineering">Engineering</option>
              <option value="Business">Business</option>
              <option value="Arts">Arts</option>
              <option value="Science">Science</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex flex-col m-0 items-start justify-center">
            <label
              htmlFor="expectedOrActualGraduationYear"
              className="text-black"
            >
              Expected or Actual Graduation Year
            </label>
            <input
              type="number"
              id="expectedOrActualGraduationYear"
              name="expectedOrActualGraduationYear"
              value={inputs.expectedOrActualGraduationYear}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter your graduation year"
              required
            />
          </div>

          <div className="flex flex-col m-0 items-start justify-center">
            <label htmlFor="interests" className="text-black">
              Interests (comma-separated)
            </label>
            <input
              type="text"
              id="interests"
              name="interests"
              value={inputs.interests}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter your interests"
              required
            />
          </div>

          <div className="flex flex-col m-0 items-start justify-center">
            <label htmlFor="socialAccounts" className="text-black">
              Social Accounts
            </label>
            <input
              type="text"
              id="socialAccounts"
              name="socialAccounts"
              required="true"
              value={inputs.socialAccounts}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter your social accounts (LinkedIn)"
            />
          </div>

          <div className="flex flex-col m-0 items-start justify-center">
            <label htmlFor="achievements" className="text-black">
              Achievements (comma-separated)
            </label>
            <input
              type="text"
              id="achievements"
              required="true"
              name="achievements"
              value={inputs.achievements}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter your achievements(A.I Certification, Hackathons, etc.)"
            />
          </div>

          <button
            type="submit"
            className="block w-full text-white rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium "
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link className="underline" to={"/login"}>
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
