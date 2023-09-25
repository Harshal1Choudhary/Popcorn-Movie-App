import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App v-2";
// import App from "./App";
// import StarRating from "./starRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="green"
//         size={24}
//         maxRating={10}
//         onSetRating={setMovieRating}
//       />
//       <p>This movie is rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} /> */}
    {/* <StarRating
      maxRating={5}
      size={48}
      color={"green"}
      message={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
      defaultRating={3}
      onSetRating
    /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
