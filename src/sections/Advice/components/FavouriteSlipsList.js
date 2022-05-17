import React from "react";

const FavoriteSlipsList = ({ favList }) => {
  return (
    <React.Fragment>
      <ul>
        {favList &&
          favList.map((item) => {
            return <li>{item}</li>;
          })}
      </ul>
    </React.Fragment>
  );
};

export default FavoriteSlipsList;
