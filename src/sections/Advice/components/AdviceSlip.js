import React from "react";
import FavoriteSlipsList from "./FavouriteSlipsList";
import { Button, Grid } from "@nextui-org/react";

const AdviceSlip = ({ advice, getSomeAdvice }) => {
  console.log(advice.id);
  console.log(advice.advice);

  const addToFavorites = () => {};

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
        <ul>
          <FavoriteSlipsList />
          <li>Measure twice, cut once.</li>
          <li>Don't let the bastards grind you down.</li>
          <li>Always the burrito.</li>
        </ul>
      </section>
    </React.Fragment>
  );
};

export default AdviceSlip;
