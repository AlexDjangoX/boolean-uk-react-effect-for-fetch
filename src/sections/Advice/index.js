import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavoriteSlipsList from "./components/FavouriteSlipsList";

const baseUrl = " 	https://api.adviceslip.com/advice";

const localServerBaseUrl = "http://localhost:3000";

function AdviceSection() {
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    getSomeAdvice();
    updateLocalServer();
  }, []);

  async function getSomeAdvice() {
    try {
      const response = await fetch(`${baseUrl}`);
      const data = await response.json();
      setAdvice(data.slip);
      console.log(advice);
    } catch (error) {
      console.log("Error advice line: ", error);
    }
  }

  async function updateLocalServer(advice) {
    const opts = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ ...advice }),
    };

    const response = await fetch(`${localServerBaseUrl}/advice`, opts);
    const data = await response.json();
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <AdviceSlip advice={advice} getSomeAdvice={getSomeAdvice} />
      </section>
      <section className="favorite-slips-list">
        <FavoriteSlipsList />
      </section>
    </section>
  );
}

export default AdviceSection;
