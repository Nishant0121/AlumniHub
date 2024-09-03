import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh] max-w-[1000px] m-auto">
      <header className="px-4 lg:px-6 h-14 flex justify-between items-center">
        <div className="flex items-center justify-center">
          <MountainIcon className="h-6 w-6" />
          <h1 className="text-xl font-bold ml-1"> Alumni Hub</h1>
        </div>
        <button
          className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-600 px-2 md:px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          onClick={() => document.getElementById("login_modal").showModal()}
        >
          Get Started
        </button>
      </header>
      <main className="flex-1">
        <ImageCarousel />

        <AlumniProfiles />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connect with Alumni, Explore Careers
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Alumni Hub is the ultimate platform for students and alumni
                    to interact, network, and explore career opportunities.
                  </p>
                </div>
                <button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  onClick={() =>
                    document.getElementById("login_modal").showModal()
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
                    document.getElementById("login_modal").showModal()
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
                    document.getElementById("login_modal").showModal()
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
                    document.getElementById("login_modal").showModal()
                  }
                >
                  Explore Placement Assistance
                </button>
              </div>
            </div>
          </div>
        </section>

        <dialog id="login_modal" className="modal">
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

function ImageCarousel() {
  const images = [
    "https://img.freepik.com/free-photo/colleagues-studying-together-exam_23-2149038427.jpg",
    "https://img.freepik.com/premium-photo/smiling-group-international-students-studying-white-brick-wall_922936-46401.jpg",
    "https://img.freepik.com/free-photo/youngsters-spending-time-library_23-2147663817.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/young-group-happy-students-studying-library-university-university-universityyoung-group_912214-6814.jpg",
    "https://img.freepik.com/premium-photo/group-happy-young-students-university_85574-4531.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  const prevImage = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  return (
    <section className=" max-w-[1000px] m-auto max-h[90vh] py-2 md:py-2 lg:py-2 bg-muted">
      <div className="container px-2 md:px-2 m-auto relative">
        <div className="relative flex justify-center items-center">
          <button onClick={prevImage}>
            <ArrowLeftIcon />
          </button>
          <img
            src={images[currentIndex]}
            alt="Carousel"
            className="mx-auto h-[80vh]  overflow-hidden rounded-xl object-cover object-center sm:w-full"
            width="600"
            height="400"
          />
          <button onClick={nextImage}>
            <ArrowRightIcon />
          </button>
        </div>
        {/* Centered button at the bottom */}
        <div className="absolute bottom-4 left-1/2  transform -translate-x-1/2 hidden md:flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-white ">
            Explore the Alumni Hub
          </h1>
          <button
            className="h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            onClick={() => document.getElementById("login_modal").showModal()}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

function AlumniProfiles() {
  const profiles = [
    {
      name: "John Doe",
      title: "Software Engineer at Google",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Jane Smith",
      title: "Product Manager at Meta",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Emily Johnson",
      title: "Data Scientist at Amazon",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12 text-center">
          Meet Our Alumni
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {profiles.map((profile, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={profile.image}
                alt={profile.name}
                className="mb-4 w-32 h-32 rounded-full object-cover"
              />
              <h3 className="text-lg font-bold">{profile.name}</h3>
              <p className="text-sm text-muted-foreground">{profile.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
