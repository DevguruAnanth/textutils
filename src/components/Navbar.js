import React from "react";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <header className="text-gray-600 dark:text-gray-400 dark:bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a
                    className="flex title-font font-medium items-center dark:text-white mb-4 md:mb-0 cursor-pointer"
                    href="/"
                >
                    <span className="ml-3 text-xl">{props.title}</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a
                        href="/"
                        className="mr-5 hover:text-gray-900 dark:hover:text-white cursor-pointer "
                    >
                        Home
                    </a>
                    <a
                        href="about"
                        className="mr-5 hover:text-gray-900 dark:hover:text-white cursor-pointer "
                    >
                        About
                    </a>
                </nav>
            </div>
        </header>
    )
}
