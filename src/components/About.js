import React from "react";

export default function About() {
  return (
    <>
      <section className="dark:text-gray-400 dark:bg-gray-900 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl dark:text-white text-2xl font-medium title-font text-center text-gray-900 mb-20">
            About Us
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6">
                <h2 className="dark:text-white text-gray-900 text-lg title-font font-medium mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                  live-edge tilde.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6">
                <h2 className="dark:text-white text-gray-900 text-lg title-font font-medium mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                  ipsum velit consequuntur eaque quam maiores quod nulla natus
                  iure voluptates! Sit ratione accusantium consectetur quo
                  temporibus, impedit explicabo esse ullam possimus pariatur
                  tempora quam?
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6">
                <h2 className="dark:text-white text-gray-900 text-lg title-font font-medium mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                  live-edge tilde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
