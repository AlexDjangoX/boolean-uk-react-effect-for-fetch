import React from "react";
import SubjectList from "./SubjectList";

const ArtListItem = ({
  title,
  artistDisplay,
  imageId,
  identity,
  subjectList,
}) => {
  return (
    <li key={identity}>
      <div class="frame">
        <img
          src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
          alt="image_"
        />
      </div>

      <h3>{title}</h3>
      <p>Artist: {artistDisplay}</p>
      <h4>Artistic Subjects:</h4>
      <ul>
        {subjectList.map((item) => (
          <SubjectList item={item} />
        ))}
      </ul>
    </li>
  );
};

export default ArtListItem;
