import { useEffect, useRef } from "react";

export function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}
export function Logo() {
  return (
    <div className="logo">
      <h1>UsePopcorn</h1>
      <span role="img">🍿</span>
    </div>
  );
}
export function Search({ query, setQuery }) {
  const inputEle = useRef(null);

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputEle.current) return;

        if (e.code === "Enter") {
          inputEle.current.focus();
          setQuery("");
        }
      }
      document.addEventListener("keydown", callback);
      return () => document.addEventListener("keydown", callback);
    },
    [setQuery]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEle}
    />
  );
}
export function NumResult({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
