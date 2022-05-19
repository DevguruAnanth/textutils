import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const UpperCase = () => {
    if (text.length !== 0) {
      setText(text.toUpperCase());
      props.showAlert("Changed to Upper Case", "green");
      // document.getElementById("HeaderAlert").innerHTML = alert;
    } else {
      props.showAlert("Please enter something", "red");
    }
  };
  const LowerCase = () => {
    if (text.length !== 0) {
      setText(text.toLowerCase());
      props.showAlert("Changed to Lower Case", "green");
    } else {
      props.showAlert("Please enter something", "red");
    }
  };
  const RemoveExtraSpace = () => {
    if (text.length !== 0) {
      setText(text.replace(/\s+/g, " "));
      props.showAlert("Removed Extra Space", "green");
    } else {
      props.showAlert("Please enter something", "red");
    }
  };
  function CopyText() {
    if (text.length !== 0) {
      var copyText = document.getElementById("textbox");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);
      props.showAlert("Copied Text", "green");
    } else {
      props.showAlert("Please enter something", "red");
    }
  }
  const ClearText = () => {
    setText("");
    document.getElementById("show").innerHTML = "0";
    props.showAlert("Cleared text", "green");
  };

  const HandleOnChange = (event) => {
    setText(event.target.value);
  };
  function countWord() {
    // Get the input text value
    var words = document.getElementById("textbox").value;

    // Initialize the word counter
    var count = 0;
    var split = words.split(" ");
    for (var i = 0; i < split.length; i++) {
      if (split[i] !== "") {
        count += 1;
      }
    }

    // Display it as output
    document.getElementById("show").innerHTML = count;
  }
  return (
    <>
      <section className="dark:text-gray-400 dark:bg-gray-900 body-font relative">
        <div className="container px-1 py-4 pb-[15rem] mx-auto">
          <h1 className="text-2xl px-14 text-black dark:text-white">
            {props.title}{" "}
            <span className="cursor-default  bg-blue-500 text-black dark:text-white rounded text-base">
              Charectars: {text.length} | Words: <span id="show">0</span>
            </span>
          </h1>

          <div className="p-2 w-full">
            <div className="relative">
              <textarea
                id="textbox"
                name="textbox"
                value={text}
                onInput={countWord}
                onChange={HandleOnChange}
                className="w-full bg-gray-100 bg-opacity-50 dark:file:bg-gray-800 dark:bg-opacity-40 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-gray-700 dark:border-gray-700 dark:focus:border-blue-500 dark:focus:bg-gray-900 dark:focus:ring-2 dark:focus:ring-blue-900 h-32 text-base outline-none dark:text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                placeholder="Enter text"
              ></textarea>
            </div>
            <div className="p-2 space-x-1 space-y-1 w-full">
              <button
                onClick={UpperCase}
                className=" mx-auto text-white bg-blue-500 dark:text-white dark:bg-blue-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              >
                Upper Case
              </button>
              <button
                onClick={LowerCase}
                className=" mx-auto text-white bg-blue-500 dark:text-white dark:bg-blue-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              >
                Lower Case
              </button>
              <button
                onClick={RemoveExtraSpace}
                className=" mx-auto text-white bg-blue-500 dark:text-white dark:bg-blue-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              >
                Remove Extra spaces
              </button>
              <button
                onClick={ClearText}
                className=" mx-auto text-white bg-blue-500 dark:text-white dark:bg-blue-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              >
                Clear Text
              </button>
              <button
                onClick={CopyText}
                className=" mx-auto text-white bg-blue-500 dark:text-white dark:bg-blue-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              >
                Copy Text
              </button>
              <p className="text-2xl pt-3 text-black dark:text-white">
                Preview
              </p>
            </div>
          </div>
          <p className="px-14 text-black dark:text-white">
            {text.length > 0 ? (
              text
            ) : (
              <span className="text-gray-400 dark:text-gray-600">
                Enter text
              </span>
            )}
          </p>
        </div>
      </section>
    </>
  );
}

TextForm.propTypes = { title: PropTypes.string.isRequired };
