import { Link, Outlet } from "react-router-dom";
import danaSchoolOfMusic from "@/assets/dana-school-of-music.jpeg";
import blissHall from "@/assets/bliss-hall.jpeg";
import { Analytics } from "@vercel/analytics/react";

const PageLayout = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Analytics />
      <NavBar />
      <main className="flex-1 px-8 pb-4 lg:px-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="navbar w-full bg-primary">
      <div className="flex-1"></div>

      <nav className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-white"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <Links />
          </ul>
        </div>
      </nav>
      <nav className="navbar-end hidden flex-none lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <Links />
        </ul>
      </nav>
    </div>
  );
};

const Links = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/war-on-music", label: "War on Music" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/what-can-i-do", label: "What Can I Do?" },
  ];

  return (
    <>
      {links.map((link) => (
        <li key={link.to}>
          <Link to={link.to} className="font-bold">
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
};

const Footer = () => (
  <div className="flex w-full flex-col lg:flex-row">
    <div
      style={{ backgroundImage: `url(${danaSchoolOfMusic})` }}
      className="h-20 w-full bg-cover bg-center lg:h-20 lg:w-1/2"
    ></div>
    <div
      style={{ backgroundImage: `url(${blissHall})` }}
      className="h-20 w-full bg-cover bg-center lg:h-20 lg:w-1/2"
    ></div>
  </div>
);

export default PageLayout;
