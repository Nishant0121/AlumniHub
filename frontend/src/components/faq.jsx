/* eslint-disable react/no-unescaped-entities */
export default function FAQ() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Frequently Asked Questions (FAQs)</h1>
      <div className="space-y-4">
        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-indigo-50 p-4 text-gray-900">
            <h2 className="font-medium">
              What is the Alumni-Student Interaction Platform?
            </h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            The Alumni-Student Interaction Platform is an initiative by the Technical Education Department, Govt. of Rajasthan, designed to connect current students with alumni. This platform provides a space for mentorship, career guidance, networking, and collaboration, enabling students to gain valuable insights from experienced alumni.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-indigo-50 p-4 text-gray-900">
            <h2 className="font-medium">
              How can I register as a student or an alumnus?
            </h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            To register, click on the "Sign Up" button on the homepage. Select whether you are a current student or an alumnus and fill out the required information, including your educational background, contact details, and interests. Once submitted, your profile will be verified by our team, and you will receive a confirmation email.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-indigo-50 p-4 text-gray-900">
            <h2 className="font-medium">
              What features are available on the platform?
            </h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            The platform offers several features, including: 
            <ul className="list-disc pl-5 mt-2">
              <li>Discussion forums for academic and career-related topics</li>
              <li>Mentorship programs connecting students with alumni</li>
              <li>Career guidance sessions and webinars</li>
              <li>Placement assistance and job boards</li>
              <li>Opportunities for alumni to contribute to academic support</li>
            </ul>
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-indigo-50 p-4 text-gray-900">
            <h2 className="font-medium">
              How can I find a mentor on the platform?
            </h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            You can find a mentor by visiting the "Mentorship" section of the platform. Here, you can browse through alumni profiles, filter by specialization, industry, and interests, and send a mentorship request to the alumni who match your career goals and preferences.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-indigo-50 p-4 text-gray-900">
            <h2 className="font-medium">
              How does the platform ensure data security and authenticity?
            </h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Our platform uses advanced security measures, including blockchain-based verification, to ensure the authenticity of user profiles and prevent fraudulent activities. Additionally, we use AI-driven content filtering to detect and block inappropriate or harmful content, ensuring a safe and supportive environment for all users.
          </p>
        </details>
      </div>
    </div>
  );
}
