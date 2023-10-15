import React from "react";

export default function Blogs() {
  return (
    <div className="h-screen bg-white">
      <section className="md:h-full flex items-center text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl text-green-300 font-semibold">
              Blogs
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="sm:w-1/2 lg:w-1/3 rounded-t-lg shadow-lg bg-#747474">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center"
                  src="https://img.freepik.com/free-photo/high-angle-gaming-setup-with-computer_23-2149829138.jpg"
                  alt="Blog"
                />
                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                  <img
                    className="w-4 h-4 rounded-full"
                    src="https://via.placeholder.com/16x16"
                  />
                  <h2 className="text-base font-medium text-indigo-300 mb-1">
                    Sejal Agarwal | Nov 9, 2021
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">
                    Lorem ipsum dolor sir amet
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-1/2 lg:w-1/3 rounded-t-lg shadow-lg bg-#747474">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center"
                  src="https://img.freepik.com/free-photo/high-angle-gaming-setup-with-computer_23-2149829138.jpg"
                  alt="Blog"
                />
                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                  <img
                    className="w-4 h-4 rounded-full"
                    src="https://via.placeholder.com/16x16"
                  />
                  <h2 className="text-base font-medium text-indigo-300 mb-1">
                    Sejal Agarwal | Nov 9, 2021
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">
                    Lorem ipsum dolor sir amet
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-1/2 lg:w-1/3 rounded-t-lg shadow-lg bg-#747474">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center"
                  src="https://img.freepik.com/free-photo/high-angle-gaming-setup-with-computer_23-2149829138.jpg"
                  alt="Blog"
                />
                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                  <img
                    className="w-4 h-4 rounded-full"
                    src="https://via.placeholder.com/16x16"
                  />
                  <h2 className="text-base font-medium text-indigo-300 mb-1">
                    Sejal Agarwal | Nov 9, 2021
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">
                    Lorem ipsum dolor sir amet{" "}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
