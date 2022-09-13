import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <>
        {/* Footer */}
        <footer className=" text-center ">
          {/* Grid container */}
          <div className="container p-4">
            {/* Section: Social media */}
            <section className="mb-4">
              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/in/laraib-rayeen-5322381a9/"
                className="btn  text-center btn-floating m-1 "
              >
                <i className="fab fa-linkedin-in"></i>{" "}
              </a>
              <a
                href="https://github.com/LaraibRayeen"
                className="btn  text-center btn-floating m-1 "
              >
                <i className="fab fa-github" />
              </a>
            </section>
            {/* Section: Social media */}
            {/* Section: Text */}
            <section className="mb-4">
              <p>Created by @laraibRayeen with ❤</p>
            </section>
        
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright:
            <a
              className="text-dark"
              href="https://www.linkedin.com/in/laraib-rayeen-5322381a9/"
            >
              @Laraib
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </>
    </div>
  );
};
export default Footer;
