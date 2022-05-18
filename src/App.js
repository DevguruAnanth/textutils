import "./App.css";

function App() {
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer"
            href="/"
          >
            <span className="ml-3 text-xl">TextUtils</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white cursor-pointer" href="/">
              Home
            </a>
            <a className="mr-5 hover:text-white cursor-pointer" href="/">
              About
            </a>
          </nav>
        </div>
        <hr />
      </header>
      <section class="text-gray-400 bg-gray-900 body-font relative">
        <div class="container px-5 py-[8rem] mx-auto">
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div class="p-2 space-x-1 w-full">
              <button class=" mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                Button
              </button>
              <button class=" mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                Button
              </button>
              <button class=" mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
