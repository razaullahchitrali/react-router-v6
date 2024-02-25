import React from "react";

const Root = () => {
  return (
    <>
      <div id="sidebar">
        <h1>raza.dev</h1>
        {/* form */}
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        {/* Form end */}
        <nav>
          <ul>
            <li>
              <a href={`/contact/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contact/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* body part */}
      <div id="detail"></div>
    </>
  );
};

export default Root;
