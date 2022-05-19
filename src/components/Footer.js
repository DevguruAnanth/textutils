import React from "react";
import PropTypes from "prop-types";

export default function Footer(props) {
  return (
    <>
      <footer className="dark:text-gray-400 dark:bg-gray-900 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-white">
            <span className="ml-3 text-xl">{props.title}</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200  dark:sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2022 {props.title}{" "}
          </p>
        </div>
      </footer>
    </>
  );
}

Footer.propTypes = { title: PropTypes.string.isRequired };
