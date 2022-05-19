import React from "react";

export default function Alert(props) {
  const closeAlert = () => {
    props.setAlert(null);
  };
  return (
    <>
      <div>
        {props.alert && (
          <>
            <div
              id="alert-4"
              className={`flex p-4 bg-${props.alert.color}-100 dark:bg-${props.alert.color}-200`}
              role="alert"
            >
              <div
                className={`ml-3 text-sm font-medium bg-${props.alert.color}-700 dark:bg-${props.alert.color}-800`}
              >
                {props.alert.msg}
              </div>
              <button
                onClick={closeAlert}
                type="button"
                className={`ml-auto -mx-1.5 -my-1.5 bg-${props.alert.color}-100 bg-${props.alert.color}-500 rounded-lg focus:ring-2 focus:ring-${props.alert.color}-400 p-1.5 hover:bg-${props.alert.color}-200 inline-flex h-8 w-8 dark:bg-${props.alert.color}-200 dark:bg-${props.alert.color}-600 dark:hover:bg-${props.alert.color}-300`}
                data-dismiss-target="#alert-4"
                aria-label="Close"
              >
                <span className={`sr-only`}>Close</span>
                <svg
                  className={`w-5 h-5`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
