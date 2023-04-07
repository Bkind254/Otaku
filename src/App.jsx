import React, { useState, useEffect } from "react";
import Anime from "./components/Anime";
import fetchFromAPI from "./api";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchAnime = async () => {
      const response = await fetchFromAPI.get("/anime", {
        params: {
          page: "1",
          size: "1",
          search: "Naruto",
        },
      });

      const anime = response.data.data[0];
      const imageUrl = anime.image;
      setImageUrl(imageUrl);

      const synopsis = anime.synopsis;
      setSynopsis(synopsis);

      const title = anime.title;
      setTitle(title);
    };

    fetchAnime();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetchFromAPI.get("/anime", {
      params: {
        page: "1",
        size: "1",
        search: searchQuery,
      },
    });

    const anime = response.data.data[0];
    const imageUrl = anime.image;
    setImageUrl(imageUrl);

    const synopsis = anime.synopsis;
    setSynopsis(synopsis);

    const title = anime.title;
    setTitle(title);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div
        className="modal-content"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      />
      <Anime
        imageUrl={imageUrl}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        searchQuery={searchQuery}
        synopsis={synopsis}
        title={title}
      />
    </>
  );
};
export default App;
