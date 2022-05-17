import React, { useState } from "react";
import FavoriteSlipsList from "./FavouriteSlipsList";
import { Button, Grid } from "@nextui-org/react";

const AdviceSlip = ({ advice, getSomeAdvice }) => {
  const [favList, setFavList] = useState([]);

  const addToFavorites = () => {
    if (!favList.includes(advice.advice))
      setFavList([...favList, advice.advice]);
  };

  return (
    <React.Fragment>
      <section className="advice-slip">
        <h3>Some Advice</h3>
        <p>{advice.advice}</p>
        <Grid.Container gap={2}>
          <Grid>
            <Button shadow color="primary" auto onPress={getSomeAdvice}>
              More Advice ?
            </Button>
          </Grid>
          <Grid>
            <Button shadow color="secondary" auto onPress={addToFavorites}>
              Add to Favorites
            </Button>
          </Grid>
        </Grid.Container>
      </section>
      <section className="favorite-slips-list">
        <h3>Favorite Advice Slips</h3>
        <FavoriteSlipsList favList={favList} />
      </section>
    </React.Fragment>
  );
};

export default AdviceSlip;
