import React, { useState } from "react";
import "./Anime.css";
import { BiSearchAlt } from "react-icons/bi";

const Anime = ({
  imageUrl,
  handleSubmit,
  handleInputChange,
  searchQuery,
  synopsis,
  title,
}) => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <main>
      {currentPage === "home" && <img src={imageUrl} alt="anime image" />}
      <h1 className="page-title">{title}</h1>
      <div className="navbar" id="myTopnav">
        <div className="icons">
          <ul>
            <a href="#" onClick={() => setCurrentPage("home")} rel="noreferrer">
              Home
            </a>
            <a
              href="#"
              onClick={() => setCurrentPage("about")}
              rel="noreferrer"
            >
              Summary
            </a>

            <form onSubmit={handleSubmit}>
              <input
                className="search"
                type="text"
                value={searchQuery}
                placeholder="Search..."
                onChange={handleInputChange}
              />
              <button className="search-button" type="submit">
                <BiSearchAlt />
              </button>
            </form>
          </ul>
        </div>
      </div>
      {currentPage === "about" && (
        <div className="game-details">
          <h1 className="details-title">{title}</h1>
          <div className="about">
            <h2 className="details-h">THE SYNOPSIS</h2>
            <p>{synopsis}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Anime;
