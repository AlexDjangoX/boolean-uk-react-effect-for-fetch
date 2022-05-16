import React from "react";
import ArtListItem from "./ArtListItem";
const ArtList = ({ artData }) => {
  return (
    <section>
      <h2>Arts Section</h2>
      <div class="scroll-container">
        <ul class="art-list">
          {artData.map((item, i) => (
            <ArtListItem
              key={i}
              title={item.title}
              artistDisplay={item.artist_display}
              imageId={item.image_id}
              identity={item.identity}
              subjectList={item.subject_titles}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ArtList;
