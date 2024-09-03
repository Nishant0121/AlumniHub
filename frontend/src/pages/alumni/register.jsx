import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterAlumni() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    institution: "",
    company: "",
    degree: "",
    yearOfGraduation: "",
    expertise: "",
    mobile: "",
    email: "",
    password: "",
    socialAccounts: "",
    careerPath: "",
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

    const alumniData = {
      name: inputs.name,
      institution: inputs.institution,
      company: inputs.company,
      degree: inputs.degree,
      yearOfGraduation: parseInt(inputs.yearOfGraduation, 10),
      expertise: inputs.expertise.split(",").map((exp) => exp.trim()),
      mobile: inputs.mobile,
      email: inputs.email,
      password: inputs.password,
      socialAccounts: inputs.socialAccounts,
      careerPath: inputs.careerPath,
      achievements: inputs.achievements
        .split(",")
        .map((achievement) => achievement.trim()),
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/register/alumni",
        alumniData
      );
      console.log("Success:", response.data);
      navigate("/loginalumni");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="mx-auto w-fit px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-fit">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Get started today
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Please fill out the form below to create a new alumni account.
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
            <label htmlFor="institution" className="text-black">
              Institution
            </label>
            <input
              type="text"
              id="institution"
              name="institution"
              value={inputs.institution}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter your institution"
              required
            />
          </div>

          <div className="flex flex-col m-0 items-start justify-center">
            <label htmlFor="company" className="text-black">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={inputs.company}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter your company"
            />
          </div>

          <div className="flex flex-col m-0 items-start justify-center">
            <label htmlFor="degree" className="text-black">
              Degree
            </label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={inputs.degree}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter your degree"
              required
            />
          </div>

          <div className="flex flex-col m-0 items-start justify-center">
            <label htmlFor="yearOfGraduation" className="text-black">
              Year of Graduation
            </label>
            <input
              type="number"
              id="yearOfGraduation"
              name="yearOfGraduation"
              value={inputs.yearOfGraduation}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter your year of graduation"
              required
            />
          </div>

          <div className="flex flex-col m-0 items-start justify-center">
            <label htmlFor="expertise" className="text-black">
              Expertise (comma-separated)
            </label>
            <input
              type="text"
              id="expertise"
              name="expertise"
              value={inputs.expertise}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter your expertise"
              required
            />
          </div>

          <div className="flex flex-col m-0 items-start justify-center">
            <label htmlFor="mobile" className="text-black">
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={inputs.mobile}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter your mobile number"
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
            <label htmlFor="socialAccounts" className="text-black">
              Social Accounts (comma-separated)
            </label>
            <input
              type="text"
              id="socialAccounts"
              name="socialAccounts"
              value={inputs.socialAccounts}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter your social accounts"
            />
          </div>

          <div className="flex flex-col m-0 items-start justify-center">
            <label htmlFor="careerPath" className="text-black">
              Career Path
            </label>
            <textarea
              id="careerPath"
              name="careerPath"
              value={inputs.careerPath}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Describe your career path"
            />
          </div>

          <div className="flex flex-col m-0 items-start justify-center">
            <label htmlFor="achievements" className="text-black">
              Achievements (comma-separated)
            </label>
            <input
              type="text"
              id="achievements"
              name="achievements"
              value={inputs.achievements}
              onChange={handleChange}
              className="w-full text-white rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Enter your achievements"
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
            <Link className="underline" to={"/loginalumni"}>
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
