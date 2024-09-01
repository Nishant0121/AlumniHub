import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex justify-between items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Student Connect</span>
        </Link>
        <button
          className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Get Started
        </button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connect with Alumni, Explore Careers
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Student Connect is the ultimate platform for students and
                    alumni to interact, network, and explore career
                    opportunities.
                  </p>
                </div>
                <button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  Explore Alumni
                </button>
              </div>
              <img
                src="https://cdn3.iconfinder.com/data/icons/resume-glyph-silhouettes/300/212546667Untitled-3-512.png"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Connect with Alumni
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Engage with Experienced Professionals
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Leverage the power of our platform to connect with alumni
                    through live webinars, Q&A sessions, and one-on-one
                    mentorship opportunities.
                  </p>
                </div>
                <button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  Learn More
                </button>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KGhPkzKeQthNssDQbYNepLQa7QwrLo_-NQ&s"
                width="550"
                height="310"
                alt="Connect with Alumni"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                src="https://media.licdn.com/dms/image/D5612AQHXAbhKJ7pTEg/article-cover_image-shrink_720_1280/0/1708950195923?e=2147483647&v=beta&t=oZiQh1foOj2IhyOoYy1m_7haTlQHDbq2ZUvSXLnH4W0 "
                width="550"
                height="310"
                alt="AI Chatbot"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    AI Chatbot
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Get Personalized Career Guidance
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our AI-powered chatbot is your personal career assistant,
                    providing tailored advice on resume building, interview
                    preparation, and job search strategies.
                  </p>
                </div>
                <button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  Explore ChatBot
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Career Guidance
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Unlock Your Full Potential
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our team of experts provides comprehensive career guidance,
                    including resume reviews, interview preparation, and
                    personalized job search assistance.
                  </p>
                </div>
                <button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  Explore Career Guidance
                </button>
              </div>
              <img
                src="https://pluspng.com/img-png/unlock-png-lock-unlock-icon-png-graphic-cave-1200.png"
                width="550"
                height="310"
                alt="Career Guidance"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                src="https://hijobs.net/blog/wp-content/uploads/2014/04/HiRes.jpg"
                width="550"
                height="310"
                alt="Placement Assistance"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Placement Assistance
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Unlock Your Dream Job
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Leverage our extensive network of employers and alumni to
                    access exclusive job postings, career fairs, and networking
                    opportunities.
                  </p>
                </div>
                <button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  Explore Placement Assistance
                </button>
              </div>
            </div>
          </div>
        </section>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-white">
            <div className=" flex flex-col gap-4">
              <Link
                to={"/login"}
                className=" p-3 rounded-lg bg-indigo-600 text-white"
              >
                Start as Student
              </Link>
              <Link
                to={"/loginalumni"}
                className=" p-3 rounded-lg bg-indigo-600 text-white"
              >
                Start as Alumni
              </Link>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Student Connect. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
