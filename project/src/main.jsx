import React from "react";
import ReactDOM from "react-dom/client"; // For React 18 and above
import App from "./App"; // Import the App component

const Main = () => {
  return (
    <div>
      <App /> {/* Render the main App component */}
    </div>
  );
};

// Create a root and render the app using React 18's new root API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
