import React, { useEffect, useState } from "react";

import AdviceSection from "./sections/Advice";
import ArtList from "./sections/Art/components/ArtList";
import UsersSection from "./sections/Users";
import "./styles.css";

const artUrl = "https://api.artic.edu/api/v1/artworks";
const artUrlFields = "?fields=id,title,image_id,subject_titles,artist_display";

function App() {
  const [artData, setArtData] = useState([]);

  useEffect(() => {
    getArtData();
  }, []);

  async function getArtData() {
    try {
      const response = await fetch(`${artUrl}${artUrlFields}`);
      const data = await response.json();
      setArtData(data.data);

      console.log(data.data);
      console.log(artData);
    } catch (error) {
      console.log("Art error", error);
    }
  }

  return (
    <div className="main-layout">
      <ArtList artData={artData} />
      <UsersSection />
      <AdviceSection />
    </div>
  );
}

export default App;
