import React from "react";
import Link from "next/link";
import { NavbarProps } from "@/types";
import styles from "./Navbar.module.css";

const Navbar = ({ title }: NavbarProps) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <span className={`${styles.navbarTitle} mx-4`}>
          <Link href="/">
            {title}
          </Link>
        </span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item nav-link">
              <Link aria-current="page" href="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link href="/#1">Onglet 1</Link>
            </li>
            <li className="nav-item nav-link">
              <Link href="/#2">Onglet 2</Link>
            </li>
            <li className="nav-item nav-link">
              <Link href="/#3">Onglet 3</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
