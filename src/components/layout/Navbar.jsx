import styles from "@/styles/components/Navbar.module.scss";
import { routes } from "@/utils/routes";
import { t } from "i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import Button from "../Button";
import Container from "../Container";
import Logo from "../Logo";

const NavBarLink = ({ children, to, onClick }) => {
  const router = useRouter();
  const getActiveLink = (link) => {
    return `/${router.pathname.split("/")[1]}` == link;
  };
  return (
    <li
      className="nav-item text-center"
      onClick={() => {
        onClick();
      }}
    >
      <Link
        className={`${styles["nav-link"]} fs-5 rounded mx-2 my-2 my-lg-0 ${
          getActiveLink(to) ? styles["nav-link-active"] : ""
        }`}
        aria-current="page"
        href={to}
      >
        {children}
      </Link>
    </li>
  );
};

function Navbar() {
  const [show, setShow] = useState(false);
  const buttonRef = useRef(null);
  const navBarRef = useRef(null);

  return (
    <nav className="navbar navbar-expand-lg bg-whtie py-2">
      <Container className="col-lg-10 align-items-center">
        <Link className="navbar-brand fw-semibold col-lg-1 col-2 mx-3" href="/">
          <div className="col-lg-8 col-12">
            <Logo />
          </div>
        </Link>
        <button
          className="btn fs-1 border-0 d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={buttonRef}
          onClick={() => {
            setShow(!show);
          }}
        >
          <i className={`${show ? "bi bi-x" : "bi bi-list"}`}></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-lg-between"
          id="navbarNavDropdown"
          ref={navBarRef}
        >
          <ul className="navbar-nav mx-0 px-0">
            {routes.map((route, index) => (
              <NavBarLink
                to={route.route}
                key={index}
                onClick={() => {
                  if (document.body.offsetWidth < 600)
                    buttonRef.current.click();
                }}
              >
                {t(`common:${route.name}`)}
              </NavBarLink>
            ))}
          </ul>
          <div className="d-flex justify-content-center mt-4 mt-lg-0">
            {/* <button className="Button_btn-secondary__VRip_ py-2 px-5 rounded shadow-lg fw-bold">
            </button> */}
            <Button color="secondary">كن شريك معنا</Button>
            {/* <Setting/> */}
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
