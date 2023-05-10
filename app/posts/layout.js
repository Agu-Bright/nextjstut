import React from "react";

function layout({ children }) {
  return (
    <div>
      <p>scroll to top</p>
      {children}
    </div>
  );
}

export default layout;
