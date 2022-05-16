import React, { useState } from "react";

const UsersListItem = ({ item }) => {
  return (
    <li className={item.gender === "male" ? "bg-blue" : "bg-pink"}>
      <img src={item.picture.medium} alt="Ritthy Ryan" />

      <h3>
        {item.name.title} {item.name.first} {item.name.last}
      </h3>
      <p>Email: {item.email}</p>
    </li>
  );
};

export default UsersListItem;
