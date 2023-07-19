import React from "react";

const Error = ({ error }) => {
  return (
    <>
      {error && (
        <div>
          <p>
            <span aria-hidden="true">Error</span>
            Error
            <span aria-hidden="true">Error</span>
          </p>
        </div>
      )}
    </>
  );
};

export default Error;
