import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

const userBaseUrl = "https://randomuser.me/api/";
const numberOfUsers = 15;

function UsersSection() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    try {
      const response = await fetch(`${userBaseUrl}?results=${numberOfUsers}`);
      const data = await response.json();
      setUserData(data.results);
      console.log(data.results);
    } catch (error) {
      console.log("User error", error);
    }
  }

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList userData={userData} />
      </div>
    </section>
  );
}

export default UsersSection;
